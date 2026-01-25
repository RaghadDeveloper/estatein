import type { InputProps, SectionHeaderProps } from "../interfaces";

export const inquireFormHeaderData : SectionHeaderProps = {
    title: "Inquire About Seaside Serenity Villa",
    text: "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.",
}

export const inquireFormInputsData : InputProps[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your Email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter Phone Number",
  },
  {
    name: "property",
    label: "Select Property",
    // placeholder: "Selected Property",
    type: "select",
    icon: "/assets/icons/Location.svg",
    colSpan: 2,
    options: [
      { label: "selectd property", value: "selected property" },
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here..",
    colSpan: 2,
  },
];