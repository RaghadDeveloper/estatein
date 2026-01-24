import SliderButton from "./SliderButton"
import type { SliderDotsProps } from "../../interfaces"

const SliderDots = ({
    count,
    activeIndex,
    onDotClick,
    isPrevDisabled,
    isNextDisabled,
    prevClass,
    nextClass,
    }: SliderDotsProps) => {
    return (
        <div
        className="
            flex items-center lg:w-fit mx-auto p-2 lg:p-2.5 mt-5 2xl:mt-7.5
            rounded-[100px] bg-gray-08 gap-2.5 justify-between
        "
        >
        <SliderButton
            className={prevClass}  
            disabled={isPrevDisabled}
            image={{
            source: isPrevDisabled
                ? "/assets/icons/arrowleft.svg"
                : "/assets/icons/arrowleftwhite.svg",
            alternative: "arrow left",
            }}
        />

        <div className="flex gap-0.75">
            {Array.from({ length: count }).map((_, index) => {
            const isActive = index === activeIndex
            return (
                <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`
                    w-[11.17px] h-0.75 rounded-[60px] cursor-pointer
                    transition-colors
                    ${isActive ? "bg-[#703BF7]" : "bg-[#4D4D4D]"}
                `}
                />
            )
            })}
        </div>

        <SliderButton
            className={nextClass}  
            disabled={isNextDisabled}
            image={{
            source: isNextDisabled
                ? "/assets/icons/arrowright.svg"
                : "/assets/icons/arrowrightwithe.svg",
            alternative: "arrow right",
            }}
        />
        </div>
    )
}

export default SliderDots
