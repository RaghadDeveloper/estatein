import { useState } from "react";
import {
  inputDevStyleBase,
  inputLabelStyleBase,
  propertiesFormHeaderData,
  propertyFormInputsData,
} from "../../data/propertiesData";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import InputField from "../ui/InputField";
import OptionField from "../ui/OptionField";
import FormFooter from "../ui/FormFooter";
import type { PropertiesFormData } from "../../interfaces";

const PropertiesForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [propertiesFormData, setPropertiesFormData] =
    useState<PropertiesFormData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "Select Location",
      propertyType: "Select Property Type",
      bathrooms: "Select no. of Bathrooms",
      bedrooms: "Select no. of Bedrooms",
      budget: "Select Budget",
      contactMethod: "phone",
      message: "",
    });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setPropertiesFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isChecked) return;
    console.log(propertiesFormData);
    setPropertiesFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      propertyType: "",
      bathrooms: "",
      bedrooms: "",
      budget: "",
      contactMethod: "",
      message: "",
    });
    setIsChecked(false);
  };

  return (
    <SectionContainer>
      <SectionHeader {...propertiesFormHeaderData} />
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-5 lg:p-12.5 2xl:p-25 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
      >
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {propertyFormInputsData.map((input) => {
            switch (input.type) {
              case "textarea":
                return (
                  <TextareaField
                    key={input.name}
                    value={propertiesFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "select":
                return (
                  <SelectField
                    key={input.name}
                    value={propertiesFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "radio":
                return (
                  <div
                    key={input.name}
                    className={`${inputDevStyleBase} md:col-span-2`}
                  >
                    <label htmlFor="" className={`${inputLabelStyleBase}`}>
                      {input.label}
                    </label>
                    <div className="flex flex-col md:flex-row gap-4">
                      {input.options?.map((option) => (
                        <OptionField
                          key={option.value}
                          checked={
                            propertiesFormData[input.name] === option.value
                          }
                          onChange={handleChange}
                          {...option}
                        />
                      ))}
                    </div>
                  </div>
                );
              default:
                return (
                  <InputField
                    key={input.name}
                    value={propertiesFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
            }
          })}
        </div>
        {/* submit */}
        <FormFooter
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </form>
    </SectionContainer>
  );
};

export default PropertiesForm;
