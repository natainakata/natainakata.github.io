import "../styles/markdown.css";
import "../styles/markdown-linkcard.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="prose dark:prose-dark lg:prose-xl md:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
