import { useState } from "react"
import FaqCard from "../ui/FaqCard"
import SectionContainer from "../layouts/SectionContainer"
import SectionHeader from "../ui/SectionHeader"
import { faqsHeaderData, questions } from "../../data/homeData"
import type { PropsFaqCArd } from "../../interfaces"
import Slider from "../layouts/Slider"
import type { Swiper as SwiperType } from "swiper"
import SliderPages from "../ui/SliderPages"

function Faq() {
  const questionsCards = questions.map((item: PropsFaqCArd, index) => (
    <FaqCard key={index} H3={item.H3} P={item.P} />
  ))

  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const sliderId = "faq"

  // ✅ عدد الصفحات الحقيقي
  const totalPages = swiper
    ? Math.ceil(
        questionsCards.length /
          (typeof swiper.params.slidesPerView === "number"
            ? swiper.params.slidesPerView
            : 1)
      )
    : 0

  return (
    <SectionContainer>
      <SectionHeader {...faqsHeaderData} />

      <Slider
        sliderId={sliderId}
        cards={questionsCards}
        spaceBetween={30}
        swiperRef={setSwiper}
        onSlideIndexChange={setActiveIndex}
      />

      <SliderPages
        prevClass={`slider-prev-${sliderId}`}
        nextClass={`slider-next-${sliderId}`}
        cardsLength={questionsCards.length}
        currentPage={activeIndex + 1}
        totalPages={totalPages}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === totalPages - 1}
        text="View All FAQ’s"
      />
    </SectionContainer>
  )
}

export default Faq
