import type { SectionHeaderProps } from "../../interfaces";

const SectionHeader = ({
  title,
  text,
  extraText,
  btnText,
  onClick,
}: SectionHeaderProps) => {
  return (
    <header className="mb-10 lg:mb-15 xl:mb-20">
      <div className="relative">
        <img
          className="h-5 lg:h-6 xl:h-7.5 absolute -top-5 lg:-top-8 xl:-top-11 -left-2 lg:-left-3 xl:-left-5"
          src="assets/images/abstractDesign/threeStars.png"
          alt=""
        />
        <div className="flex items-end md:gap-16 lg:gap-37.5 justify-between">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[28px] md:text-[32px] lg:text-[38px] xl:text-[48px] font-semibold">
              {title}
            </h2>
            <p className="text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-gray-60">
              {text}{" "}
              {extraText && (
                <span className="hidden md:inline-block">{extraText}</span>
              )}
            </p>
          </div>
          <div>
            {btnText && (
              <button
                onClick={() => onClick}
                className="hidden whitespace-nowrap md:inline-block text-[14px] xl:text-[18px] font-medium py-3.5 xl:py-4.5 xl:px-6 px-5 rounded-lg border border-gray-15 bg-gray-10 cursor-pointer">
                {btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
