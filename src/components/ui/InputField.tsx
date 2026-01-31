import { useTheme } from "../../context/ThemeContext";
import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

const InputField = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
}: InputProps) => {
  const {theme}=useTheme()

  return (
    <div className={`${inputDevStyleBase}`}>
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${inputStyleBase}  ${theme=="light"?"bg-light-90 text-white":"bg-gray-10"} placeholder:text-gray-40`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
