import { IGamesSlider } from "@/types/gamesSlider.types";
import Image from "next/image";
import Link from "next/link";

interface IGameCard {
  item: IGamesSlider;
}

export default function GameCard({ item }: IGameCard) {
  const { img, title, slug, badge } = item;
  return (
    <Link href={slug} className="flex flex-col">
      <div className="relative mb-[11px] w-[364px] h-[194px] max-mobile:h-auto max-mobile:w-full aspect-video">
        <Image src={img} fill alt={title} className="rounded-[13px]" />
        <div className="bg-[#00944A] w-[40px] h-[18px] absolute top-[10px] left-[9px] rounded-[9px] flex items-center justify-center text-xs text-white">
          {badge}
        </div>
      </div>
      <div className="text-sm font-bold text-white">{title}</div>
    </Link>
  );
}
