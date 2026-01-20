import type { columnFoot } from "../../interfaces";
import FooterColumn from "./FooterColumn";

const ColumnFooter: Array<columnFoot> = [
  {
    title: "Home",
    link1: "Hero Section",
    link2: "Features",
    link3: "Properties",
    link4: "Testimonials",
    link5: "FAQ's",
    Border:true
  },
  {
    title: "About Us",
    link1: "Our Story",
    link2: "Our Works",
    link3: "How It Works",
    link4: "Our Team",
    link5: "Our Clients",
    Border:false
  },
  {
    title: "Properties",
    link1: "Portfolio",
    link2: "Categories",
    Border:true
  },
  {
    title: "Services",
    link1: "Valuation Mastery",
    link2: "Strategic Marketing",
    link3: "Negotiation Wizardry",
    link4: "Closing Success",
    link5: "Property Management",
    Border:false
  },
  {
    title: "Contact Us",
    link1: "Contact Form",
    link2: "Our Offices",
    Border:true
  },
]
const Footer = () => {

  return <div>
    <div className="flex lg:justify-around py-[20px] xl:flex-row flex-col gap-[30px] items-center">
      <div className="flex flex-col gap-[20px]">
        <div><img src="/public/assets/images/logo/fullLogo.png" alt="logo" /></div>
        <div className="flex gap-[10px] border-1 border-gray-15  p-5 rounded-xl 2xl:w-[421px] lg:w-[305px] w-[357px]">
          <img src="/public/assets/icons/envelope.svg" alt="email" className="w-fit"/>
          <input type="email" placeholder="Enter Your Email" className="border-0 w-full" />
          <img src="/public/assets/icons/telegramicon.svg" alt="arrowEmail" className="w-fit"/>
        </div>
      </div>
      <div className="flex  flex-wrap  gap-[20px] sm:justify-around ">
        {
          ColumnFooter.map((coL) => (
            <FooterColumn Col={coL} />

          ))
        }
      </div>
    </div>
    <div>
      <div className=" bg-gray-10 flex sm:justify-around sm:flex-row flex-col-reverse items-center gap-[10px] py-[16px] px-[5px] 2xl:h-[100px] 2xl:text-[18px]">
        <div className="flex gap-[10px] sm:flex-row flex-col text-center 2xl:text-[18px] lg:text-[16px] text-[14px]">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className=" flex gap-[10px]">
          <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]"><img src="/public/assets/icons/facebook.svg" alt="imgFooter1" /></div>
          <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]"><img src="/public/assets/icons/linkedin.svg" alt="imgFooter1" /></div>
          <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]"><img src="/public/assets/icons/twitter.svg" alt="imgFooter1" /></div>
          <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]"><img src="/public/assets/icons/youtube.svg" alt="imgFooter1" /></div>
        </div>
      </div>
    </div>
  </div>
};

export default Footer;