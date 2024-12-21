import Link from "next/link";
import { memo } from "react";

const NAVIGATOR_DATA_VALUE_MAP_LIST = [
  {
    text: "홈",
    href: "/",
  },
  {
    text: "포스트",
    href: "/post",
  },
];

const Navigator = () => {
  return (
    <div className="flex gap-x-[3.5rem] border-b-[0.1rem] pb-[2rem]">
      {NAVIGATOR_DATA_VALUE_MAP_LIST.map((data, index) => {
        const { text, href } = data;

        return (
          <Link key={`${text}_${index}`} href={href}>
            <p className="text-[2rem] font-bold hover:text-slate-500 transition-[color] duration-500	">
              {text}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default memo(Navigator);
