import { useState } from "react"
import SectionContainer from "../layouts/SectionContainer"
import TestimonialCard from "../ui/TestimonialCard"
import type { Testimonial } from "../../interfaces"
import Slider from "../layouts/Slider"
import { testimonialsData, testimonialsHeaderData } from "../../data/homeData"
import SectionHeader from "../ui/SectionHeader"
import type { Swiper as SwiperType } from "swiper"
import SliderPages from "../ui/SliderPAges"

const Testimonials = () => {
  const testimonialCards = testimonialsData.map((item: Testimonial) => (
    <TestimonialCard key={item.id} testimonial={item} />
  ))

  const [activeIndex, setActiveIndex] = useState(0)
  const [show, setShow] = useState(true)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  // ✅ معرف فريد لهذا السلايدر
  const sliderId = "testimonials"

  return (
    <SectionContainer>
      <SectionHeader {...testimonialsHeaderData} />

      <Slider
        sliderId={sliderId}          
        cards={testimonialCards}
        spaceBetween={30}
        swiperRef={setSwiper}
        onSlideIndexChange={setActiveIndex}
      />

      <SliderPages
        prevClass={`slider-prev-${sliderId}`}   
        nextClass={`slider-next-${sliderId}`}   
        cardsLength={testimonialCards.length}
        currentPage={activeIndex + 1}
        totalPages={testimonialCards.length}
        show={show}
        setShow={setShow}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === testimonialCards.length - 1}
        text="View All Testimonials"
      />
    </SectionContainer>
  )
}

export default Testimonials
