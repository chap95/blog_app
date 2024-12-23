import Image, { ImageProps } from "next/image";

export interface PostIntroductionProps {
  title: string;
  description?: string;
  image?: ImageProps;
}

const PostIntroduction = ({
  title,
  description,
  image,
}: PostIntroductionProps) => {
  let child;

  if (image) {
    child = <Image {...image} />;

    if (image.layout === "fill") {
      child = <div className="relative w-[5rem] h-[5rem]">{child}</div>;
    }
  }

  if (description) {
    child = (
      <div className="flex gap-x-[1rem]">
        {child ?? <></>}
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      {child ?? <></>}
    </div>
  );
};

export default PostIntroduction;
