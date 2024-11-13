import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeCodeTitles)
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
