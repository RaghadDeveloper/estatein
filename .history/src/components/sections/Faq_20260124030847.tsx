import FaqCard from "../ui/FaqCard";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { faqsHeaderData, questions } from "../../data/homeData";
import type { PropsFaqCArd } from "../../interfaces";
import Slider from "../layouts/Slider";

function Faq() {
  const questionsCards = questions.map((item: PropsFaqCArd) => (
    <FaqCard H3={item.H3} P={item.P} />
  ));
  return (
    <SectionContainer>
      <SectionHeader {...faqsHeaderData} />
      <Slider cards={questionsCards} spaceBetween={30} />
    </SectionContainer>
  );
}

export default Faq;
