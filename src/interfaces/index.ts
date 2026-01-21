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
export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
  text?: string;
}

export interface PropsFaqCArd {
  H3: string;
  P: string;
}

export interface Clientcarddata{
  year:string,
  title:string,
  PBox1:string,
  PBox2:string,
  PBoxBig:string
}

export interface SectionHeaderProps {
  title: string;
  text: string;
  extraText?: string;
  btnText?: string;
  onClick?: () => void;
}

export interface CommonHeroProps {
  title: string;
  text: string;
  propertyHero?: boolean;
}

// Info Cards Section
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

// Achievements Section
export interface AchievementsCardProps {
  id: number;
  title: string;
  text: string;
}
export interface AchievementsSectionProps {
  headerData: SectionHeaderProps;
  cards: AchievementsCardProps[];
}
//Locations section
export interface LocationsCardProps{
  id:number,
  title:string,
  H3:string,
  text:string,
  category:string
}

export interface LocationsSectionProps{
  headerData:SectionHeaderProps;
  cards:LocationsCardProps[]
}

export interface ButtonDataLocation{
  Img:string,
  text:string
}
export interface TapS{
  id:number
  tap:string
}
export interface ButtonProps {
  variant: "primary" | "secondary" | "border";
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
  title: string,
  link1: string,
  link2: string,
  link3?: string,
  link4?: string,
  link5?: string,
  Border:boolean,
  Href?:string
}

//ButtonLocations
export interface buttonLocations {
  Bool :boolean
  variant: "BgBlack" | "BgGray";
  onClick?: () => void;
  children: React.ReactNode;
}