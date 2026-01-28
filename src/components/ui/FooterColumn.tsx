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