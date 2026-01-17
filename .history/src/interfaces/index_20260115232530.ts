export interface imageProps{
  className?:string;
  source:string;
  source_alternative?:string;
  alternative:string;
}
export interface ValueCardProps{
  image:imageProps;
  title:
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
