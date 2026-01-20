import { inputStyleBase } from "../../data/propertiesData";
import type { Option } from "../../interfaces";

const OptionField = ({ name, placeholder, value, icon }: Option) => {
  return (
    <label className={`${inputStyleBase} flex justify-between items-center cursor-pointer`}>
      <div className="flex items-center  gap-1.5 2xl:gap-3">
        <img src={icon} alt="" className="w-5 2xl:6" />
        <p className="text-gray-40">{placeholder}</p>
      </div>
      <input name={name} value={value} type="radio" className="peer sr-only" />
      <span
        className="
      h-2.5 w-2.5 2xl:w-4 2xl:h-4 rounded-full border border-primary-60
      flex items-center justify-center
      peer-checked:bg-primary-60"
      />
    </label>
    // <label className="cursor-pointer">
    //   <input type="radio" name="contact" className="peer sr-only" />

    //   <div
    //     className="
    //   h-11 flex items-center gap-3 rounded-lg
    //   border border-neutral-800 bg-neutral-900 px-4
    //   text-sm text-neutral-400
    //   transition
    //   peer-checked:border-violet-600
    //   peer-checked:ring-2 peer-checked:ring-violet-600
    // ">
    //     📞 Phone
    //     <span className="ml-auto h-2 w-2 rounded-full bg-violet-600 opacity-0 peer-checked:opacity-100" />
    //   </div>
    // </label>
  );
};

export default OptionField;
