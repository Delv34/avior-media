import { Gamepad, RoundedArrow } from "@/components/icons";
import { IGenresProps } from "@/types/genres.types";
import Link from "next/link";
import { ArrowRight } from "./icons";

export default function Genres({ items }: IGenresProps) {
  return (
    <>
      <Link
        href="/catalog"
        className="flex items-center mb-[27px] text-white text-[32px] font-bold hover:text-gray-300"
      >
        <h2 className="mr-[11px] max-mobile:text-[20px]">Popular genres</h2>
        <ArrowRight className="size-[24px]" />
      </Link>
      <div className="flex max-laptop:flex-col">
        <div className="grid grid-cols-3 grid-rows-2 max-laptop:grid-cols-2 max-laptop:grid-rows-3 max-mobile:grid-cols-auto max-mobile:grid-rows-auto gap-[10px] mr-[10px] max-laptop:mr-0 max-laptop:mb-[10px]">
          {items.map(({ svg: Icon, title, slug }) => {
            return (
              <Link
                key={title}
                href={slug}
                className="w-[272px] h-[145px] max-laptop:w-full bg-[#3C244D] flex flex-col items-center justify-center text-white text-[16px] font-bold rounded-[13px] hover:text-gray-300"
              >
                <Icon className="mb-[10px] size-[40px]" />
                <div className="">{title}</div>
              </Link>
            );
          })}
        </div>
        <Link
          href="/catalog"
          className="flex flex-col items-center justify-center bg-[#3C244D] rounded-[13px] text-white text-[16px] font-bold hover:text-gray-300 w-[272px] max-laptop:w-full max-laptop:py-[20px]"
        >
          <Gamepad className="fill-[#8A18D2] mb-[32px] max-laptop:mb-[10px] w-[52px] h-[38px]" />
          <div className="w-[102px] mb-[21px] max-laptop:mb-0">
            Other genres in the catalog
          </div>
          <RoundedArrow className="fill-[#8A18D2] w-[57px] h-[54px] " />
        </Link>
      </div>
    </>
  );
}
