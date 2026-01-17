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
      textButton={item.textButton}
      img1={item.img1}
      titleBox1={item.titleBox1}
      PBox1={item.PBox1}
      img2={item.img2}
      titleBox2={item.titleBox2}
      PBox2={item.PBox2}
      titleBoxBig={item.titleBoxBig}
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
