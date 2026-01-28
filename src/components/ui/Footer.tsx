import React from "react";
import { footerLinks, socialIcons } from "../../data/homeData";
import FooterColumn from "./FooterColumn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-[14px] 2xl:text-[18px] font-medium leading-6 tracking-[-0.6%]">
      <div className="ml-4.25 mr-4 md:mx-20 2xl:mx-40.5 py-12.5 lg:py-20 2xl:py-25 flex flex-col lg:flex-row gap-12.5 lg:gap-17.75 2xl:gap-46.25 ">
        {/* logo + entering email */}
        <div className="flex flex-col gap-5 lg:gap-6 2xl:gap-7.5">
          <div>
            <img
              className="h-8.5 2xl:h-12"
              src="/assets/images/logo/fullLogo.png"
              alt=""
            />
          </div>
          <div className="lg:w-76.25 2xl:w-105.75 flex gap-1.5 2xl:gap-2.5 py-3.5 2xl:py-4.5 px-5 2xl:px-6 items-center relative border border-gray-15 rounded-lg">
            <img
              className="w-5 2xl:w-6"
              src="/assets/icons/envelope.svg"
              alt=""
            />
            <input
              className="text-gray-60 focus:outline-none"
              type="text"
              placeholder="Enter Your Email"
            />
            <img
              className="absolute right-5 w-5 2xl:w-7.5"
              src="/assets/icons/telegramicon.svg"
              alt=""
            />
          </div>
        </div>
        {/* Pages Links Sections - Desktop */}
        <div className="hidden lg:flex justify-between flex-1">
          {footerLinks.map((link) => (
            <FooterColumn key={link.title} {...link} />
          ))}
        </div>
        {/* Pages Links Sections - Mobile & Tablet */}
        <div className="lg:hidden flex gap-5 flex-col flex-1">
          <div className="flex justify-between gap-5">
            {/* home + about */}
            <div className="flex-1">
              <FooterColumn {...footerLinks[0]} />
            </div>
            <div className="border-r border-gray-15"></div>
            <div className="flex-1">
              <FooterColumn {...footerLinks[1]} />
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col flex-1 gap-5">
              {/* properties + services */}
              <FooterColumn {...footerLinks[2]} />
              <FooterColumn {...footerLinks[4]} />
            </div>
            <div className="border-r border-gray-15"></div>

            {/* contact */}
            <div className="flex-1">
              <FooterColumn {...footerLinks[3]} />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4.25 pr-4 md:px-20 2xl:px-40.5 py-5 lg:py-3.5 2xl:py-4 bg-gray-10 flex flex-col items-center justify-center text-center gap-5 lg:flex-row-reverse lg:justify-between">
        {/* socials */}
        <div className="flex items-center justify-center gap-2 2xl:gap-2.5">
          {socialIcons.map((iconName) => (
            <div className="bg-gray-08 p-5 lg:p-2.5 2xl:p-3.5 rounded-full w-15 h-15 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 flex items-center justify-center relative cursor-pointer hover:shadow-2xs shadow-primary-60">
              <Link to={iconName.link}>
                <img src={`/assets/icons/${iconName.icon}.svg`} alt="" />
              </Link>
            </div>
          ))}
        </div>
        {/* copyright + terms */}
        <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-5 2xl:gap-9.5 cursor-default">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>
            <span className="hover:cursor-pointer hover:underline hover:font-semibold hover:text-primary-60">
              <Link to={"/"}>Terms</Link>
            </span>{" "}
            &{" "}
            <span className="hover:cursor-pointer hover:underline hover:font-semibold hover:text-primary-60">
              <Link to={"/"}>Conditions</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import type { columnFoot } from "../../interfaces";
// import FooterColumn from "./FooterColumn";

// const ColumnFooter: Array<columnFoot> = [
//   {
//     title: "Home",
//     link1: "Hero Section",
//     link2: "Features",
//     link3: "Properties",
//     link4: "Testimonials",
//     link5: "FAQ's",
//     Border: true,
//     Href: "/",
//   },
//   {
//     title: "About Us",
//     link1: "Our Story",
//     link2: "Our Works",
//     link3: "How It Works",
//     link4: "Our Team",
//     link5: "Our Clients",
//     Border: false,
//     Href: "/about",
//   },
//   {
//     title: "Properties",
//     link1: "Portfolio",
//     link2: "Categories",
//     Border: true,
//     Href: "/properties",
//   },
//   {
//     title: "Services",
//     link1: "Valuation Mastery",
//     link2: "Strategic Marketing",
//     link3: "Negotiation Wizardry",
//     link4: "Closing Success",
//     link5: "Property Management",
//     Border: false,
//     Href: "/services",
//   },
//   {
//     title: "Contact Us",
//     link1: "Contact Form",
//     link2: "Our Offices",
//     Border: true,
//     Href: "/contact",
//   },
// ];
// const Footer = () => {
//   return (
//     <div>
//       <div className="flex lg:justify-around py-[20px] xl:flex-row flex-col gap-[30px] items-center">
//         <div className="flex flex-col gap-[20px]">
//           <div>
//             <img src="/public/assets/images/logo/fullLogo.png" alt="logo" />
//           </div>
//           <div className="flex gap-[10px] border-1 border-gray-15  p-5 rounded-xl 2xl:w-[421px] lg:w-[305px] w-[357px]">
//             <img
//               src="/public/assets/icons/envelope.svg"
//               alt="email"
//               className="w-fit"
//             />
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className="border-0 w-full"
//             />
//             <img
//               src="/public/assets/icons/telegramicon.svg"
//               alt="arrowEmail"
//               className="w-fit"
//             />
//           </div>
//         </div>
//         <div className="flex  flex-wrap  gap-[20px] sm:justify-around ">
//           {ColumnFooter.map((coL) => (
//             <FooterColumn Col={coL} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <div className=" bg-gray-10 flex sm:justify-around sm:flex-row flex-col-reverse items-center gap-[10px] py-[16px] px-[5px] 2xl:h-[100px] 2xl:text-[18px]">
//           <div className="flex gap-[10px] sm:flex-row flex-col text-center 2xl:text-[18px] lg:text-[16px] text-[14px]">
//             <p>@2023 Estatein. All Rights Reserved.</p>
//             <p>Terms & Conditions</p>
//           </div>
//           <div className=" flex gap-[10px]">
//             <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]">
//               <img src="/assets/icons/facebook.svg" alt="imgFooter1" />
//             </div>
//             <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]">
//               <img src="/assets/icons/linkedin.svg" alt="imgFooter1" />
//             </div>
//             <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]">
//               <img src="/assets/icons/twitter.svg" alt="imgFooter1" />
//             </div>
//             <div className="w-fit p-3 flex justify-center bg-gray-08 rounded-[25px]">
//               <img src="/assets/icons/youtube.svg" alt="imgFooter1" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
