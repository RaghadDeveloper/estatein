import React from "react";
import type { StepCardProps } from "../../interfaces";

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className="flex flex-col w-full lg:max-w-[413px] 2xl:max-w-[512px] font-urbanist mx-auto lg:mx-0">
      
      <div className="relative border-l border-primary-60 pl-5 py-4 ml-[1px]">
        <div className="absolute top-0 left-0 w-12  border-primary-60"></div>
        <span className="text-white text-base md:text-lg font-medium">
          {stepNumber}
        </span>
      </div>

      <div className="relative h-[267px] p-8 md:p-10 bg-gray-08 border border-gray-15 rounded-xl rounded-tl-none overflow-hidden shadow-2xl">
        
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at 0% 0%, #703BF7 0%, transparent 20%)`
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary-60"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-5 leading-tight">
            {title}
          </h3>
          <p className="text-gray-60 text-sm md:text-base leading-relaxed font-light line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;