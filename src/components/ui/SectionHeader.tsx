import type { SectionHeaderProps } from "../../interfaces";
import Button from "./Button";

const SectionHeader = ({
  title,
  text,
  extraText,
  btnText,
  onClick,
}: SectionHeaderProps) => {
  return (
    <header className="mb-10 lg:mb-15 2xl:mb-20">
      <div className="relative">
        <img
          className="h-5 lg:h-6 2xl:h-7.5 absolute -top-5 lg:-top-8 2xl:-top-11 -left-2 lg:-left-3 2xl:-left-5"
          src="assets/images/abstractDesign/threeStars.png"
          alt=""
        />
        <div className="flex items-end md:gap-16 lg:gap-37.5 2xl:gap-50 justify-between">
          <div className="flex flex-col gap-1.5 lg:gap-2.5 2xl:gap-3.5">
            <h2 className="text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-[48px] font-semibold">
              {title}
            </h2>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-gray-60">
              {text}{" "}
              {extraText && (
                <span className="hidden md:inline-block">{extraText}</span>
              )}
            </p>
          </div>

          {btnText && (
            <div className="hidden md:inline-block">
              <Button variant="secondary" onClick={onClick}>
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
