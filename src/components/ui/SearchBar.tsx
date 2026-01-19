import type { SearchBarProps } from '../../interfaces';
import searchIcon from '/assets/icons/search.svg';

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <div className="w-full bg-gray-10 p-3 md:p-4 rounded-[12px] md:rounded-t-[16px] md:rounded-b-none md:border-b-0">
      <div className="w-full bg-gray-08 border border-gray-15 p-2 md:p-2.5 rounded-[12px] flex items-center justify-between shadow-inner">
        <div className="flex-1 px-3 md:px-4">
          <input
            type="text"
            placeholder="Search For A Property"
            value={value} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} 
            className="bg-transparent border-none outline-none text-gray-40 w-full placeholder:text-gray-30 font-urbanist font-medium text-[14px] md:text-[18px]"
          />
        </div>
        <div className="shrink-0">
          <button 
            type="button"
            onClick={onSearch} 
            className="bg-primary-60 hover:bg-primary-65 p-2.5 md:px-6 md:py-3.5 rounded-[10px] flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer text-white border-none outline-none"
          >
            <img src={searchIcon} alt="search" className="w-5 h-5" />
            <span className="hidden md:block font-urbanist font-medium text-[14px] md:text-[16px]">
              Find Property
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;