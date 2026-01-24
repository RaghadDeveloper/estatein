import type { CommonHeroProps, FeatureItem, ServiceItem } from "../interfaces";

export const servicesPageHeroData: CommonHeroProps = {
  title: "Elevate Your Real Estate Experience",
  text: "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
}



export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Valuation Mastery",
    description: "Discover the true worth of your property with our expert valuation services.",
    icon: "/assets/icons/Valuation.svg",
  },
  {
    id: 2,
    title: "Strategic Marketing",
    description: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: "/assets/icons/Strategy.svg",
  },
  {
    id: 3,
    title: "Negotiation Wizardry",
    description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: "/assets/icons/Negotation.svg",
  },
  {
    id: 4,
    title: "Closing Success",
    description: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: "/assets/icons/Closing.svg",
  },
];

export const featureData: FeatureItem = {
  title: "Unlock the Value of Your Property Today",
  description: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
  bgImage: "/assets/images/abstractDesign/featureServiceCard.png",
};