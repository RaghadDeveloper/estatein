
import type { FeatureServiceCardProps } from "../../interfaces";
import Button from "../ui/Button";

function FeatureServiceCard({ title, description, bgImage }: FeatureServiceCardProps) {
  return (
    <div className="relative border border-gray-15 rounded-xl p-6 md:p-8 lg:p-12 overflow-hidden flex flex-col gap-6 h-full font-urbanist bg-gray-10">
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }} 
      />

      <div className="relative z-10 flex items-center justify-between w-full gap-4">
        <h2 className="text-white font-bold leading-tight text-[18px] md:text-[22px] min-[1440px]:text-[24px] min-[1920px]:text-[30px]">
          {title}
        </h2>

        <div className="hidden lg:block shrink-0">
          <Button variant="border">Learn More</Button>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-start text-left w-full">
        <div className="w-full mb-4 lg:hidden">
          <Button variant="border">Learn More</Button>
        </div>

        <p className="text-gray-60 text-sm lg:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureServiceCard;