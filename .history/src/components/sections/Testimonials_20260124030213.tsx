import SectionContainer from "../layouts/SectionContainer";
import TestimonialCard from "../ui/TestimonialCard";
import type { Testimonial } from "../../interfaces";
import Slider from "../layouts/Slider";
import { testimonialsData, testimonialsHeaderData } from "../../data/homeData";
import SectionHeader from "../ui/SectionHeader";
import SliderPages from "../ui/SliderPAges";
const Testimonials = () => {
  const testimonialCards = testimonialsData.map((item: Testimonial) => (
    <TestimonialCard key={item.id} testimonial={item} />
  ));

  return (
    <SectionContainer>
      <SectionHeader {...testimonialsHeaderData} />
      <Slider cards={testimonialCards} spaceBetween={30} />
      <SliderPages
  cardsLength={testimonialCards.length}
  currentPage={activeIndex + 1}
  totalPages={testimonialCards.length}
  show={show}
  setShow={setShow}
  isPrevDisabled={activeIndex === 0}
  isNextDisabled={activeIndex === cards.length - 1}
  text="Show all"
/>
    </SectionContainer>
  );
};

export default Testimonials;
