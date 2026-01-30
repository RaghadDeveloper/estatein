import type { ClientInfoProps } from "../../interfaces";

const ClientInfo = ({ label, value, icon }: ClientInfoProps) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-1.5 2xl:gap-2 w-full">
      <div className="flex gap-1.5">
        <img src={icon} alt={label} className="aspect-square" />
        <p className="text-gray-60 text-[12px] 2xl:text-lg">{label}</p>
      </div>
      <p className="2xl:text-[20px] lg:text-[16px] text-[14px]">{value}</p>
    </div>
  );
};

export default ClientInfo;
