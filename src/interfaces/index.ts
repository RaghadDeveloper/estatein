export interface imageProps {
  className?: string;
  source: string;
  source_alternative?: string;
  alternative: string;
}
export interface SliderButtonProps {
  className: string;
  disabled?: boolean;
  image: imageProps;
}
export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
  text?: string;
}

export interface ValueCardProps {
  className: string;
  isLast: boolean;
  image: imageProps;
  title: string;
  description: string;
}
export interface ContainerValueCardsProps {
  children: React.ReactNode[];
}

export interface PropsFaqCArd {
  H3: string;
  P: string;
}

export interface Clientcarddata {
  year: string;
  title: string;
  PBox1: string;
  PBox2: string;
  PBoxBig: string;
}

export interface SectionHeaderProps {
  title: string;
  text: string;
  extraText?: string;
  btnText?: string;
  onClick?: string;
}

export interface CommonHeroProps {
  title: string;
  text: string;
  propertyHero?: boolean;
}

export interface InfoCardProps {
  id: number;
  icon: string;
  text: string;
  link?: string;
}

export interface InfoCardSectionProps {
  cards: InfoCardProps[];
  rounded?: boolean;
}

export interface AchievementsCardProps {
  id: number;
  title: string;
  text: string;
}
export interface AchievementsSectionProps {
  headerData: SectionHeaderProps;
  cards: AchievementsCardProps[];
}

export interface ButtonProps {
  variant: "primary" | "secondary" | "border" | 'gray08';
  onClick?: () => void;
  children: React.ReactNode;
}

export interface StatisticCardType {
  value: string;
  text: string;
}

export interface Testimonial {
  id: number;
  stars: number;
  title: string;
  content: string;
  userImage: string;
  userName: string;
  location: string;
}
export interface Step {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
}
export interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

export interface PropertySelectProps {
  icon: string;
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}
export interface columnFoot {
  title: string;
  link1: string;
  link2: string;
  link3?: string;
  link4?: string;
  link5?: string;
  Border: boolean;
}

export interface PropertyData {
  id: number;
  title: string;
  description: string;
  photos: string[];
  price: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  propertyType: string;
  area: number;
}
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  bgImage: string;
}
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}
export interface FeatureServiceCardProps {
  title: string;
  description: string;
  bgImage: string;
}