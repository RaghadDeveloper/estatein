import type { PropsFaqCArd } from "../../interfaces";
import Button from "./Button";

const FaqCard = ({ H3, P }: PropsFaqCArd) => {
  return (
    <div className="border border-gray-15 p-7.5 lg:p-10 2xl:p-12.5 rounded-xl justify-between flex flex-col gap-5 lg:gap-6 2xl:gap-7.5 h-full">
      <h3 className="font-semibold text-lg lg:text-xl 2xl:text-2xl leading-[150%]">
        {H3}
      </h3>
      <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">{P}</p>

      <div className="w-full md:w-fit">
        <Button variant="secondary">Read More</Button>
      </div>
    </div>
  );
};

export default FaqCard;
