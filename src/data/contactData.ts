import type { CommonHeroProps, InputProps, SectionHeaderProps } from "../interfaces";

export const contactPageHeroData : CommonHeroProps = {
    title: "Get in Touch with Estatein",
    text: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
}

export const connectFormHeaderData : SectionHeaderProps = {
    title: "Let's Connect",
    text: "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
}

export const connectFormInputsData : InputProps[] = [
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
    name: "inquiry",
    label: "Inquiry Type",
    placeholder: "Select Inquiry Type",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
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
        { label: "Other", value: "other" }
    ],
  },
  {
    name: "hear",
    label: "How Did You Hear About Us?",
    placeholder: "Select",
    type: "select",
    icon: "assets/icons/arrowbottom.svg",
    options: [
        { label: "Google Search", value: "google" },
        { label: "Social Media (Instagram, Facebook, etc.)", value: "social_media" },
        { label: "Friend/Family Referral", value: "referral" },
        { label: "Email Newsletter", value: "email" },
        { label: "Online Advertisement", value: "online_ad" },
        { label: "YouTube", value: "youtube" },
        { label: "Blog/Online Article", value: "blog" },
        { label: "Podcast", value: "podcast" },
        { label: "In-Store/Physical Location", value: "physical" },
        { label: "Event/Tradeshow", value: "event" },
        { label: "Other", value: "other" }
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here..",
    colSpan: 3,
  },
]