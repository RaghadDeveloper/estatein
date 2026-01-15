import FooterColumn from "./FooterColumn";

export interface columnFoot {
  title: string,
  link1: string,
  link2: string,
  link3?: string,
  link4?: string,
  link5?: string
}
const ColumnFooter: Array<columnFoot> = [
  {
    title: "Home",
    link1: "Hero Section",
    link2: "Features",
    link3: "Properties",
    link4: "Testimonials",
    link5: "FAQ's"
  },
  {
    title: "About Us",
    link1: "Our Story",
    link2: "Our Works",
    link3: "How It Works",
    link4: "Our Team",
    link5: "Our Clients"
  },
  {
    title: "Properties",
    link1: "Portfolio",
    link2: "Categories"
  },
  {
    title: "Services",
    link1: "Valuation Mastery",
    link2: "Strategic Marketing",
    link3: "Negotiation Wizardry",
    link4: "Closing Success",
    link5: "Property Management"
  },
  {
    title: "Contact Us",
    link1: "Contact Form",
    link2: "Our Offices"
  },
]
const Footer = () => {

  return <div>
    <div className="flex lg:justify-around py-20 xl:flex-row flex-col gap-[30px] items-center">
      <div className="flex flex-col gap-[20px]">
        <div><img src="/public/assets/images/logo/fullLogo.png" alt="logo" /></div>
        <div className="flex gap-[10px] border-1 border-gray-15 w-fit p-5 rounded-xl">
          <img src="/public/assets/icons/envelope.svg" alt="email" />
          <input type="email" placeholder="Enter Your Email" className="border-0 xl:w-[300px] md:w-[200px] w-[300px]" />
          <img src="/public/assets/icons/telegramicon.svg" alt="arrowEmail" />
        </div>
      </div>
      <div className="flex gap-[40px] flex-wrap  justify-around">
        {
          ColumnFooter.map((coL) => (
            <FooterColumn Col={coL} />

          ))
        }
      </div>
    </div>
    <div>
      <div className=" bg-gray-10 flex sm:justify-around sm:flex-row flex-col-reverse items-center gap-[10px] py-[20px] px-[5px]">
        <div className="flex gap-[10px] sm:flex-row flex-col text-center">
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
