import React from 'react'
import type { FooterLink } from '../../interfaces'
import { Link } from 'react-router-dom'

const FooterColumn = ({title, sectionsLinks, link} : FooterLink) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-7.5 pb-5 lg:pb-0 border-b lg:border-b-0 border-gray-15">
      <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-gray-60 hover:opacity-70 cursor-pointer">
        {title}
      </h3>
      <div className="flex flex-col gap-2 lg:gap-4 2xl:gap-5">
        {sectionsLinks.map((socialLink) => (
          <Link key={socialLink} to={link}>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] hover:opacity-70 cursor-pointer">
              {socialLink}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn


// import type { columnFoot } from "../../interfaces";
// import {  NavLink } from "react-router-dom";

// interface FooterColProps {
//   Col: columnFoot
// }

// function FooterColumn({ Col }: FooterColProps) {
//   return <div className="flex gap-[16px] w-[178px] justify-between items-start p-2 sm:p-0 lg:w-fit">
//     <div className={Col.Border ? "flex flex-col 2xl:gap-[30px] lg:gap-[24px] gap-[8px] sm:border-0  border-gray-15  pb-5 border-b-1 2xl:text-[18px] lg:text-[16px] text-[14px] w-[158px] h-full lg:w-fit" : " lg:w-fit w-[158px] flex flex-col 2xl:gap-[30px] lg:gap-[24px] gap-[8px] sm:border-0  border-gray-15  pb-5 border-b-1 2xl:text-[18px] lg:text-[16px] text-[14px] h-full"}>
//       <h3 className="text-gray-60">{Col.title}</h3>
//       <p><NavLink to={`${Col.Href}`}>{Col.link1}</NavLink></p>
//       <p><NavLink to={`${Col.Href}`}>{Col.link2}</NavLink></p>
//       <p><NavLink to={`${Col.Href}`}>{Col.link3}</NavLink></p>
//       <p><NavLink to={`${Col.Href}`}>{Col.link4}</NavLink></p>
//       <p><NavLink to={`${Col.Href}`}>{Col.link5}</NavLink></p>
//     </div>
//     {Col.Border && <div className="h-full w-[1px] bg-gray-15 sm:w-0"></div>}
//   </div>;
// };

// export default FooterColumn;
