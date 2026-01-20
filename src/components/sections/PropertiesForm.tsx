import { useState } from "react";
import {
  inputDevStyleBase,
  propertiesFormHeaderData,
  propertyFormInputsData,
} from "../../data/propertiesData";
import SectionContainer from "../layouts/SectionContainer";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import InputField from "../ui/InputField";
import OptionField from "../ui/OptionField";

const PropertiesForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

  // const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // }

  return (
    <SectionContainer>
      <SectionHeader {...propertiesFormHeaderData} />
      <form
        className="rounded-xl p-5 border border-gray-15 flex flex-col gap-7.5"
        action="">
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {propertyFormInputsData.map((input) => (
            <>
              {input.type === "select" && <SelectField {...input} />}
              {input.type === "textarea" && <TextareaField {...input} />}
              {input.type === "radio" && <div className={`${inputDevStyleBase} md:col-span-2`}>
                <label htmlFor="">{input.label}</label>
                <div className="flex flex-col md:flex-row gap-4">

                {input.options?.map((option) => (
                  <OptionField {...option} />
                ))}
                </div>
              </div> }
              {["text", "email", "tel"].includes(input.type) && (
                <InputField {...input} />
              )}
            </>
          ))}
        </div>
        {/* submit */}
        <div className="flex gap-5 flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-1.5 items-center">
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="appearance-none rounded-sm accent-gray-10 bg-gray-10! border border-gray-15! w-6 h-6 2xl:w-7 2xl:h-7 cursor-pointer"
              type="checkbox"
            />
            <p className="font-medium text-gray-60 text-[14px] lg:text-[16px] 2xl:text-[18px]">
              I agree with <span className="underline">Terms of Use</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
          <div className="">
            <Button checked={isChecked} variant="primary">
              Send Your Message
            </Button>
          </div>
        </div>
      </form>
    </SectionContainer>
  );
};

export default PropertiesForm;
