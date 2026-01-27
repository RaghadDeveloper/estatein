import locationIcon from "/assets/icons/Location.svg";
import propertyIcon from "/assets/icons/property.svg";
import priceIcon from "/assets/icons/Union.svg";
import sizeIcon from "/assets/icons/Size.svg";
import buildIcon from "/assets/icons/Year.svg";
import type {
  CommonHeroProps,
  PropertyData,
  InputProps,
  SectionHeaderProps,
  FilterType,
} from "../interfaces";

export const propertiesPageHeroData: CommonHeroProps = {
  title: "Find Your Dream Property",
  text: "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey ",
  propertyHero: true,
};

export const filters: FilterType[] = [
  {
    label: "Location",
    key: "location",
    icon: locationIcon,
    options: [
      "Any location",
      "Downtown",
      "City center",
      "Suburbs",
      "Near Beach",
    ],
  },
  {
    label: "Property Type",
    key: "propertyType",
    icon: propertyIcon,
    options: ["Any Type", "Apartment", "House", "Villa", "Studio", "Office"],
  },
  {
    label: "Pricing Range",
    key: "price",
    icon: priceIcon,
    options: [
      "Any Price",
      "Under $50,000",
      "$50,000-$100,000",
      "$100,000-$200,000",
      "$200,000-$500,000",
      "$500,000-$1,000,000",
      "Over $1,000,000",
    ],
  },
  {
    label: "Property Size",
    key: "area",
    icon: sizeIcon,
    options: ["Any Size", "50-100m", "100-150m", "150-250m", "250+m"],
  },
  {
    label: "Build Year",
    key: "buildYear",
    icon: buildIcon,
    options: ["New", "2017-2021", "2010-2016", "2000-2009", "Before 2000"],
  },
];

export const propertiesData: PropertyData[] = [
  {
    id: 1,
    subTitle: "Coastal Escapes - Where Waves Beckon",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    locationType: "Near Beach",
    photos: [
      "/assets/images/propertyPhoto/propertyPhoto1.webp",
      "/assets/images/propertyPhoto/propertyPhoto2.webp",
      "/assets/images/propertyPhoto/propertyPhoto3.webp",
      "/assets/images/propertyPhoto/propertyPhoto4.webp",
      "/assets/images/propertyPhoto/propertyPhoto5.webp",
      "/assets/images/propertyPhoto/propertyPhoto6.webp",
      "/assets/images/propertyPhoto/propertyPhoto7.webp",
      "/assets/images/propertyPhoto/propertyPhoto8.webp",
      "/assets/images/propertyPhoto/propertyPhoto9.webp",
    ],
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. 6-bathroom villa in a peaceful suburban neighborhood.",
    price: 550000,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "House",
    area: 2500,
  },
  {
    id: 2,
    subTitle: "Urban Oasis - Life in the Heart of the City",
    title: "Metropolitan Haven",
    location: "Malibu, California",
    locationType: "City center",
    photos: [
      "/assets/images/properties/property2.webp",
      "/assets/images/propertyPhoto/propertyPhoto2.webp",
      "/assets/images/propertyPhoto/propertyPhoto3.webp",
      "/assets/images/propertyPhoto/propertyPhoto4.webp",
      "/assets/images/propertyPhoto/propertyPhoto5.webp",
      "/assets/images/propertyPhoto/propertyPhoto6.webp",
      "/assets/images/propertyPhoto/propertyPhoto7.webp",
      "/assets/images/propertyPhoto/propertyPhoto8.webp",
      "/assets/images/propertyPhoto/propertyPhoto9.webp",
    ],
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views. 6-bathroom villa in a peaceful suburban neighborhood.",
    price: 550000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Villa",
    area: 2500,
  },
  {
    id: 3,
    subTitle: "Countryside Charm - Escape to Nature's Embrace",
    title: "Rustic Retreat Cottage",
    location: "Malibu, California",
    locationType: "Suburbs",
    photos: [
      "/assets/images/properties/property3.webp",
      "/assets/images/propertyPhoto/propertyPhoto2.webp",
      "/assets/images/propertyPhoto/propertyPhoto3.webp",
      "/assets/images/propertyPhoto/propertyPhoto4.webp",
      "/assets/images/propertyPhoto/propertyPhoto5.webp",
      "/assets/images/propertyPhoto/propertyPhoto6.webp",
      "/assets/images/propertyPhoto/propertyPhoto7.webp",
      "/assets/images/propertyPhoto/propertyPhoto8.webp",
      "/assets/images/propertyPhoto/propertyPhoto9.webp",
    ],
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. 6-bathroom villa in a peaceful suburban neighborhood.",
    price: 550000,
    bedrooms: 3,
    bathrooms: 3,
    propertyType: "Villa",
    area: 2500,
  },
  {
    id: 4,
    subTitle: "Coastal Escapes - Where Waves Beckon",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    locationType: "Suburbs",
    photos: [
      "/assets/images/propertyPhoto/propertyPhoto1.webp",
      "/assets/images/propertyPhoto/propertyPhoto2.webp",
      "/assets/images/propertyPhoto/propertyPhoto3.webp",
      "/assets/images/propertyPhoto/propertyPhoto4.webp",
      "/assets/images/propertyPhoto/propertyPhoto5.webp",
      "/assets/images/propertyPhoto/propertyPhoto6.webp",
      "/assets/images/propertyPhoto/propertyPhoto7.webp",
      "/assets/images/propertyPhoto/propertyPhoto8.webp",
      "/assets/images/propertyPhoto/propertyPhoto9.webp",
    ],
    description:
      "An elegant 6-bedroom, 6.5-bathroom townhouse in a gated community. A stunning 8-bedroom, 6-bathroom villa in a peaceful suburban neighborhood.6-bathroom villa in a peaceful suburban neighborhood.",
    price: 550000,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "Villa",
    area: 2500,
  },
];

