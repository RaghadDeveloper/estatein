import { iconFooter, iconLinks } from "../../data/homeData";
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
    Border:true,
    Href:"/"
  },
  {
    title: "About Us",
    link1: "Our Story",
    link2: "Our Works",
    link3: "How It Works",
    link4: "Our Team",
    link5: "Our Clients",
    Border:false,
    Href:"/about"
  },
  {
    title: "Properties",
    link1: "Portfolio",
    link2: "Categories",
    Border:true,
    Href:"/properties"
  },
  {
    title: "Services",
    link1: "Valuation Mastery",
    link2: "Strategic Marketing",
    link3: "Negotiation Wizardry",
    link4: "Closing Success",
    link5: "Property Management",
    Border:false,
    Href:"/services"
  },
  {
    title: "Contact Us",
    link1: "Contact Form",
    link2: "Our Offices",
    Border:true,
    Href:"/contact"
  },
]
const Footer = () => {

  return <div>
    <div className="flex lg:justify-around py-5 xl:flex-row flex-col gap-7.5 items-center">
      <div className="flex flex-col gap-5">
        <div><img src="/public/assets/images/logo/fullLogo.png" alt="logo" /></div>
        <div className="flex gap-2.5 border border-gray-15  p-5 rounded-xl 2xl:w-105.25 lg:w-76.25 w-89.25">
          <img src="/public/assets/icons/envelope.svg" alt="email" className="w-fit"/>
          <input type="email" placeholder="Enter Your Email" className="border-0 w-full" />
          <img src="/public/assets/icons/telegramicon.svg" alt="arrowEmail" className="w-fit"/>
        </div>
      </div>
      <div className="flex  flex-wrap  gap-5 sm:justify-around ">
        {
          ColumnFooter.map((coL) => (
            <FooterColumn Col={coL} />

          ))
        }
      </div>
    </div>
    <div>
      <div className=" bg-gray-10 flex sm:justify-around sm:flex-row flex-col-reverse items-center gap-2.5 py-4 px-1.25 2xl:h-25 2xl:text-[18px]">
        <div className="flex gap-2.5 sm:flex-row flex-col text-center 2xl:text-[18px] lg:text-[16px] text-[14px]">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex gap-2.5">
          {
            iconFooter.map((item:string , index:number)=>(
              <div className="w-fit p-3 flex justify-center items-center bg-gray-08 rounded-[25px]"><a href={iconLinks[index]}><img src={item} alt={`imgFooter${index}`} /></a></div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
};

export default Footer;