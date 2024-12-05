import Container from "@/app/_components/container";
import { Pagenation } from "@/app/_components/pagenation";
import { PostList } from "@/app/_components/post-list";
import { getAllPosts } from "@/lib/api";
import { PER_PAGE } from "@/lib/constants";
import { range } from "@/lib/api";

const pageRange = (index: number) => [(index - 1) * PER_PAGE, index * PER_PAGE];

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const totalPages = range(1, Math.ceil(allPosts.length / PER_PAGE));
  return totalPages.map((index) => ({
    index: `${index}`
  }))
  
}

export default async function PageLists({ params }: { params: { index: number } }) {
  const index = params.index;
  return (
    <main>
     <Container>
      <section className="max-w-3xl mx-auto">
        <h2 className="mt-8 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
        Posts
       </h2>
       <PostList posts={getAllPosts().slice(...pageRange(index))} />
      </section>
      <Pagenation totalPages={getAllPosts().length} currentPage={index}/>
     </Container>
    </main>
  )
}
