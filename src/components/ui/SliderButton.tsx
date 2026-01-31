import { useTheme } from "../../context/ThemeContext";
import type { SliderButtonProps } from "../../interfaces";

const SliderButton = ({ className, image, disabled }: SliderButtonProps) => {
  const {theme}=useTheme()
  return (
    <button
      disabled={disabled}
      className={`
        ${className}
        w-14.5 h-14.5 rounded-full flex justify-center items-center ${theme=="light"?"bg-gray-30":""}
        border border-gray-15
        ${disabled ? "cursor-not-allowed opacity-50 " : "cursor-pointer"}
      `}
    >
      <img src={image.source} alt={image.alternative} />
    </button>
  );
};

export default SliderButton;
