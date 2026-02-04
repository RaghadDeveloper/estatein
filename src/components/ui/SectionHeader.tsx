import { useNavigate } from "react-router-dom";
import type { SectionHeaderProps } from "../../interfaces";
import Button from "./Button";
import ThreeStars from "../icons/ThreeStars";

const SectionHeader = ({
  title,
  text,
  extraText,
  btnText,
  onClick,
  className,
}: SectionHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={`${className || "mb-10 lg:mb-15 2xl:mb-20"} `}>
      <div className="relative">
        <ThreeStars
          background={className && "text-gray-10 light:text-light-90"}
        />
        <div
          className={`flex items-end md:gap-16 ${
            btnText && "lg:gap-37.5 2xl:gap-50"
          } justify-between`}
        >
          <div className="flex flex-col gap-1.5 lg:gap-2.5 2xl:gap-3.5">
            <h2 className="text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-[48px] font-semibold">
              {title}
            </h2>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-text-secondary lg:max-w-257.25 2xl:max-w-336.75 ">
              {text}{" "}
              {extraText && (
                <span className="hidden md:inline-block">{extraText}</span>
              )}
            </p>
          </div>

          {btnText && (
            <div className="hidden lg:inline-block">
              <Button
                variant="secondary"
                onClick={() => navigate(`${onClick || "#"}`)}
              >
                {btnText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
