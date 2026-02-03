import { SlArrowDown } from "react-icons/sl";
import { useState, type ChangeEvent } from "react";
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
  Icon,
  colSpan,
  value,
  onChange,
}: InputProps) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={`${inputDevStyleBase} md:col-span-${colSpan ? colSpan : 1}`}
    >
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center">
        <select
          className={`${inputStyleBase} appearance-none cursor-pointer ${selectedValue !== placeholder ? "text-text-main" : "text-gray-40"} focus:text-text-main`}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
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
        <div className="absolute right-5 pointer-events-none text-2xl">
          {Icon ? <Icon /> : <SlArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default SelectField;
