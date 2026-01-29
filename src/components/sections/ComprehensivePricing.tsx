import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import {
  pricingDetailsCardsData,
  pricingDetailsHeaderData,
  pricingDetailsNote,
} from "../../data/PropertyData";
import PriceCard from "../ui/PriceCard";
import type {
  ComprehensivePricingProps,
  PricingDetailsCardProps,
} from "../../interfaces";

const ComprehensivePricing = ({ propertyPrice }: ComprehensivePricingProps) => {
  return (
    <SectionContainer>
      <SectionHeader {...pricingDetailsHeaderData} />
      <div className="flex flex-col gap-7.5 lg:gap-10 2xl:gap-12.5">
        {/* note */}
        <div className="rounded-lg 2xl:rounded-xl py-6 px-5 lg:py-5 lg:px-10 2xl:py-7.5 2xl:px-12.5 flex flex-col lg:flex-row lg:items-center gap-2.5 lg:gap-4 2xl:gap-5 bg-gray-10 border border-gray-15">
          <h3 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[24px] pb-2.5 lg:pb-0 lg:pr-4 2xl:pr-5 border-b lg:border-b-0 lg:border-r border-gray-15">
            Note
          </h3>
          <p className="font-medium text-[14px] 2xl:text-[18px] text-gray-60">
            {pricingDetailsNote}
          </p>
        </div>
        {/* details */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 2xl:gap-12.5">
          {/* property price */}
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-[14px] lg:text-[16px] 2xl:text-[20px] text-gray-60">
              Listing Price
            </p>
            <span className="font-semibold text-[24px] lg:text-[30px] 2xl:text-[40px]">
              ${propertyPrice}
            </span>
          </div>

          {/* pricing details cards */}
          <div className="flex flex-col gap-5 grow lg:gap-10 2xl:gap-12.5">
            {pricingDetailsCardsData.map((card: PricingDetailsCardProps) => (
              <PriceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ComprehensivePricing;
