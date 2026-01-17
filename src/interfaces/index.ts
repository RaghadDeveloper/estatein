export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
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