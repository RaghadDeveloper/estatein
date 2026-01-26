import { useState } from "react";
import {
  inquireFormHeaderData,
  inquireFormInputsData,
} from "../../data/PropertyData";
import SectionContainer from "../layouts/SectionContainer";
import FormFooter from "../ui/FormFooter";
import SectionHeader from "../ui/SectionHeader";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import InputField from "../ui/InputField";
import type { InquireFormData } from "../../interfaces";

const InquireForm = () => {
  const currentPropertyName = "Seaside Serenity Villa";
  const currentPropertyLocation = "Malibu, California";

  const selectedPlaceholder = `${currentPropertyName}, ${currentPropertyLocation}`;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [inquireFormData, setInquireFormData] = useState<InquireFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedProperty: selectedPlaceholder,
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
    setInquireFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isChecked) return;
    console.log(inquireFormData);
    setInquireFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedProperty: selectedPlaceholder,
      message: "",
    });
    setIsChecked(false);
  };

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between lg:flex-row lg:gap-20 2xl:gap-25">
        <div className="lg:w-103 2xl:w-129.75">
          <SectionHeader {...inquireFormHeaderData} />
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-5 lg:p-10 2xl:p-12.5 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
          >
            {/* inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-7.5">
              {inquireFormInputsData.map((input) => {
                switch (input.type) {
                  case "textarea":
                    return (
                      <TextareaField
                        key={input.name}
                        {...input}
                        value={inquireFormData[input.name]}
                        onChange={handleChange}
                      />
                    );

                  case "select": {
                    const selectedProperty = {
                      ...input,
                      options: [
                        {
                          label: selectedPlaceholder,
                          value: selectedPlaceholder,
                        },
                      ],
                    };
                    return (
                      <SelectField
                        key={input.name}
                        {...selectedProperty}
                        value={inquireFormData[input.name]}
                        onChange={handleChange}
                      />
                    );
                  }

                  default:
                    return (
                      <InputField
                        key={input.name}
                        {...input}
                        value={inquireFormData[input.name]}
                        onChange={handleChange}
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
        </div>
      </div>
    </SectionContainer>
  );
};

export default InquireForm;
