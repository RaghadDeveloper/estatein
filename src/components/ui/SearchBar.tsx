import type { SearchBarProps } from "../../interfaces";
import Button from "./Button";
import searchIcon from "/assets/icons/search.svg";

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <div className="w-full bg-gray-10 shadow-[0px_0px_0px_4px_#191919] lg:shadow-[0px_0px_0px_10px_#191919] rounded-xl lg:rounded-t-2xl lg:rounded-b-none lg:border-b-0">
      <div className="w-full bg-gray-08 border border-gray-15 p-2.5 pl-4.5 lg:p-4 lg:pl-5 2xl:p-5 2xl:pl-6 rounded-xl flex items-center justify-between shadow-inner">
        <div className="flex-1 pr-3 ">
          <input
            type="text"
            placeholder="Search For A Property"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            className="bg-transparent border-none outline-none text-gray-40 w-full placeholder:text-gray-30 font-urbanist font-medium text-base lg:text-xl 2xl:text-2xl"
          />
        </div>
        <div className="shrink-0">
          <Button variant="primary" onClick={onSearch}>
            <div className="flex items-center gap-2">
              <img src={searchIcon} alt="search" className="w-5 2xl:w-6" />
              <span className="hidden md:block">Find Property</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
