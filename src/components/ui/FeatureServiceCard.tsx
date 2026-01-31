import { useTheme } from "../../context/ThemeContext";
import type { FeatureServiceCardProps } from "../../interfaces";
import Button from "../ui/Button";

function FeatureServiceCard({ title, description }: FeatureServiceCardProps) {
  const {theme}=useTheme()
  return (
    <div className="relative border border-gray-15 rounded-xl p-6 md:p-8 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 h-full font-urbanist bg-gray-10">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[url('/assets/images/abstractDesign/featureServiceCard.png')] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-10 flex-1 flex flex-col lg:items-start text-left w-full">
        <h2 className={`${theme=="light"?"text-black":" text-white"} font-bold mb-4 leading-tight text-[18px] md:text-[22px] min-[1440px]:text-[24px] min-[1920px]:text-[30px]`}>
          {title}
        </h2>

        <div className="w-full mb-6 lg:hidden">
          <Button variant="border">Learn More</Button>
        </div>

        <p className="text-gray-60 text-sm lg:text-base max-w-2xl leading-relaxed ">
          {description}
        </p>
      </div>

      <div className="relative z-10 hidden lg:block shrink-0">
        <Button variant="border">Learn More</Button>
      </div>
    </div>
  );
}

export default FeatureServiceCard;
