import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkLinkCard from "remark-link-card";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import rehypeFigure from "rehype-figure";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";


export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkDirectiveRehype)
    .use(remarkLinkCard)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeExternalLinks, { target: "_blank" })
    .use(rehypePrettyCode, {
      keepBackground: true,
    })
    .use(rehypeFigure)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}
