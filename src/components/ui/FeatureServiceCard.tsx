import type { FeatureServiceCardProps } from "../../interfaces";
import Button from "../ui/Button";

function FeatureServiceCard({
  title,
  description,
  reverse,
}: FeatureServiceCardProps) {
  return (
    <div className="relative border border-gray-15 rounded-xl p-6 lg:p-10 2xl:p-12.5 overflow-hidden flex flex-col gap-4 lg:gap-5 2xl:gap-7.5 h-full font-urbanist bg-gray-10">
      <div className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat bg-[url('/assets/images/abstractDesign/featureServiceCard.png')]" />

      <div className="relative z-10 flex items-center justify-between w-full gap-4">
        <h2 className=" font-bold leading-[150%] text-xl md:text-2xl min-[1440px]:text-[24px] min-[1920px]:text-[30px]">
          {title}
        </h2>

        <div className="hidden lg:block shrink-0">
          <Button variant="border">Learn More</Button>
        </div>
      </div>

      <div
        className={`relative z-10 flex-1 flex flex-col items-start text-left w-full gap-5 2xl:gap-7.5 ${reverse ? "flex-col-reverse lg:flex-col" : ""}`}
      >
        <div className="w-full lg:hidden">
          <Button variant="border">Learn More</Button>
        </div>

        <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg max-w-2xl leading-[150%] mb-0 ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureServiceCard;
