import SliderButton from "./SliderButton";
import type { SliderPagesProps } from "../../interfaces";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SliderPages = ({
  currentPage,
  totalPages,
  isPrevDisabled,
  isNextDisabled,
  text,
  link,
  prevClass,
  nextClass,
}: SliderPagesProps) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-15 pt-7.5 lg:pt-4 2xl:pt-5">
      {text && (
        <div className="lg:hidden">
          <Button variant="border" onClick={() => navigate(link!)}>
            {text}
          </Button>
        </div>
      )}

      <div className="hidden lg:block">
        <span>{String(currentPage).padStart(2, "0")}</span>
        <span className="text-text-secondary"> of </span>
        <span className="text-text-secondary">
          {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`flex items-center gap-2.5
        ${!text && "justify-between grow lg:grow-0"}`}
      >
        <SliderButton
          className={prevClass}
          disabled={isPrevDisabled}
          direction="prev"
        />
        <div className="block lg:hidden">
          <span className="text-text-main">
            {String(currentPage).padStart(2, "0")}
          </span>
          <span className="text-text-secondary"> of </span>
          <span className="text-text-secondary">
            {String(totalPages).padStart(2, "0")}
          </span>
        </div>
        <SliderButton
          className={nextClass}
          disabled={isNextDisabled}
          direction="next"
        />
      </div>
    </div>
  );
};

export default SliderPages;
