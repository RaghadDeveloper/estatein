import type { Clientcarddata } from "../../interfaces";

const ClientCard = ({ year, title,  PBox1, PBox2, PBoxBig }: Clientcarddata) => {
  return <div className="flex flex-col border-1 border-gray-15   2xl:w-[775px] 2xl:h-[480px] 2xl:gap-[40px] 2xl:p-[50px] lg:w-[620px] lg:h-[420px] lg:gap-[30px] lg:p-[40px] w-[355px] h-[460px] gap-[24px] p-[30px] rounded-xl
  
  ">
    <div className="flex justify-between gap-[20px] lg:flex-row flex-col">
      <div className="flex flex-col justify-center">
        <p className="text-gray-60 text-[16px]">Since{year}</p>
        <h3 className="2xl:text-[30px] lg:text-[24px] text-[20px]">{title}</h3>
      </div>
      <button className="border-[2px] border-gray-15 bg-gray-10 p-[20px] rounded-xl items-center">Visit Website</button>
    </div>
    <div className="flex justify-between gap-[10px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[6px]">
          <img src="/public/assets/icons/domain.svg" alt="imgCardCleint1" />
          <p className="text-gray-60 text-[16px]">Domain</p>
        </div>
        <p className="2xl:text-[20px] lg:text-[16px] text-[14px]">{PBox1}</p>
      </div>
      <div className="w-[2px] h-[60px] bg-gray-15"></div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[6px]">
          <img src="/public/assets/icons/category.svg" alt="imgCardCleint2" />
          <p className="text-gray-60 text-[16px]">Category</p>
        </div>
        <p className="2xl:text-[20px] lg:text-[16px] text-[14px]">{PBox2}</p>
      </div>
    </div>
    <div className="flex flex-col gap-[8px] border-[2px] border-gray-15 md:p-[20px] p-[15px] rounded-xl text-[16px]">
      <p className="text-gray-60">"What They Said 🤗"</p>
      <p className="2xl:text-[18px] lg:text-[16px] text-[14px]">{PBoxBig}</p>
    </div>
  </div>;
};

export default ClientCard;