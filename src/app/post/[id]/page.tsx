enum PostDetailViewType {
  "introduction",
  "mainContent",
}

interface PostDetailMapDataType {
  viewType: PostDetailViewType;
  title: string;
  description: string;
  content: string;
  image?: {};
}

type PostDetailMapType = Record<number, {}>;

const POST_DETAIL_DATA_MAP: PostDetailMapType = {
  1: {
    viewType: PostDetailViewType.introduction,
    title: "SEO에 대한 간단한 고찰",
    description:
      "SEO에 대한 정의와 이에 대한 개인적인 생각을 정리해 보았습니다.",
    content: "",
  },
};

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title, description } = POST_DETAIL_DATA_MAP[id] ?? {};

  return (
    <div className="px-[2rem] py-[3rem]">
      <h1 className="text-[2rem] font-semibold">{title}</h1>
      <h2 className="text-[1.5rem] font-semibold">{description}</h2>
    </div>
  );
}
