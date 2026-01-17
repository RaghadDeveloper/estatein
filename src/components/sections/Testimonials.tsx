import SectionContainer from "../layouts/SectionContainer";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store"; 
import TestimonialCard from "../ui/TestimonialCard";
import type { Testimonial } from "../../interfaces";
const Testimonials = () => {
  const { testimonials } = useSelector((state: RootState) => state.testimonials);

  return (
    <section className="bg-black py-16 md:py-20 font-urbanist"> 
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((item: Testimonial) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Testimonials;