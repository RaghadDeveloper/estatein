export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
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
