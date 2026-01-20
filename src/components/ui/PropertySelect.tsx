import { useState } from 'react';
import arrowIcon from '/assets/icons/arrowbottom.svg';
import type { PropertySelectProps } from '../../interfaces';

const PropertySelect = ({ icon, label, options, onSelect }: PropertySelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(label);

  const handleSelect = (option: string): void => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-full">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-gray-08 border border-gray-15 p-3 rounded-[10px] cursor-pointer hover:border-gray-20 transition-all"
      >
        <div className="flex items-center gap-3 w-full">
          <div className="border-r border-gray-15 pr-3 shrink-0">
             <img src={icon} alt={label} className="w-5 h-5 opacity-60" />
          </div>
          <span className="text-gray-60 text-[14px] font-urbanist font-medium truncate">
            {selected}
          </span>
        </div>
        <img 
          src={arrowIcon} 
          alt="arrow" 
          className={`w-4 h-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-gray-08 border border-gray-15 rounded-lg shadow-2xl overflow-hidden">
          {options.map((option: string, idx: number) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 text-sm text-gray-60 hover:bg-gray-10 hover:text-white cursor-pointer font-urbanist border-b border-gray-15 last:border-none"
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