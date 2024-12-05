import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import TitleImage from "./title-image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostLink({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
      <div className="mt-8 flex flex-wrap md:flex-nowrap gap-8 justify-between">
        <div className="flex-shrink-0 md:order-3">
          <TitleImage slug={slug} title={title} src={coverImage} />
        </div>
        <div>
          <div className="flex-grow flex-col md:order-2 md:mt-0 mt-4">
          <h3 className="text-3xl mb-3 leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="leading-relaxed mb-4">{excerpt}</p>
        </div>
        <div className="flex-shrink-0 flex flex-col md:order-1">
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        </div>
        
      </div>
      
  );
}
