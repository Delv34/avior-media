import { IMainSlider } from "@/types/mainSlider.types";
import Image from "next/image";
import Link from "next/link";

interface IMainGameCard {
  item: IMainSlider;
}

export default function MainGameCard({ item }: IMainGameCard) {
  const { src, description, badge, href } = item;
  return (
    <div
      className="relative w-full h-[435px] after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:bg-[linear-gradient(180deg,#0A122200_0%,#0A070FCC_100%)]"
      key={description}
    >
      <Image src={src} fill alt="" className="object-cover" />
      <div className="w-[233px] h-[128px] max-mobile:w-[30vw] max-mobile:h-auto aspect-video absolute top-[26px] right-[22px] z-10">
        <Image src={badge} fill alt="" className="rounded-[12px]" />
      </div>
      <div className="text-white font-bold absolute bottom-[39px] left-[45px] z-10">
        <div className="text-[13px] max-w-[448px] mb-[21px]">{description}</div>
        <Link
          href={href}
          className="w-[200px] h-[44px] max-mobile:w-[150px] rounded-[6px] bg-[#8a18d2] text-[16px] max-mobile:text-[14px] uppercase flex items-center justify-center hover:bg-[#651299] hover:text-gray-300 "
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
