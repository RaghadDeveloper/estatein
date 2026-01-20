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
}: InputProps) => {
  return (
    <div
      className={`${inputDevStyleBase} md:col-span-${colSpan ? colSpan : 1}`}>
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center">
        <select
          className={`${inputStyleBase} text-gray-40 appearance-none cursor-pointer`}
          name={name}
          id={name}>
          <option selected disabled>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option
              className="text-gray-60"
              key={option.value}
              value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-5">
          <img className="w-3.5 2xl:w-3.75" src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
