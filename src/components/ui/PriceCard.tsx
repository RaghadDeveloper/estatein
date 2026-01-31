import React from "react";
import type {
  PricingDetailInfo,
  PricingDetailsCardProps,
} from "../../interfaces";
import Button from "./Button";
import PricingDetail from "./PricingDetail";

const PriceCard = ({ title, detailsInfo }: PricingDetailsCardProps) => {
  return (
    <article className="rounded-xl p-5 lg:p-10 2xl:p-12.5 flex flex-col gap-5 lg:gap-7.5 2xl:gap-10 border border-gray-15">
      <div className="flex justify-between items-center pb-5 lg:pb-7.5 2xl:pb-10 border-b border-gray-15 gap-10">
        <h3 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[24px]">
          {title}
        </h3>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:gap-7.5 2xl:gap-10 ">
        {detailsInfo.map((pricingDetail: PricingDetailInfo, index) => {
          const totalItems = detailsInfo.length;
          const isEvenTotal = totalItems % 2 === 0;
          const isLastItem = index === totalItems - 1;
          const isSecondLastItem = index === totalItems - 2;

          // detect if the item was the last on a row
          const isSecondInRow = index % 2 === 1;
          const isFirstInRow = index % 2 === 0 && !isLastItem;

          const isTwoItems = totalItems === 2;

          // condition to add a divider with border bottom style
          const shouldAddDivider =
            isSecondInRow &&
            !isLastItem &&
            !(isEvenTotal && (isLastItem || isSecondLastItem));
          return (
            <React.Fragment key={index}>
              <PricingDetail
                {...pricingDetail}
                isFirst={isFirstInRow}
                isTwo={isTwoItems}
              />
              {shouldAddDivider && (
                <div className="hidden lg:block col-span-2 lg:border-b border-gray-15"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default PriceCard;
