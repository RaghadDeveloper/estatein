import { inputStyleBase } from "../../data/propertiesData";
import type { Option } from "../../interfaces";

const OptionField = ({
  name,
  placeholder,
  value,
  checked,
  icon,
  onChange,
}: Option) => {
  return (
    <label
      className={`${inputStyleBase} flex justify-between items-center cursor-pointer`}
    >
      <div className="flex items-center  gap-1.5 2xl:gap-3">
        <img src={icon} alt="" className="w-5 2xl:6" />
        <p className="text-gray-40">{placeholder}</p>
      </div>
      <input
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        type="radio"
        className="peer sr-only"
      />
      <span className=" h-2.5 w-2.5 2xl:w-4 2xl:h-4 rounded-full border border-primary-60 flex items-center justify-center peer-checked:bg-primary-60" />
    </label>
  );
};

export default OptionField;
