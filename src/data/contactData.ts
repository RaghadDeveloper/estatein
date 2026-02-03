import { TbMailFilled } from "react-icons/tb";
import type {
  CommonHeroProps,
  InfoCardProps,
  InputProps,
  LocationsCardProps,
  SectionHeaderProps,
  TapS,
} from "../interfaces";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

// Hero Section
export const contactPageHeroData: CommonHeroProps = {
  title: "Get in Touch with Estatein",
  text: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
};

export const infoCardsData: InfoCardProps[] = [
  {
    id: 1,
    icon: "assets/icons/emailContact.svg",
    link: "info@estatein.com",
    type: "email",
  },
  {
    id: 2,
    icon: "assets/icons/phoneContact.svg",
    link: "+1 (123) 456-7890",
    type: "phone",
  },
  {
    id: 3,
    icon: "assets/icons/locationContact.svg",
    text: "Main Headquarters",
    link: "123 Estatein Plaza, City Center, Metropolis",
    type: "location",
  },
  {
    id: 4,
    icon: "assets/icons/socials.svg",
    link: "www.facebook.com",
    type: "website",
    socials: [
      { label: "Instagram", link: "http://www.instagram.com" },
      { label: "LinkedIn", link: "http://www.linkedin.com" },
      { label: "Facebook", link: "http://www.facebook.com" },
    ],
  },
];

// Connect Form Section
export const connectFormHeaderData: SectionHeaderProps = {
  title: "Let's Connect",
  text: "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
};

export const connectFormInputsData: InputProps[] = [
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
    type: "number",
    placeholder: "Enter Phone Number",
  },
  {
    name: "inquiry",
    label: "Inquiry Type",
    placeholder: "Select Inquiry Type",
    type: "select",
    options: [
      { label: "General Question", value: "general" },
      { label: "Product Inquiry", value: "product" },
      { label: "Order Status", value: "order" },
      { label: "Shipping & Delivery", value: "shipping" },
      { label: "Returns & Exchanges", value: "returns" },
      { label: "Technical Support", value: "technical" },
      { label: "Partnership Inquiry", value: "partnership" },
      { label: "Feedback/Suggestions", value: "feedback" },
      { label: "Complaint", value: "complaint" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "hear",
    label: "How Did You Hear About Us?",
    placeholder: "Select",
    type: "select",
    options: [
      { label: "Google Search", value: "google" },
      {
        label: "Social Media (Instagram, Facebook, etc.)",
        value: "social_media",
      },
      { label: "Friend/Family Referral", value: "referral" },
      { label: "Email Newsletter", value: "email" },
      { label: "Online Advertisement", value: "online_ad" },
      { label: "YouTube", value: "youtube" },
      { label: "Blog/Online Article", value: "blog" },
      { label: "Podcast", value: "podcast" },
      { label: "In-Store/Physical Location", value: "physical" },
      { label: "Event/Tradeshow", value: "event" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here..",
    colSpan: 3,
  },
];

// Location Section
export const LocationsHeaderData: SectionHeaderProps = {
  title: "Discover Our Office Locations",
  text: "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you",
};

export const locationsCardsData: LocationsCardProps[] = [
  {
    id: 1,
    title: "Main Headquarters",
    H3: "123 Estatein Plaza, City Center, Metropolis",
    text: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    category: "International",
    locationLinks: [
      {
        type: "email",
        icon: TbMailFilled,
        text: "info@estatein.com",
      },
      {
        type: "phone",
        icon: FaPhone,
        text: "+1 (123) 456-7890",
      },
      {
        type: "location",
        icon: FaLocationDot,
        text: "Metropolis",
      },
    ],
  },
  {
    id: 2,
    title: "Regional Offices",
    H3: "456 Urban Avenue, Downtown District, Metropolis",
    text: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    category: "Regional",
    locationLinks: [
      {
        type: "email",
        icon: TbMailFilled,
        text: "info@estatein.com",
      },
      {
        type: "phone",
        icon: FaPhone,
        text: "+1 (123) 456-7890",
      },
      {
        type: "location",
        icon: FaLocationDot,
        text: "Metropolis",
      },
    ],
  },
];

export const TAps: TapS[] = [
  {
    id: 1,
    tap: "All",
  },
  {
    id: 2,
    tap: "Regional",
  },
  {
    id: 3,
    tap: "International",
  },
];

// Gallery Section
export const galleryHeaderData: SectionHeaderProps = {
  title: "Explore Estatein's World",
  text: "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.",
};
export const dataGallery = [
  {
    source: "/assets/images/gallery/gallery1.webp",
    alternative: "Gallery",
  },
  {
    source: "/assets/images/gallery/gallery3.webp",
    alternative: "Gallery",
  },
  {
    source: "/assets/images/gallery/gallery2.webp",
    alternative: "Gallery",
  },
  {
    source: "/assets/images/gallery/gallery4.webp",
    alternative: "Gallery",
  },
  {
    source: "/assets/images/gallery/gallery5.webp",
    alternative: "Gallery",
  },
];
