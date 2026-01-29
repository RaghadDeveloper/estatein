import type {
  InputProps,
  PricingDetailsCardProps,
  SectionHeaderProps,
} from "../interfaces";

// Inquire Form Section
export const inquireFormHeaderData: SectionHeaderProps = {
  title: "Inquire About Seaside Serenity Villa",
  text: "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.",
};

export const inquireFormInputsData: InputProps[] = [
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
    icon: "/assets/icons/LocationWhite.svg",
    colSpan: 2,
    options: [{ label: "selectd property", value: "selected property" }],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here..",
    colSpan: 2,
  },
];

export const pricingDetailsHeaderData: SectionHeaderProps = {
  title: "Comprehensive Pricing Details",
  text: "At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision",
};

export const pricingDetailsNote: string =
  "The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.";

export const pricingDetailsCardsData: PricingDetailsCardProps[] = [
  {
    title: "Additional Fees",
    detailsInfo: [
      {
        title: "Property Transfer Tax",
        price: "$25,000",
        note: "Based on the sale price and local regulations",
      },
      {
        title: "Legal Fees",
        price: "$3,000",
        note: "Approximate cost for legal services, including title transfer",
      },
      {
        title: "Home Inspection",
        price: "$500",
        note: "Recommended for due diligence",
      },
      {
        title: "Property Insurance",
        price: "$1,200",
        note: "Annual cost for comprehensive property insurance",
      },
      {
        title: "Mortgage Fees",
        price: "Varies",
        note: "If applicable, consult with your lender for specific details",
      },
    ],
  },
  {
    title: "Monthly Costs",
    detailsInfo: [
      {
        title: "Property Taxes",
        price: "$1,250",
        note: "Approximate monthly property tax based on the sale price and local rates",
      },
      {
        title: "Homeowners' Association Fee",
        price: "$300",
        note: "Monthly fee for common area maintenance and security",
      },
    ],
  },
  {
    title: "Total Initial Costs",
    detailsInfo: [
      {
        title: "Listing Price",
        price: "$1,250,000",
      },
      {
        title: "Additional Fees",
        price: "$29,700",
        note: "Property transfer tax, legal fees, inspection, insurance",
      },
      {
        title: "Down Payment",
        price: "$250,000",
        note: "20%",
      },
      {
        title: "Mortgage Amount",
        price: "$1,000,000",
        note: "If applicable",
      },
    ],
  },
  {
    title: "Monthly Expenses",
    detailsInfo: [
      {
        title: "Property Taxes",
        price: "$1,250",
      },
      {
        title: "Homeowners' Association Fee",
        price: "$300",
      },
      {
        title: "Mortgage Payment",
        price: "Varies based on terms and interest rate",
        note: "If applicable",
      },
      {
        title: "Property Insurance",
        price: "$100",
        note: "Approximate monthly cost",
      },
    ],
  },
];
