import { footerLinks } from "@/constants/footerLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center pt-[50px] bg-[#091121] text-white text-xs font-black h-[134px] max-tablet:py-[30px] max-tablet:h-auto max-tablet:text-base">
      <nav className="flex justify-between min-w-[1345px] max-laptop:min-w-[900px] max-tablet:grid max-tablet:grid-cols-3 max-tablet:min-w-[742px] max-tablet:gap-[40px] max-mobile:grid-cols-1 max-mobile:min-w-[90vw]">
        {footerLinks.map((item) => {
          const { svg: Icon, name, href } = item;
          return (
            <Link
              href={href}
              key={name}
              className="flex items-center max-laptop:justify-center"
            >
              {Icon != undefined ? (
                <>
                  <Icon className="mr-[10px] w-[19px] h-[14px] max-tablet:w-[30px] max-tablet:h-[25px] fill-white opacity-50" />
                </>
              ) : (
                <></>
              )}
              {name}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
