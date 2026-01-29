import { useState } from "react";
import {
  connectFormHeaderData,
  connectFormInputsData,
} from "../../data/contactData";
import SectionContainer from "../layouts/SectionContainer";
import FormFooter from "../ui/FormFooter";
import SectionHeader from "../ui/SectionHeader";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import InputField from "../ui/InputField";
import type { ConnectFormData } from "../../interfaces";

const ConnectForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [connectFormData, setConnectFormData] = useState<ConnectFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "Select Inquiry Type",
    hear: "Select",
    message: "",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setConnectFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isChecked) return;
    console.log(connectFormData);
    setConnectFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiry: "Select Inquiry Type",
      hear: "Select",
      message: "",
    });
    setIsChecked(false);
  };

  return (
    <SectionContainer>
      <SectionHeader {...connectFormHeaderData} />
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-5 lg:p-20 2xl:p-25 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
      >
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {connectFormInputsData.map((input) => {
            switch (input.type) {
              case "textarea":
                return (
                  <TextareaField
                    key={input.name}
                    value={connectFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "select":
                return (
                  <SelectField
                    key={input.name}
                    value={connectFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );

              default:
                return (
                  <InputField
                    key={input.name}
                    value={connectFormData[input.name]}
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

export default ConnectForm;
