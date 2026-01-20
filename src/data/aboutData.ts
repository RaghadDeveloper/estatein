import type {
  AchievementsCardProps,
  Clientcarddata,
  SectionHeaderProps,
  Step,
} from "../interfaces";

export const aboutHeroHeaderData : SectionHeaderProps = {
  title: "Our Journey",
  text: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.",
}

export const ClientCardData: Array<Clientcarddata> = [
  {
    year: "Since 2019",
    title: "ABC Corporation",
    textButton: "Visit Website",
    img1: "/assets/icons/domain.svg",
    titleBox1: "Domain",
    PBox1: "Commercial Real Estate",
    img2: "/assets/icons/category.svg",
    titleBox2: "Category",
    PBox2: "Luxury Home Development",
    titleBoxBig: "What They Said 🤗",
    PBoxBig:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: "Since 2018",
    title: "GreenTech Enterprises",
    textButton: "Visit Website",
    img1: "/assets/icons/domain.svg",
    titleBox1: "Domain",
    PBox1: "Commercial Real Estate",
    img2: "/assets/icons/category.svg",
    titleBox2: "Category",
    PBox2: "Retail Space",
    titleBoxBig: "What They Said 🤗",
    PBoxBig:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    year: "Since 2019 2",
    title: "ABC Corporation 2",
    textButton: "Visit Website 2",
    img1: "/assets/icons/domain.svg",
    titleBox1: "Domain 2",
    PBox1: "Commercial Real Estate 2",
    img2: "/assets/icons/category.svg",
    titleBox2: "Category 2",
    PBox2: "Luxury Home Development 2",
    titleBoxBig: "What They Said2 🤗",
    PBoxBig:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs. 2",
  },
  {
    year: "Since 2018 2",
    title: "GreenTech Enterprises 2",
    textButton: "Visit Website 2",
    img1: "/assets/icons/domain.svg",
    titleBox1: "Domain 2",
    PBox1: "Commercial Real Estate 2",
    img2: "/assets/icons/category.svg",
    titleBox2: "Category 2",
    PBox2: "Retail Space 2",
    titleBoxBig: "What They Said2 🤗",
    PBoxBig:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth. 2",
  },
];

export const achievementsHeaderData: SectionHeaderProps = {
  title: "Our Achievements",
  text: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
};

export const valuesHeaderData: SectionHeaderProps = {
  title: "Our Values",
  text: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
};

export const achievementsCardsData: AchievementsCardProps[] = [
  {
    id: 1,
    title: "3+ Years of Excellence",
    text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    id: 2,
    title: "Happy Clients",
    text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    id: 3,
    title: "Industry Recognition",
    text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export const valuesData = [
  {
    image: {
      source: "/assets/icons/Star.svg",
      alternative: "star icon",
    },
    title: "Trust",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    image: {
      source: "/assets/icons/Excellence.svg",
      alternative: "hat icon",
    },
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    image: {
      source: "/assets/icons/People.svg",
      alternative: "people icon",
    },
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    image: {
      source: "/assets/icons/Star.svg",
      alternative: "star icon",
    },
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism",
  },
];

export const howItWorksHeaderData: SectionHeaderProps = {
  title: "Navigating the Estatein Experience",
  text: "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
};

export const aboutData: Step[] = [
  {
    id: 1,
    stepNumber: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: 2,
    stepNumber: "Step 02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: 3,
    stepNumber: "Step 03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: 4,
    stepNumber: "Step 04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: 5,
    stepNumber: "Step 05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: 6,
    stepNumber: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];
