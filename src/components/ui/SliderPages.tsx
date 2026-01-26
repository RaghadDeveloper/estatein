import SliderButton from "./SliderButton";
import type { SliderPagesProps } from "../../interfaces";

const SliderPages = ({
  cardsLength,
  currentPage,
  totalPages,
  show,
  setShow,
  isPrevDisabled,
  isNextDisabled,
  text,
  prevClass,
  nextClass,
}: SliderPagesProps) => {
  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-15 pt-7.5 lg:pt-4 2xl:pt-5">
      <button
        onClick={() => setShow(!show)}
        className={`${!show && "mx-auto"}
            border border-gray-15 py-3.5 px-5 text-[14px]
            text-white lg:hidden rounded-xl`}
      >
        {text}
      </button>

      <div className="hidden lg:block">
        <span className="text-white">
          {String(currentPage).padStart(2, "0")}
        </span>
        <span className="text-gray-60"> of </span>
        <span className="text-gray-60">
          {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      <div className={`${show ? "block" : "hidden"} flex items-center gap-2.5`}>
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
  );
};

export default SliderPages;
