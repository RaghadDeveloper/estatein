import type { FeatureServiceCardProps } from "../../interfaces";
import Button from "../ui/Button";

function FeatureServiceCard({
  title,
  description,
  bgImage,
}: FeatureServiceCardProps) {
  return (
    <div className="relative border border-gray-15 rounded-[12px] p-6 md:p-8 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 h-full font-urbanist bg-[#1A1A1A]">
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col lg:items-start text-left w-full">
        <h2
          className="
          text-white font-bold mb-4 leading-tight
          text-[18px] md:text-[22px]           
          min-[1440px]:text-[24px] 
          min-[1920px]:text-[30px]  
        "
        >
          {title}
        </h2>

        <div className="w-full mb-6 lg:hidden">
          <Button variant="gray08" onClick={() => {}}>
            Learn More
          </Button>
        </div>

        <p className="text-gray-60 text-sm lg:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 hidden lg:block shrink-0">
        <Button variant="gray08" onClick={() => {}}>
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default FeatureServiceCard;
