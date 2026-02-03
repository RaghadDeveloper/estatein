import type { LocationTab } from "../../interfaces";

function Tab({ active, onClick, children }: LocationTab) {
  return (
    <button
      className={`2xl:w-40 2xl:h-15.75 2xl:py-4.5 2xl:px-6  lg:w-31 h-12.25 py-3.5 px-5 w-27.5 rounded-lg border border-gray-15 2xl:text-[18px] text-[14px] cursor-pointer ${!active ? "bg-bg-secondary" : "bg-bg-main"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Tab;
