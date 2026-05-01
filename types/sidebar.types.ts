import { FC, SVGProps } from "react";

export interface ISidebarLinks {
  svg: FC<SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
}
