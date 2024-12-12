import { Post } from "@/interfaces/post";
import Profile from "./profile";
import { PostList } from "./post-list";
type Props = {
  posts: Post[];
}

const Sidebar = ({ posts }: Props) => {
  return (
    <div className="flex flex-col justify-start shadow-md rounded-md mt-8 p-4">
      <Profile />
      <PostList posts={posts} />
    </div>
  )
}

export default Sidebar
