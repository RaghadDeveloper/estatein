export interface imageProps{
  className?:string;
  source:string;
  source_alternative?:string;
  alternative:string;
}
export interface ValueCardProps{
  className?:string;
  isLast:bool
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
export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
}
