import type { PricingDetailInfo } from "../../interfaces";
import PillInfo from "./PillInfo";

const PricingDetail = ({ title, price, note, isFirst, isTwo }: PricingDetailInfo) => {
  return (
    <div
      className={`flex flex-col col-span-2 ${isTwo ? "lg:border-b lg:pb-7.5 2xl:pb-10" : "lg:border-b-0 lg:col-span-1"} gap-2.5 lg:gap-3 2xl:gap-4 pb-5 lg:pb-0 last:pb-0  border-b last:border-b-0 border-gray-15 ${!isTwo && isFirst && "lg:border-r lg:pr-5"}`}>
      <h4 className="font-medium text-[14px] text-gray-60 2xl:text-[18px]">
        {title}
      </h4>
      <div className="flex flex-row items-center gap-3 2xl:gap-4">
        <span className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[24px]">
          {price}
        </span>
        {note && <PillInfo label={note} pricing={true} />}
      </div>
    </div>
  );
};

export default PricingDetail;
