import type { columnFoot } from "../../interfaces";
import {  NavLink } from "react-router-dom";

interface FooterColProps {
  Col: columnFoot
}

function FooterColumn({ Col }: FooterColProps) {
  return <div className="flex gap-[16px] w-[178px] justify-between items-start p-2 sm:p-0 lg:w-fit">
    <div className={Col.Border ? "flex flex-col 2xl:gap-[30px] lg:gap-[24px] gap-[8px] sm:border-0  border-gray-15  pb-5 border-b-1 2xl:text-[18px] lg:text-[16px] text-[14px] w-[158px] h-full lg:w-fit" : " lg:w-fit w-[158px] flex flex-col 2xl:gap-[30px] lg:gap-[24px] gap-[8px] sm:border-0  border-gray-15  pb-5 border-b-1 2xl:text-[18px] lg:text-[16px] text-[14px] h-full"}>
      <h3 className="text-gray-60">{Col.title}</h3>
      <p><NavLink to={`${Col.Href}`}>{Col.link1}</NavLink></p>
      <p><NavLink to={`${Col.Href}`}>{Col.link2}</NavLink></p>
      <p><NavLink to={`${Col.Href}`}>{Col.link3}</NavLink></p>
      <p><NavLink to={`${Col.Href}`}>{Col.link4}</NavLink></p>
      <p><NavLink to={`${Col.Href}`}>{Col.link5}</NavLink></p>
    </div>
    {Col.Border && <div className="h-full w-[1px] bg-gray-15 sm:w-0"></div>}
  </div>;
};

export default FooterColumn;
