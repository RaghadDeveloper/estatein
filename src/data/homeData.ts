import type { InfoCardProps, Testimonial } from "../interfaces";

export const infoCardsData: InfoCardProps[] = [
  {
    id: 1,
    icon: "assets/icons/Home.svg",
    text: "Find Your Dream Home",
    link: "/services",
  },
  {
    id: 2,
    icon: "assets/icons/Value.svg",
    text: "Unlock Property Value",
    link: "/services",
  },
  {
    id: 3,
    icon: "assets/icons/Building.svg",
    text: "Find Your Dream Home",
    link: "/services",
  },
  {
    id: 4,
    icon: "assets/icons/sun.svg",
    text: "Smart Investments, Informed Decisions",
    link: "/services",
  },
];

// Property Section
export const propertiesHeaderData = {
  title: "Featured Properties",
  text: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.",
  extraText: 'Click "View Details" for more information.',
  btnText: "View All Properties",
  onClick: "/properties",
};

// Testimonials Section
export const testimonialsHeaderData = {
  title: "What Our Clients Say",
  text: "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
  btnText: "View All Testimonials",
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    title: "Exceptional Service!",
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    userImage: "/assets/images/clients/client1.webp",
    userName: "Wade Warren",
    location: "USA, California",
  },
  {
    id: 2,
    stars: 5,
    title: "Efficient and Reliable",
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    userImage: "/assets/images/clients/client2.webp",
    userName: "Emelie Thomson",
    location: "USA, Florida",
  },
  {
    id: 3,
    stars: 5,
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    userImage: "/assets/images/clients/client3.webp",
    userName: "John Mans",
    location: "USA, Nevada",
  },
  {
    id: 4,
    stars: 5,
    title: "Exceptional Service!",
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    userImage: "/assets/images/clients/client1.webp",
    userName: "Wade Warren",
    location: "USA, California",
  },
  {
    id: 5,
    stars: 5,
    title: "Efficient and Reliable",
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    userImage: "/assets/images/clients/client2.webp",
    userName: "Emelie Thomson",
    location: "USA, Florida",
  },
  {
    id: 6,
    stars: 5,
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    userImage: "/assets/images/clients/client3.webp",
    userName: "John Mans",
    location: "USA, Nevada",
  },
  {
    id: 7,
    stars: 5,
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    userImage: "/assets/images/clients/client3.webp",
    userName: "John Mans",
    location: "USA, Nevada",
  },
];

// FAQ Section
export const faqsHeaderData = {
  title: "Frequently Asked Questions",
  text: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  btnText: "View All FAQ’s",
};

export const questions = [
  {
    H3: "How do I search for properties on Estatein?",
    P: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    TextButton: "Read More",
  },
  {
    H3: "What documents do I need to sell my property through Estatein?",
    P: "Find out about the necessary documentation for listing your property with us.",
    TextButton: "Read More",
  },
  {
    H3: "How can I contact an Estatein agent?",
    P: "Discover the different ways you can get in touch with our experienced agents.",
    TextButton: "Read More",
  },
  {
    H3: "What documents do I need to sell my property through Estatein 2?",
    P: "Discover the different ways you can get in touch with our experienced agents. 2",
    TextButton: "Read More",
  },
  {
    H3: "What documents do I need to sell my property through Estatein 3?",
    P: "Discover the different ways you can get in touch with our experienced agents. 3",
    TextButton: "Read More",
  },
  {
    H3: "What documents do I need to sell my property through Estatein 4?",
    P: "Discover the different ways you can get in touch with our experienced agents. 4",
    TextButton: "Read More",
  },
];
