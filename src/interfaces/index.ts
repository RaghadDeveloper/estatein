import type { ChangeEvent } from "react";

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
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}

// Form
export interface Option{
  label?: string;
  name?: string;
  placeholder?:string;
  value:string;
  icon?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean
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
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
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
  [key: string] : string;
}

export type InquireFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedProperty: string;
  message: string;
  [key: string] : string;
}

export type ConnectFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiry: string;
  hear: string;
  message: string;
  [key: string] : string;
}