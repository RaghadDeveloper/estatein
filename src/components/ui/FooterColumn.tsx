import type { columnFoot } from "./Footer";

interface FooterColProps{
  Col:columnFoot
}

function FooterColumn({Col}:FooterColProps){
  return <div className="flex flex-col gap-[20px] md:border-0 border-r-1 border-white pr-3 pb-5 border-b-1 md:text-[18px] text-[14px]">
    <h3 className="text-gray-60">{Col.title}</h3>
    <p>{Col.link1}</p>
    <p>{Col.link2}</p>
    <p>{Col.link3}</p>
    <p>{Col.link4}</p>
    <p>{Col.link5}</p>
  </div>;
};

export default FooterColumn;
