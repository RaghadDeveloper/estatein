import type { PropsFaqCArd } from "../../interfaces";

const FaqCard = ({H3,P,TextButton}:PropsFaqCArd) => {
  return <div className="border-1 border-gray-15 p-[25px] rounded-xl lg:w-[350px] justify-between flex flex-col lg:gap-[20px] md:w-[300px] md:gap-[15px] w-[350px] gap-[20px]">
    <h3>{H3}</h3>
    <p className="text-gray-60">{P}</p>
    <button className="border-1 border-gray-15 p-[10px] rounded-xl bg-gray-10 w-fit">{TextButton}</button>
  </div>;
};

export default FaqCard;
