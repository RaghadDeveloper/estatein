import { useState } from "react";
import arrowIcon from "/assets/icons/arrowbottom.svg";
import type { PropertySelectProps } from "../../interfaces";

interface ExtendedProps extends PropertySelectProps {
  isOpen: boolean;
  onToggle: () => void;
}

const PropertySelect = ({
  icon,
  label,
  options,
  onSelect,
  isOpen,
  onToggle,
}: ExtendedProps) => {
  const [selected, setSelected] = useState<string>(label);

  const handleSelect = (option: string): void => {
    setSelected(option);
    onSelect(option);
    onToggle();
  };

  return (
    <div className="relative w-full">
      <div
        onClick={onToggle}
        className="flex items-center justify-between bg-gray-08 border border-gray-15 px-3.5 py-3 2xl:p-5 rounded-[10px] cursor-pointer hover:border-gray-20 transition-all"
      >
        <div className="flex items-center gap-3 w-full">
          <div className="border-r border-gray-15 pr-3 shrink-0">
            <img src={icon} alt={label} className="w-5 h-5 opacity-60" />
          </div>
          <span className="text-gray-60 text-[14px] font-medium truncate">
            {selected}
          </span>
        </div>
        <div className="shrink-0 bg-gray-10 p-1 rounded-full w-7 h-7 2xl:w-8 2xl:h-8 flex items-center justify-center ">
          <img
            src={arrowIcon}
            alt="arrow"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div
        className={`absolute z-50 w-full mt-1 bg-gray-08 border border-gray-15 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        {options.map((option: string, idx: number) => (
          <div
            key={idx}
            onClick={() => handleSelect(option)}
            className="px-4 py-3 text-sm text-gray-60 hover:bg-gray-10 hover:text-white cursor-pointer border-b border-gray-15 last:border-none"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySelect;
