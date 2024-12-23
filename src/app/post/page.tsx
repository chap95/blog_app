import Image from "next/image";
import Link from "next/link";

const POST_DATA_MAP_LIST = [
  {
    id: 1,
    title: "SEO에 대한 간단한 고찰",
    thumbnail: "/seo_thumbnail.png",
  },
] as const;

export default function TestPage() {
  return (
    <div>
      <h1 className="text-[2rem] font-semibold">✅ 글 목록</h1>
      <div className="grid grid-flow-row px-[2rem] mt-[3rem] grid-cols-4">
        {POST_DATA_MAP_LIST.map((data) => {
          const { id, title, thumbnail } = data;

          return (
            <Link key={`PostItem_${id}_${title}`} href={`/post/${id}`}>
              <div className="flex flex-col justify-center items-center border-[0.1rem] p-[1rem] rounded-[1rem] group hover:bg-white transition-colors !duration-500">
                <div className="relative w-[100%] h-[10rem] rounded-[1rem] overflow-hidden">
                  <Image
                    src={thumbnail}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    sizes="100vw"
                  />
                </div>
                <h2 className="text-[1.4rem] font-semibold mt-[0.5rem] group-hover:text-black transition-colors !duration-500 group-hover:underline">
                  {title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
