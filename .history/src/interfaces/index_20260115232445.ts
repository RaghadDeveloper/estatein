export interface imageProps{
  className?:string;
  source:string;
  source_alternative?:string;
  alternative:string;
}
expo
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
