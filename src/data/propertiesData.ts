import locationIcon from "/assets/icons/Location.svg";
import propertyIcon from "/assets/icons/property.svg";
import priceIcon from "/assets/icons/Union.svg";
import sizeIcon from "/assets/icons/Size.svg";
import buildIcon from "/assets/icons/Year.svg";
import type { CommonHeroProps, PropertyData } from "../interfaces";

export const propertiesPageHeroData: CommonHeroProps = {
  title: "Find Your Dream Property",
  text: "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey ",
  propertyHero: true,
};

export const filters = [
  {
    label: "Location",
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
    icon: propertyIcon,
    options: ["Any Type", "Apartment", "House", "Villa", "Studio", "Office"],
  },
  {
    label: "Pricing Range",
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
    icon: sizeIcon,
    options: ["Any Size", "50-100m", "100-150m", "150-250m", "250+m"],
  },
  {
    label: "Build Year",
    icon: buildIcon,
    options: ["New", "2017-2021", "2010-2016", "2000-2009", "Before 2000"],
  },
];

export const propertiesData: PropertyData[] = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
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
    propertyType: "Villa",
    area: 2500,
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    location: "Malibu, California",
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
    title: "Rustic Retreat Cottage",
    location: "Malibu, California",
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
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
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
