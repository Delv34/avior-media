import {
  Action,
  Fantasy,
  Mmorpg,
  Shooter,
  Strategy,
  War,
} from "@/components/icons";
import { IGenres } from "@/types/genres.types";

export const genresProps: IGenres[] = [
  {
    svg: Strategy,
    title: "Strategy",
    slug: "strategy",
  },
  {
    svg: Fantasy,
    title: "Fantasy",
    slug: "fantasy",
  },
  {
    svg: Shooter,
    title: "Shooter",
    slug: "shooter",
  },
  {
    svg: Action,
    title: "Action",
    slug: "action",
  },
  {
    svg: Mmorpg,
    title: "MMORPG",
    slug: "mmorpg",
  },
  {
    svg: War,
    title: "War",
    slug: "war",
  },
];
