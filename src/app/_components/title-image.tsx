import { BASE_PATH } from "@/lib/constants";
import cn from "classnames";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const TitleImage = ({ title, src, slug }: Props) => {
  const image = (
    <ExportedImage
      src={`${BASE_PATH}/${src}`}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm lg:max-w-4xl mx-auto max-w-full h-auto", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={280}
      height={100}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default TitleImage;
