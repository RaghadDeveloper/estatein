import type { PropertyDetailsHeaderProps } from '../../interfaces';

const PropertyDetailsHeader = ({name, location, price} : PropertyDetailsHeaderProps) => {
  return (
    <div className="px-4 pt-15 pb-7.5 lg:px-20 lg:pt-20 lg:pb-10 2xl:px-40.5 2xl:pt-30 2xl:pb-12.5">
      <div className="flex flex-col lg:items-center lg:flex-row gap-2.5 lg:gap-5">
        <h1 className="font-semibold text-[20px] lg:text-[24px] 2xl:text-[30px] block lg:">
          {name}
        </h1>
        <div className="flex items-center gap-5 flex-wrap-reverse lg:flex-1 lg:justify-between">
          <div className="flex items-center border border-gray-15 rounded-md p-2 gap-1">
            <img
              className="ms-[3.12px] 2xl:ms-[3.75] w-[13.75px] 2xl:w-[16.5px]"
              src="/assets/icons/LocationWhite.svg"
              alt=""
            />
            <p className="font-medium text-[14px] 2xl:text-[18px]">
              {location}
            </p>
          </div>
          <div className="flex gap-1 lg:gap-0.5 lg:flex-col">
            <p className="font-medium text-[14px] 2xl:text-[18px] text-gray-60">
              price
            </p>
            <h2 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[24px]">
              ${price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsHeader