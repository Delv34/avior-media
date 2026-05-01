import { FC, SVGProps } from "react";

export interface IGenresProps {
  items: IGenres[];
}

export interface IGenres {
  svg: FC<SVGProps<SVGSVGElement>>;
  title: string;
  slug: string;
}
