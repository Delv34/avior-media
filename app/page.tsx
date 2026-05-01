import GamesSlider from "@/components/GamesSlider/GamesSlider";
import MainSlider from "@/components/mainSlider/MainSlider";
import {
  gamesSliderImages,
  gamesSliderImages2,
} from "@/constants/gamesSliderImages.mock";
import { genresProps } from "@/constants/genres.mock";
import Image from "next/image";
import Link from "next/link";
import Genres from "../components/Genres";

export default function Home() {
  return (
    // <div className="flex justify-center mt-[50px] min-h-screen">
    <>
      <section className="mt-[25px] mb-[23px]">
        <MainSlider />
      </section>
      <section className="mb-[36px]">
        <GamesSlider
          title="New games"
          category="/new_games"
          items={gamesSliderImages}
        />
      </section>
      <section className="mb-[36px]">
        <GamesSlider
          title="Top Online Games 2025"
          category="/top_online_games_2025"
          items={gamesSliderImages2}
        />
      </section>
      <section className="mb-[42px]">
        <Genres items={genresProps} />
      </section>
      <section className="mb-[111px]">
        <div className="relative">
          <div className="relative w-[1119px] h-[387px] max-laptop:w-[742px] max-laptop:h-[256px] max-mobile:w-full max-mobile:h-auto max-mobile:aspect-3/2">
            <Image
              // width={1119}
              // height={387}
              fill
              src="/images/jpg/banner.jpg"
              alt="banner"
              className="rounded-[13px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <div className="max-w-[340px] text-center text-[32px] max-laptop:text-[28px] max-mobile:text-[20px] font-bold uppercase mb-[20px] max-mobile:min-w-[340px]">
              Looking for something else?
            </div>
            <div className="text-[20px] max-laptop:text-[16px] mb-[33px]">
              Choose a game from the catalog
            </div>
            <Link
              href="/catalog"
              className="w-[163px] h-[36px] flex items-center justify-center bg-[#8A18D2] rounded-[5px] text-[13px] font-bold uppercase hover:bg-[#651299] hover:text-gray-300"
            >
              Go to catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
