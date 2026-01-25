import FaqCard from "../ui/FaqCard";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { faqsHeaderData, questions } from "../../data/homeData";
import type { PropsFaqCArd } from "../../interfaces";
import Slider from "../layouts/Slider";
import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const questionsCards = questions.map((item: PropsFaqCArd, index: number) => (
    <FaqCard key={index} H3={item.H3} P={item.P} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
  ));
  return (
    <SectionContainer>
      <SectionHeader {...faqsHeaderData} />
      <Slider cards={questionsCards} spaceBetween={30} />
    </SectionContainer>
  );
}

export default Faq;