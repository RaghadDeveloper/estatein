import { useState } from "react"
import FaqCard from "../ui/FaqCard"
import SectionContainer from "../layouts/SectionContainer"
import SectionHeader from "../ui/SectionHeader"
import { faqsHeaderData, questions } from "../../data/homeData"
import type { PropsFaqCArd } from "../../interfaces"
import Slider from "../layouts/Slider"
import type { Swiper as SwiperType } from "swiper"

function Faq() {
  const questionsCards = questions.map((item: PropsFaqCArd, index) => (
    <FaqCard key={index} H3={item.H3} P={item.P} />
  ))

  // ✅ states المطلوبة
  const [activeIndex, setActiveIndex] = useState(0)
  const [show, setShow] = useState(true)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <SectionContainer>
      <SectionHeader {...faqsHeaderData} />

      <Slider
        cards={questionsCards}
        spaceBetween={30}
        swiperRef={setSwiper}
        onSlideIndexChange={setActiveIndex}
      />

      <SliderPages
        cardsLength={questionsCards.length}
        currentPage={activeIndex + 1}
        totalPages={questionsCards.length}
        show={show}
        setShow={setShow}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === questionsCards.length - 1}
        text="View All FAQ’s"
      />
    </SectionContainer>
  )
}

export default Faq
