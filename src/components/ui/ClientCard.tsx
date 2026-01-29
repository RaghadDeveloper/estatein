import type { Clientcarddata } from "../../interfaces";
import Button from "./Button";

const ClientCard = ({ year, title, PBox1, PBox2, PBoxBig }: Clientcarddata) => {
  return (
    <div className=" overflow-visible flex flex-col border border-gray-15 2xl:w-193.752xl:2xl:h-120 2xl:gap-10 2xl:p-12.5 lg:w-155lg:h-105 lg:gap-7.5 lg:p-10 w-88.75h-115 gap-6 p-7.5 rounded-xl shadow-[0px_0px_0px_6px_#191919] lg:shadow-[0px_0px_0px_8px_#191919] ">
      <div className="flex justify-between lg:items-center gap-5 lg:flex-row flex-col">
        <div className="flex flex-col justify-center">
          <p className="text-gray-60 text-[16px] mb-0.5 lg:mb-1 2xl:mb-1.5">
            Since{year}
          </p>
          <h3 className="2xl:text-[30px] lg:text-[24px] text-[20px]">
            {title}
          </h3>
        </div>
        <div className="h-fit">
          <Button variant="secondary">Visit Website</Button>
        </div>
      </div>
      <div className="flex justify-between gap-2.5">
        <div className="flex flex-col gap-1 lg:gap-1.5 2xl:gap-2 w-full">
          <div className="flex gap-1.5">
            <img
              src="/public/assets/icons/domain.svg"
              alt="imgCardCleint1"
              className="aspect-square"
            />
            <p className="text-gray-60 text-[12px] 2xl:text-lg">Domain</p>
          </div>
          <p className="2xl:text-[20px] lg:text-[16px] text-[14px]">{PBox1}</p>
        </div>
        <div className="w-0.5 bg-gray-15 mx-4 lg:mx-5 2xl:mx-7.5"></div>
        <div className="flex flex-col gap-1 lg:gap-1.5 2xl:gap-2 w-full">
          <div className="flex gap-1.5">
            <img
              src="/public/assets/icons/category.svg"
              alt="imgCardCleint2"
              className="aspect-square"
            />
            <p className="text-gray-60 text-[12px] 2xl:text-lg">Category</p>
          </div>
          <p className="2xl:text-[20px] lg:text-[16px] text-[14px]">{PBox2}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5 border-2 border-gray-15 p-5 lg:p-6 2xl:p-7.5 rounded-xl text-[16px]">
        <p className="text-gray-60">"What They Said 🤗"</p>
        <p className="2xl:text-[18px] lg:text-[16px] text-[14px]">{PBoxBig}</p>
      </div>
    </div>
  );
};

export default ClientCard;
