import { GoArrowLeft } from "react-icons/go";
import type { SliderButtonProps } from "../../interfaces";

const SliderButton = ({ className, direction, disabled }: SliderButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`
        ${className}
        w-14.5 h-14.5 rounded-full flex justify-center items-center
        border border-gray-15 text-3xl
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      `}
    >
      {direction === "prev" ? (
        <GoArrowLeft />
      ): (
        <GoArrowLeft className="rotate-180" />
      )}
    </button>
  );
};

export default SliderButton;
