export interface imageProps {
  className?: string;
  source: string;
  source_alternative?: string;
  alternative: string;
}
export interface ValueCardProps{
  className:string;
  isLast:boolean;
  image:imageProps;
  title:string;
  description:string;
}
export interface ContainerValueCardsProps{
  children:React.ReactNode[];
}
export interface SliderButtonProps{
  className:string;
  disabled?:boolean;
  image:imageProps;
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
  text:string;
}

export interface PropsFaqCArd {
  H3: string;
  P: string;
}

export interface Clientcarddata {
  year: string;
  title: string;
  textButton: string;
  img1: string;
  titleBox1: string;
  PBox1: string;
  img2: string;
  titleBox2: string;
  PBox2: string;
  titleBoxBig: string;
  PBoxBig: string;
}

export interface SectionHeaderProps {
  title: string;
  text: string;
  extraText?: string;
  btnText?: string;
  onClick?: () => void;
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

export interface PropertyPhotosProps {
  activeIndex:number;
  setActive
}