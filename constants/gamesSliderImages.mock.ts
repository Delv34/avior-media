import { IGamesSlider } from "@/types/gamesSlider.types";

export const gamesSliderImages: IGamesSlider[] = [
  {
    img: "/images/jpg/slider-games/1.jpg",
    title: "Hero Wars",
    slug: "hero_wars",
    badge: "Free",
  },
  {
    img: "/images/jpg/slider-games/2.jpg",
    title: "Game of Thrones",
    slug: "game_of_thrones",
    badge: "Free",
  },
  {
    img: "/images/jpg/slider-games/3.jpg",
    title: "Heroes of History",
    slug: "heroes_of_history",
    badge: "Free",
  },
  {
    img: "/images/jpg/slider-games/4.jpg",
    title: "Forge of Empires",
    slug: "forge_of_empires",
    badge: "Free",
  },
  {
    img: "/images/jpg/slider-games/5.jpg",
    title: "Taonga: The Island Farm",
    slug: "taonga_the_island_farm",
    badge: "Free",
  },
  {
    img: "/images/jpg/slider-games/6.jpg",
    title: "Mech Arena",
    slug: "mech_arena",
    badge: "Free",
  },
];

export const gamesSliderImages2: IGamesSlider[] = [
  ...gamesSliderImages,
].reverse();
