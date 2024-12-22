"use client";

import { NextIcon, ReactIcon, ReactQueryIcon, FlutterIcon } from "./svgs/Icon";

const TECH_DATA_MAP_LIST = [
  {
    Icon: <NextIcon size="2rem" color="white" />,
    text: "Next.js",
  },
  {
    Icon: <ReactIcon size="2rem" color="white" />,
    text: "React",
  },
  {
    Icon: <ReactQueryIcon size="2rem" color="white" />,
    text: "React Query",
  },
  {
    Icon: <FlutterIcon color="white" size="2rem" />,
    text: "Flutter",
  },
  {
    Icon: "",
    text: "Zustand",
  },
  {
    Icon: "",
    text: "Jotai",
  },
  {
    Icon: "",
    text: "TypeScript",
  },
  {
    Icon: "",
    text: "Javascript",
  },
  {
    Icon: "",
    text: "Dart",
  },
];

const TechStack = () => {
  let intersectionObserver;

  if (typeof window !== "undefined") {
    intersectionObserver = new IntersectionObserver(() => {});
  }

  return (
    <div className="">
      <h2 className="text-[2rem] font-semibold">
        🖥️ 이런 기술들을 사용합니다.
      </h2>

      <div className="flex flex-wrap gap-x-[2rem] gap-y-[2rem] mt-[2.5rem]">
        {TECH_DATA_MAP_LIST.map((data) => {
          const { Icon, text } = data;

          return (
            <div
              key={`techStack_${text}`}
              className="flex gap-x-[0.5rem] items-center"
            >
              {Icon}
              <p className="text-[1.6rem]">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
