export interface SliderProps {
  cards: React.ReactNode[];
  cardsPerView?: number;
  spaceBetween?: number;
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
  cards: InfoCardProps[]
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