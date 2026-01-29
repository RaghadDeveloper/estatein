import SliderButton from "./SliderButton";
import type { SliderPagesProps } from "../../interfaces";

const SliderPages = ({
    cardsLength,
    currentPage,
    totalPages,
    isPrevDisabled,
    isNextDisabled,
    text,
    prevClass,
    nextClass,
    }: SliderPagesProps) => {
    return (
        <div className="mt-6 flex justify-between items-center border-t border-gray-15 pt-7.5 lg:pt-4 2xl:pt-5">
        {text && <button
            className={`
            border border-gray-15 py-3.5 px-5 text-[14px]
            text-white lg:hidden rounded-xl`}
        >
            {text}
        </button>}

      <div className="hidden lg:block">
        <span className="text-white">
          {String(currentPage).padStart(2, "0")}
        </span>
        <span className="text-gray-60"> of </span>
        <span className="text-gray-60">
          {String(totalPages).padStart(2, "0")}
        </span>
      </div>

        <div className={`flex items-center gap-2.5
        ${!text&&"justify-between grow"}`}>
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
            <div className="block lg:hidden">
            <span className="text-white">
            {String(currentPage).padStart(2, "0")}
            </span>
            <span className="text-gray-60"> of </span>
            <span className="text-gray-60">
            {String(totalPages).padStart(2, "0")}
            </span>
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
        </div>
    )
}

export default SliderPages;
