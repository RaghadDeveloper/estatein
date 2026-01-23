import { inputDevStyleBase, inputLabelStyleBase, inputStyleBase } from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

const InputField = ({ label, placeholder, type, name, value, onChange}: InputProps) => {
  return (
    <div className={`${inputDevStyleBase}`}>
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${inputStyleBase} placeholder:text-gray-40`}
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
