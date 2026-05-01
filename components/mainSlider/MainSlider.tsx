"use client";
import { mainSliderImages } from "@/constants/mainSliderImages.mock";
import { IMainSlider } from "@/types/mainSlider.types";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ArrowRight } from "../icons";
import MainGameCard from "./MainGameCard";

export default function MainSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="w-[44px] h-[6px] bg-[#FFFFFF80] rounded-[4px] ${className}"></div>`;
          },
          bulletActiveClass: "bg-white",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="rounded-[16px]"
      >
        {mainSliderImages.map((item: IMainSlider) => {
          return (
            <SwiperSlide key={item.description}>
              <MainGameCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`size-[41px] absolute left-[15px] top-1/2 z-10 -translate-y-1/2 rotate-180 ${
            activeIndex == 0 ? "opacity-50 " : ""
          } duration-300 cursor-pointer`}
        >
          <ArrowRight className="size-[41px]" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`size-[41px] absolute right-[15px] top-1/2 z-10 -translate-y-1/2 ${
            swiperRef.current?.isEnd ? "opacity-50 " : ""
          } duration-300 cursor-pointer`}
        >
          <ArrowRight className=" size-[41px]" />
        </button>
      </div>
      <div className="flex w-full absolute bottom-[19px] z-10 justify-center space-x-[5px]">
        {mainSliderImages.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Перейти к слайду ${idx + 1}`}
            className={`w-[44px] h-[6px] rounded-[4px] ${
              activeIndex == idx ? "bg-white" : "bg-[#FFFFFF80]"
            }`}
            onClick={() => swiperRef.current?.slideTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
