import { Post } from "@/interfaces/post";
import { PostLink } from "./post-link";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <PostLink
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
