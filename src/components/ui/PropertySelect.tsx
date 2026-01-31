import { useState } from "react";
import arrowIcon from "/assets/icons/arrowbottom.svg";
import type { PropertySelectProps } from "../../interfaces";
import { useTheme } from "../../context/ThemeContext";

const PropertySelect = ({
  icon,
  label,
  options,
  onSelect,
}: PropertySelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(label);

  const handleSelect = (option: string): void => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };
  const {theme}=useTheme();
  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${theme=="light"?"bg-[#141414]":"bg-gray-08"} flex items-center justify-between  border border-gray-15 px-3.5 py-3 2xl:p-5 rounded-[10px] cursor-pointer hover:border-gray-20 transition-all `}
      >
        <div className="flex items-center gap-3 w-full">
          <div className="border-r border-gray-15 pr-3 shrink-0">
            <img src={icon} alt={label} className="w-5 h-5 opacity-60" />
          </div>
          <span className={` ${theme=="light"?"text-gray-09 ":"text-gray-60 "} text-[14px] font-medium truncate`}>
            {selected}
          </span>
        </div>
        <div className={`${theme=="light"?"text-gray-90 ":" bg-gray-10 "} shrink-0 p-1 rounded-full w-7 h-7 2xl:w-8 2xl:h-8 flex items-center justify-center `}>
          <img
            src={arrowIcon}
            alt="arrow"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-gray-08 border border-gray-15 rounded-lg shadow-2xl overflow-hidden">
          {options.map((option: string, idx: number) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className={`${theme=="light"?" hover:text-primary-60 ":"  hover:text-white "} px-4 py-3 text-sm text-gray-60 hover:bg-gray-10 cursor-pointer border-b border-gray-15 last:border-none`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertySelect;
