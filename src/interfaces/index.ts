import type { ChangeEvent } from "react";
import type { Swiper as SwiperType } from "swiper"
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
  cards: React.ReactNode[]
  cardsPerView?: number
  spaceBetween?: number
  onSlideIndexChange?: (index: number) => void
  swiperRef?: (swiper: SwiperType) => void
  sliderId?: string   
}


export interface SliderPagesProps {
  cardsLength: number
  currentPage: number
  totalPages: number
  show: boolean
  setShow: (value: boolean) => void
  isPrevDisabled: boolean
  isNextDisabled: boolean
  text?: string
  prevClass: string
  nextClass: string
}


export interface SliderDotsProps {
  count: number
  activeIndex: number
  onDotClick: (index: number) => void
  isPrevDisabled: boolean
  isNextDisabled: boolean
  prevClass: string
  nextClass: string
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

interface Socials {
  label: string;
  link: string;
}
export interface InfoCardProps {
  id: number;
  icon: string;
  text?: string;
  socials?: Socials[];
  link?: string;
  externalLink?: boolean;
}

export interface InfoCardSectionProps {
  cards: InfoCardProps[];
  rounded?: boolean;
  externalLink? : boolean;
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

//Locations section
export interface LocationsCardProps {
  id: number;
  title: string;
  H3: string;
  text: string;
  category: string;
}

export interface LocationsSectionProps {
  headerData: SectionHeaderProps;
  cards: LocationsCardProps[];
}

export interface ButtonDataLocation {
  Img: string;
  text: string;
}
export interface TapS {
  id: number;
  tap: string;
}

export interface ButtonProps {
  variant: "primary" | "secondary" | "border";
  onClick?: () => void;
  children: React.ReactNode;
  btnType?: "button" | "submit" | "reset" | undefined;
  checked?: boolean;
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
  value?: string;
  onChange: (val: string) => void;
  onSearch?: () => void;
}

export interface FiltersState {
  search: string;
  propertyType?: string;
  location?: string;
  price?: string;
  area?: string;
  buildYear?: string;
}

export interface FilterType {
  label: string;
  key: keyof FiltersState;
  icon: string;
  options: string[];
}

export interface columnFoot {
  title: string;
  link1: string;
  link2: string;
  link3?: string;
  link4?: string;
  link5?: string;
  Border: boolean;
  Href?: string;
}

export interface PropertyData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  photos: string[];
  price: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  locationType: string;
  propertyType: string;
  area: number;
}

// Form
export interface Option {
  label?: string;
  name?: string;
  placeholder?: string;
  value: string;
  icon?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "radio";
  name: string;
  options?: Option[];
  icon?: string;
  colSpan?: number;
  value?: string;
  checked?: boolean;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

export interface FormFooterProps {
  isChecked: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type PropertiesFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  bathrooms: string;
  bedrooms: string;
  budget: string;
  contactMethod: string;
  message: string;
  [key: string]: string;
};

export type InquireFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedProperty: string;
  message: string;
  [key: string]: string;
};

export type ConnectFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiry: string;
  hear: string;
  message: string;
  [key: string]: string;
};

//ButtonLocations
export interface buttonLocations {
  Bool: boolean;
  variant: "BgBlack" | "BgGray";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface PricingDetailInfo {
  title: string;
  price: string;
  note?: string;
  isFirst?: boolean;
  isTwo? : boolean;
}

export interface PricingDetailsCardProps {
  title: string;
  detailsInfo: PricingDetailInfo[];
}

export interface InquireFormProps {
  propertyName: string;
  propertyLocation: string;
}

export interface ComprehensivePricingProps {
  propertyPrice: string;
}