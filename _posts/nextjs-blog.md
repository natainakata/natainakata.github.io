---
title: "Next.jsでブログを作った"
excerpt: "自サイト改修の一環として、Next.jsのblog-starterを使ってブログを作ってみました。"
coverImage: "assets/blog/nextjs-blog/cover.png"
date: "2024-11-14T12:43"
author:
  name: "中田なたい"
  picture: "assets/blog/authors/natai.png"
ogImage:
  url: "assets/blog/nextjs-blog/cover.png"
---

中田なたいです。
自サイト改修の一環として、Next.jsのblog-starterを使ってブログを作ってみました。

### blog-starterを導入する

1\. リポジトリの作成、今回は`yarn{:shell}`で環境構築

```bash title="shell"
yarn create next-app --example blog-starter natai-blog
cd natai-blog
yarn dev
```

2\. [http://localhost:3000](http://localhost:3000)へアクセス

### スタイルを自サイトに合わせる

blog-starterのスタイルが適用されているので変更します。

1\. フォントを導入

M PLUS 1pを導入します。

```ts title="tailwond.config.ts"
const config: Config = {
  ...
  theme: {
    extend: {
+     fontFamily: {
+       sans: ["M PLUS 1p", "sans-serif"],
+     },
  ...
}
```

```css title="src/app/globals.css"
+ @import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap");
```

2\. layout.tsxと\_components/を変更する

ページのレイアウトを変更しつつ、ヘッダーなどのコンポーネントも調整します。<br>
一部のComponentsは[Tailblocks](https://tailblocks.cc)から引っ張ってきました。

先程導入したフォントもここで適用します。

また、`Icon{:tsx}`コンポーネントを作成してヘッダーとフッターに表示しています。

```tsx title="src/app/_conponents/Icon.tsx"
import ExportedImage from "next/next-image-export-optimizer";

const Icon = () => {
  return (
    <div>
      <ExportedImage
        src="/assets/icon/icon.svg"
        alt="Icon"
        width={64}
        height={64}
      />
    </div>
  );
};

export default Icon;
```

詳細は[こちら](https://github.com/natainakata/natainakata.github.io/commit/994d976d3b451e54a99b744dcdbb081d51d0d7f2)のコミットログを確認してください。

### 記事を置き換える

`_posts{:plaintext}`ディレクトリにはexample記事があるので削除。<br>
この記事に置き換えました。

また、`public{:plaintext}`ディレクトリへ自分のアイコンも配置しています (注:`Icon{:tsx}`コンポーネントとは別の画像)

### 記事部分のスタイルを修正

記事部分のスタイルがよろしくないので`@tailwindcss/typography{:plaintext}`を導入します。

元々存在した`markdown-styles.module.css{:plaintext}`は削除しました。

```bash title="shell"
yarn add @tailwindcss/typography
```

```ts title="tailwind.config.ts"
module.exports = {
  ...
+  plugins: [
+    require('@tailwindcss/typography'),
+  ],
  ...
}
```

また、シンタックスハイライトを適用させたいので`rehype-pretty-code{:plaintext}`も導入します。

```bash title="shell"
yarn add rehype-pretty-code shiki
```

```ts title="src/lib/markdownToHtml.ts"
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
```

コードブロックのタイトルやインラインコードのスタイルも設定しました。

```css title="src/styles/markdown.css"
.prose figcaption[data-rehype-pretty-code-title] {
  @apply table bg-gray-700 text-white pt-1 pb-5 px-3 rounded-t-md text-sm;
  margin-bottom: -16px;
}

.prose figcaption[data-rehype-pretty-code-title] + figure {
  @apply mt-0;
}

.prose p code {
  @apply align-text-bottom rounded-md px-1 py-0.5;
}
```

これらを設定したら記事を表示する`PostBody{:tsx}`コンポーネントへスタイルを適用します。

```tsx title="src/app/_components/post-body.tsx"
import "../styles/markdown.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="prose lg:prose-xl md:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
```

これでひとまず見れる形にはなりました。

### 今後実装したいもの

- リンクカード
- 今の自サイトとの統合
- 記事へのタグ付け

### 最後に

以上が`blog-starter{:plaintext}`をベースとしたブログの作成でした。
参考になれば幸いです。

#### 参考記事

- [Next.jsを使った個人ブログ作成のまとめ](https://zenn.dev/rorisutarou/articles/813a97d795cf74)
- [女医が教える本当に気持ちのいい Markdown 変換処理【Next.js編】](https://zenn.dev/yoshiishunichi/articles/667120b3d0c9d2#%E7%9B%B4%E6%8E%A5%E6%9B%B8%E3%81%84%E3%81%9F%E3%82%BF%E3%82%B0%E3%81%AB%E5%AF%BE%E5%BF%9C)
- ["tailwindTYPOGRAPHY"で取り急ぎイイ感じなスタイルを適用する](https://zenn.dev/datchlive/articles/50e556d27d68b4)
- [Rehype Pretty Code を使って、美しきシンタックスハイライトを手に入れる](https://osgsm.io/posts/introducing-rehype-pretty-code)
