import type { InputProps } from "../interfaces";


// Login
export const loginInputs: InputProps[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

// Add Property
export const addPropertyInputs: InputProps[] = [
    {
      name: "title",
      label: "Property Title",
      type: "text",
      placeholder: "Enter property title",
      colSpan: 2
    },
    {
      name: "subTitle",
      label: "Property SubTitle",
      type: "text",
      placeholder: "Enter property SubTitle",
      colSpan: 2
    },
    {
      name: "price",
      label: "Property Price",
      type: "number",
      placeholder: "Enter property price",
      colSpan: 2
    },
    {
      name: "bedrooms",
      label: "No. of Bedrooms",
      type: "number",
      placeholder: "no. of bedrooms",
    },
    {
      name: "bathrooms",
      label: "No. of Bathrooms",
      type: "number",
      placeholder: "no. of bathrooms",
    },
    {
      name: "area",
      label: "Property Area",
      type: "number",
      placeholder: "Enter property area",
      colSpan: 2
    },
    {
      name: "location",
      label: "Property Location",
      type: "text",
      placeholder: "Enter property location",
      colSpan: 2
    },
    {
      name: "locationType",
      label: "Property Location Type",
      type: "text",
      placeholder: "Enter property location type",
      colSpan: 2
    },
    {
      name: "propertyType",
      label: "Property Type",
      type: "select",
      placeholder: "Select property type",
      options: [
        { label: "Any Type", value: "any" },
        { label: "Apartment", value: "apartment" },
        { label: "House", value: "house" },
        { label: "Villa", value: "villa" },
        { label: "Studio", value: "studio" },
        { label: "Office", value: "office" },
      ],
      colSpan: 2
    },
    {
      name: "description",
      label: "Property Description",
      type: "textarea",
      placeholder: "Enter property Description",
      colSpan: 4
    },
  ];

// Edit Property
export const editPropertyInputs: InputProps[] = [
  {
    label: "Title",
    placeholder: "Enter title",
    type: "text",
    name: "title",
  },
  {
    label: "Description",
    placeholder: "Enter description",
    type: "text",
    name: "description",
  },
  {
    label: "Price",
    placeholder: "Enter price",
    type: "text",
    name: "price",
  },
  {
    label: "Bedrooms",
    placeholder: "Enter bedrooms",
    type: "text",
    name: "bedrooms",
  },
  {
    label: "Bathrooms",
    placeholder: "Enter bathrooms",
    type: "text",
    name: "bathrooms",
  },
];
