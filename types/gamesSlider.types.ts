export interface IGamesSliderProps {
  title: string;
  category: string;
  items: IGamesSlider[];
}

export interface IGamesSlider {
  img: string;
  title: string;
  slug: string;
  badge: GamesBadgeT;
}

export type GamesBadgeT = "Free";