export const propertiesFormHeaderData : SectionHeaderProps = {
    title: "Let's Make it Happen",
    text: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
}

export const inputStyleBase: string =
  "w-full rounded-md py-4 px-5 bg-gray-10 border border-gray-15 text-[14px] font-medium 2xl:text-[18px] 2xl:py-6 leading-[20px] focus:outline-none focus:ring-2 focus:ring-primary-60 caret-primary-60";

export const inputLabelStyleBase: string =
  "text-[16px] 2xl:text-[20px] font-semibold";

export const inputDevStyleBase: string =
  "flex flex-col gap-2.5 lg:gap-3.5 2xl:gap-4 col-span-1";

export const propertyFormInputsData: InputProps[] = [
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
    name: "location",
    label: "Preferred Location",
    placeholder: "Select Location",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    options: [
      { label: "Any location", value: "any" },
      { label: "Downtown", value: "downtown" },
      { label: "City center", value: "city" },
      { label: "Suburbs", value: "suburbs" },
      { label: "Near Beach", value: "beach" },
    ],
  },
  {
    name: "propertyType",
    label: "Property Type",
    placeholder: "Select Property Type",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    options: [
      { label: "Any Type", value: "any" },
      { label: "Apartment", value: "apartment" },
      { label: "House", value: "house" },
      { label: "Villa", value: "villa" },
      { label: "Studio", value: "studio" },
      { label: "Office", value: "office" },
    ],
  },
  {
    name: "bathrooms",
    label: "No. of Bathrooms",
    placeholder: "Select no. of Bathrooms",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    options: [
      { label: "Any", value: "any" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3+", value: "3+" },
    ],
  },
  {
    name: "bedrooms",
    label: "No. of Bedrooms",
    placeholder: "Select no. of Bedrooms",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    options: [
      { label: "Any", value: "any" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3+", value: "3+" },
    ],
  },
  {
    name: "budget",
    label: "Budget",
    placeholder: "Select Budget",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    colSpan: 2,
    options: [
      { label: "Any Price", value: "any" },
      { label: "Under $50,000", value: "<50k" },
      { label: "$50,000 – $100,000", value: "50-100k" },
      { label: "$100,000 – $200,000", value: "100-200k" },
      { label: "$200,000 – $500,000", value: "200-500k" },
      { label: "$500,000 – $1,000,000", value: "500-1000k" },
      { label: "Over $1,000,000", value: ">1000k" },
    ],
  },
  {
    name: "contactMethod",
    label: "Preferred Contact Method",
    type: "radio",
    options: [
      {
        placeholder: "Enter Your Number",
        name: "contactMethod",
        value: "phone",
        icon: "assets/icons/Phone.svg",
      },
      {
        placeholder: "Enter Your Email",
        name: "contactMethod",
        value: "email",
        icon: "assets/icons/email.svg",
      },
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here..",
    colSpan: 4,
  },
];

export const portfolioHeaderData: SectionHeaderProps = {
  title: "Discover a World of Possibilities",
  text: "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
};

export const photos = [
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto1.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto8.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto2.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto4.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto3.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto9.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto4.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto3.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto5.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto1.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto6.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto5.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto7.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto4.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto8.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto6.webp",
        alternative: "Villa photo",
      },
    ],
  },
  {
    images: [
      {
        source: "/assets/images/propertyPhoto/propertyPhoto9.webp",
        alternative: "Villa photo",
      },
      {
        source: "/assets/images/propertyPhoto/propertyPhoto2.webp",
        alternative: "Villa photo",
      },
    ],
  },
];
