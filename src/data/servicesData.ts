import type {
  CommonHeroProps,
  FeatureItem,
  SectionHeaderProps,
  ServiceItem,
} from "../interfaces";

// Hero Section
export const servicesPageHeroData: CommonHeroProps = {
  title: "Elevate Your Real Estate Experience",
  text: "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
};

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
    icon: "/assets/icons/Valuation.svg",
  },
  {
    id: 2,
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: "/assets/icons/Strategy.svg",
  },
  {
    id: 3,
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: "/assets/icons/Negotation.svg",
  },
  {
    id: 4,
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: "/assets/icons/Closing.svg",
  },
];

export const featureData: FeatureItem = {
  title: "Unlock the Value of Your Property Today",
  description:
    "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
     bgImage: '/assets/images/abstractDesign/featureServiceCard.png',
};
export const managementServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Tenant Harmony",
    description:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    icon: "/assets/icons/Tenant.svg",
  },
  {
    id: 2,
    title: "Maintenance Ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: "/assets/icons/Maintenance.svg",
  },
  {
    id: 3,
    title: "Financial Peace of Mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection",
    icon: "/assets/icons/StarsRounded.svg",
  },
  {
    id: 4,
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and regulations effortlessly.",
    icon: "/assets/icons/Icon Container.svg",
  },
];

export const managementFeatureData: FeatureItem = {
  title: "Experience Effortless Property Management",
  description:
    "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us help you handle the complexities while you enjoy the benefits of property ownership.",
      bgImage: '/assets/images/abstractDesign/featureServiceCard.png',
};
export const servicesFormHeaderData: SectionHeaderProps = {
  title: "Unlock Property Value",
  text: "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
};
export const EffortlessFormHeaderData: SectionHeaderProps = {
  title: "Effortless Property Management",
  text: "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
};

export const SmartInvestmentsFormHeaderData: SectionHeaderProps = {
  title: "Smart Investments, Informed Decisions",
  text: "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
};

export const investmentServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Market Insight",
    description:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    icon: "/assets/icons/Valuation.svg",
  },
  {
    id: 2,
    title: "ROI Assessment",
    description:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    icon: "/assets/icons/RoundedSocials.svg",
  },
  {
    id: 3,
    title: "Customized Strategies",
    description:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    icon: "/assets/icons/Customized.svg",
  },
  {
    id: 4,
    title: "Diversification Mastery",
    description:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    icon: "/assets/icons/Icon Container.svg",
  },
];

export const investmentFeatureData: FeatureItem = {
  title: "Unlock Your Investment Potential",
  description:
    "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
      bgImage: '/assets/images/abstractDesign/featureServiceCard.png',
};
