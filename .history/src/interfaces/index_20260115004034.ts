export interface imageProps{
  className
  source:string;
  source_alternative?:string;
  alternative:string;
}
export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
}
