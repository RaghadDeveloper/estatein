import type { InfoCardProps, Testimonial } from "../interfaces";

export const infoCardsData : InfoCardProps[] = [
    {
        id: 1,
        icon: "assets/icons/Home.svg",
        text: "Find Your Dream Home",
    },
    {
        id: 2,
        icon: "assets/icons/Value.svg",
        text: "Unlock Property Value",
    },
    {
        id: 3,
        icon: "assets/icons/Building.svg",
        text: "Find Your Dream Home",
    },
    {
        id: 4,
        icon: "assets/icons/sun.svg",
        text: "Smart Investments, Informed Decisions",
    },
]


export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    title: "Exceptional Service!",
    content: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    userImage: "/assets/images/clients/client1.webp", 
    userName: "Wade Warren",
    location: "USA, California",
  },
  {
    id: 2,
    stars: 5,
    title: "Efficient and Reliable",
    content: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    userImage: "/assets/images/clients/client2.webp",
    userName: "Emelie Thomson",
    location: "USA, Florida",
  },
  {
    id: 3,
    stars: 5,
    title: "Trusted Advisors",
    content: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    userImage: "/assets/images/clients/client3.webp",
    userName: "John Mans",
    location: "USA, Nevada",
  },
];
