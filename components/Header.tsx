import { Search } from "./icons";

export default function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={`max-tablet:w-full ${className}`} {...props}>
      <form action="/search" method="GET">
        <div className="flex tablet:min-w-[345px] h-[30px] max-tablet:min-w-full max-tablet:h-[40px] ">
          <input
            name="search"
            type="text"
            placeholder="Search in catalog"
            className=" w-full bg-[#3c244d] rounded-[7px] rounded-r-none pl-[15px] text-white placeholder:text-white placeholder:text-[11px] placeholder:font-normal focus:outline-none"
          />
          <button className="bg-[#3c244d] pl-[15px] pr-[17px] rounded-[7px] rounded-l-none hover:cursor-pointer">
            <Search className="size-[14px]" />
          </button>
        </div>
      </form>
    </header>
  );
}
