"use client";
import { IGamesSliderProps } from "@/types/gamesSlider.types";
import Link from "next/link";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ArrowRight, RoundArrowRight } from "../icons";
import GameCard from "./GameCard";

export default function GamesSlider({
  title,
  category,
  items,
}: IGamesSliderProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="max-w-[1120px] h-[50%]">
      <div className="flex justify-between max-mobile:justify-normal">
        <Link href={category} className="flex items-center mb-[17px]">
          <h2 className="text-white text-[32px] max-mobile:text-[20px] font-bold hover:text-gray-300 mr-[13px]">
            {title}
          </h2>
          <ArrowRight className="size-[24px]" />
        </Link>
        <div className="max-mobile:ml-[10px]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer"
            // className="swiper-prev absolute left-2 top-1/2 z-10 -translate-y-1/2
            //        rounded-full bg-white p-2 shadow hover:bg-gray-100 disabled:opacity-50 duration-300"
          >
            <RoundArrowRight
              className={`size-[34px] max-tablet:size-[48px] max-mobile:size-[34px] rotate-180 ${
                activeIndex == 0 ? "fill-[#5E6060]" : "fill-white"
              } transition-300`}
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer"
            // className="swiper-next absolute right-2 top-1/2 z-10 -translate-y-1/2
            //        rounded-full bg-white p-2 shadow hover:bg-gray-100 disabled:opacity-50 duration-300"
          >
            <RoundArrowRight
              className={`size-[34px] max-tablet:size-[48px] max-mobile:size-[34px] ${
                swiperRef.current?.isEnd ? "fill-[#5E6060]" : "fill-white"
              } transition-300`}
            />
          </button>
        </div>
      </div>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={14}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            1600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            365: {
              slidesPerView: 1,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <GameCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
