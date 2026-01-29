import { ClientCardData } from "../../data/aboutData";
import type { Clientcarddata } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import Slider from "../layouts/Slider";
import ClientCard from "../ui/ClientCard";

const Clients = () => {
  const cards = ClientCardData.map((item: Clientcarddata) => (
    <ClientCard
      year={item.year}
      title={item.title}
      PBox1={item.PBox1}
      PBox2={item.PBox2}
      PBoxBig={item.PBoxBig}
    />
  ));

  return (
    <SectionContainer>
      <Slider cards={cards} cardsPerView={2} spaceBetween={50} />
    </SectionContainer>
  );
};

export default Clients;
