import type { CommonHeroProps } from "../../interfaces";

const CommonHero = ({ title, text, propertyHero }: CommonHeroProps) => {
  return (
    <div
      className={`bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] py-12.5 px-4 md:px-20 lg:pt-25 ${
        propertyHero ? "lg:pb-32.5 2xl:pb-40" : "lg:pb-25"
      } lg:ps-20 lg:pe-50 2xl:pt-37.5 2xl:ps-40.5 2xl:pe-100`}
    >
      <h1 className="text-[28px] font-semibold mb-2.5 lg:text-[38px] 2xl:text-[48px] 2xl:mb-3.5">
        {title}
      </h1>
      <p className="text-[14px] font-medium text-gray-60 lg:text-[16px] 2xl:text-[18px]">
        {text}
      </p>
    </div>
  );
};

export default CommonHero;
