import type { PillInfoProps } from "../../interfaces";

const PillInfo = ({ icon, label, value }: PillInfoProps) => {
  return (
    <div className="shrink-0 flex items-center gap-1 px-3.5 py-1.5 2xl:py-2 bg-gray-10 border border-gray-15 rounded-full w-fit">
      {icon && (
        <img src={icon} alt={label} className="w-5 2xl:w-6 h-5 2xl:h-6" />
      )}
      <span className="text-sm 2xl:text-lg font-medium">
        {value ? `${value}-${label}` : label}
      </span>
    </div>
  );
};

export default PillInfo;
