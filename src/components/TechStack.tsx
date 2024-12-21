"use client";

const TECH_DATA_MAP_LIST = [];

const TechStack = () => {
  let intersectionObserver;

  if (typeof window !== "undefined") {
    intersectionObserver = new IntersectionObserver(() => {});
  }

  return (
    <div className="">
      <h2 className="text-[2rem] font-semibold ">
        🖥️ 이런 기술들을 사용합니다.
      </h2>
      <div className="flex"></div>
    </div>
  );
};

export default TechStack;
