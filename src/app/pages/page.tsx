import Container from "@/app/_components/container";
import { Pagenation } from "@/app/_components/pagenation";
import { PostList } from "@/app/_components/post-list";
import { getAllPosts } from "@/lib/api";
import { PER_PAGE } from "@/lib/constants";

const pageRange = (index: number) => [(index - 1) * PER_PAGE, index * PER_PAGE];

export default function PageLists() {
  return (
    <main>
     <Container>
      <section className="max-w-3xl mx-auto">
        <h2 className="mt-8 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
        Posts
       </h2>
       <PostList posts={getAllPosts().slice(...pageRange(1))} />
      </section>
      <Pagenation totalPages={getAllPosts().length} currentPage={1}/>
     </Container>
    </main>
  )
}
