import type { Clientcarddata } from "../../interfaces";

const ClientCard = ({
  year,
  title,
  textButton,
  img1,
  titleBox1,
  PBox1,
  img2,
  titleBox2,
  PBox2,
  titleBoxBig,
  PBoxBig,
}: Clientcarddata) => {
  return (
    <div className="flex flex-col gap-[30px] border-[4px] border-gray-15 md:p-[25px] sm:p-[20px] p-[15px] rounded-xl">
      <div className="flex justify-between gap-[20px]">
        <div className="flex flex-col justify-center">
          <p className="text-gray-60 text-[16px]">{year}</p>
          <h3>{title}</h3>
        </div>
        <button className="border-[2px] border-gray-15 bg-gray-10 p-[20px] rounded-xl items-center">
          {textButton}
        </button>
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[6px]">
            <img src={img1} alt="imgCardCleint1" />
            <p className="text-gray-60 text-[16px]">{titleBox1}</p>
          </div>
          <p className="text-[16px]">{PBox1}</p>
        </div>
        <div className="w-[2px] h-[60px] bg-gray-15"></div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[6px]">
            <img src={img2} alt="imgCardCleint2" />
            <p className="text-gray-60 text-[16px]">{titleBox2}</p>
          </div>
          <p className="text-[16px]">{PBox2}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] border-[2px] border-gray-15 md:p-[20px] p-[15px] rounded-xl text-[16px]">
        <p className="text-gray-60">{titleBoxBig}</p>
        <p>{PBoxBig}</p>
      </div>
    </div>
  );
};

export default ClientCard;
