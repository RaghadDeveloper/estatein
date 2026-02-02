import { useParams } from "react-router-dom";
import PriceValue from "./PriceValue";
import { useSelector } from "react-redux";
import { selectProperty } from "../../redux/properties/propertiesSelectors";

const PropertyDetailsHeader = () => {
  const { id } = useParams();

  const property = useSelector(selectProperty(id!));

  return (
    <div className="px-4 pt-15 pb-7.5 lg:px-20 lg:pt-20 lg:pb-10 2xl:px-40.5 2xl:pt-30 2xl:pb-12.5">
      <div className="flex flex-col lg:items-center lg:flex-row gap-2.5 lg:gap-5">
        <h1 className="font-semibold text-[20px] lg:text-[24px] 2xl:text-[30px] block lg:">
          {property?.title}
        </h1>
        <div className="flex items-center gap-5 flex-wrap-reverse lg:flex-1 lg:justify-between">
          <div className="flex items-center border border-gray-15 rounded-md p-2 gap-1">
            <img
              className="ms-[3.12px] 2xl:ms-[3.75] w-[13.75px] 2xl:w-[16.5px]"
              src="/assets/icons/LocationWhite.svg"
              alt=""
            />
            <p className="font-medium text-[14px] 2xl:text-[18px]">
              {property?.location}
            </p>
          </div>

          {property?.price && (
            <PriceValue title="Price" value={property?.price} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsHeader;
