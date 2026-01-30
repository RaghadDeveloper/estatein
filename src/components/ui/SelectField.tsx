import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

const SelectField = ({
  label,
  placeholder,
  options,
  name,
  icon,
  colSpan,
  value,
  onChange,
}: InputProps) => {
  const isPlaceholder = placeholder && value === placeholder;

  return (
    <div
      className={`${inputDevStyleBase} md:col-span-${colSpan ? colSpan : 1}`}
    >
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center">
        <select
          className={`${inputStyleBase} appearance-none cursor-pointer ${isPlaceholder ? "text-gray-40" : "text-white"}`}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        >
          {/* first option (fixed) */}
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {/* options that user can select */}
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-5">
          <img className="w-5 2xl:w-6" src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
