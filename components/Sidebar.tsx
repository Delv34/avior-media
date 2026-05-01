"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import { ArrowRight, BurgerMenu } from "./icons";

export default function Sidebar({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={`${className} relative min-h-screen max-tablet:min-h-0 text-white`}
    >
      <div
        className={`${
          isOpen
            ? "flex items-center fixed left-[20px] top-[20px] pr-[45px] z-30 w-full"
            : ""
        }`}
      >
        <button
          className={`block ${isOpen ? "mr-[20px]" : "static"}`}
          onClick={toggleMenu}
        >
          <BurgerMenu className="stroke-white size-[40px] tablet:hidden" />
        </button>
        <Header className={`${isOpen ? "mr-[20px]" : "hidden"}`} />
        <Link href="/" className={`${isOpen ? "" : "hidden"}`}>
          <Image
            src="/images/png/Logo.png"
            width={138}
            height={49}
            alt="GO-GET Games"
          />
        </Link>
      </div>
      <div
        className={`flex flex-col after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-[#3C244D] max-tablet:items-center ${
          isOpen
            ? "opacity-100 z-20 w-screen h-screen fixed inset-0 pt-[60px] after:hidden bg-[#0a1222]"
            : "max-tablet:hidden"
        }`}
      >
        <Link href="/" className="ml-[17px] mb-[42px] max-tablet:hidden">
          <Image
            src="/images/png/Logo.png"
            width={138}
            height={49}
            alt="GO-GET Games"
          />
        </Link>
        <nav className={`${isOpen ? "mt-[40px] w-full" : ""}`}>
          {sidebarLinks.map(({ href, name, svg: Icon }, index) => {
            return (
              <div
                key={name}
                className="text-xs max-tablet:text-2xl max-mobile:text-lg max-tablet:mx-[25px] max-tablet:w-[calc(100%-50px)] font-bold uppercase"
              >
                {index < 1 ? (
                  <>
                    <Link
                      href={href}
                      className="flex items-center mb-[10px] hover:text-gray-300"
                    >
                      <Icon className="size-[20px] max-tablet:size-[35px] mr-[10px] max-tablet:mr-[20px]" />
                      {name}
                      <ArrowRight className="size-[10px] max-tablet:size-[30px] ml-[5px] max-tablet:ml-[20px]" />
                    </Link>
                    <hr className="w-[178px] max-tablet:hidden mb-[17px] text-[#3c244d]" />
                  </>
                ) : (
                  <Link
                    href={href}
                    className="flex items-center mb-[9px] hover:text-gray-300 max-tablet:mt-[30px]"
                  >
                    <Icon className="size-[18px] max-tablet:size-[35px] mr-[10px] max-tablet:mr-[20px]" />
                    {name}
                    <ArrowRight className="size-[10px] max-tablet:size-[30px] ml-[5px] max-tablet:ml-[20px]" />
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
