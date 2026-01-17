export interface imageProps{
  className?:string;
  source:string;
  source_alternative?:string;
  alternative:string;
}
export interface SliderButtonProps{
  className:string;
  
  image:imageProps;
}
export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
}
