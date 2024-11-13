---
title: "Next.jsでブログを作った"
excerpt: "自サイト改修の一環として、Next.jsのblog-starterを使ってブログを作ってみました。"
coverImage: "/assets/blog/nextjs-blog/cover.png"
date: "2024-11-12T11:05"
author:
  name: "中田なたい"
  picture: "/assets/blog/authors/natai.png"
ogImage:
  url: "/assets/blog/nextjs-blog/cover.png"
---

中田なたいです。
自サイト改修の一環として、Next.jsのblog-starterを使ってブログを作ってみました。

### blog-starterを導入する

1\. リポジトリの作成、今回はyarnで環境構築

   ```bash:shell
   yarn create next-app --example blog-starter natai-blog
   cd natai-blog
   yarn dev
   ```

2\. [http://localhost:3000](http://localhost:3000)へアクセス

### スタイルを自サイトに合わせる

blog-starterのスタイルが適用されているので変更します。

1\. フォントを導入

   M PLUS 1pを導入します。

   ```ts:tailwind.config.ts
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

   ```css:src/app/globals.css
   + @import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap");
   ```

2\. layout.tsxと\_components/を変更する

   ページのレイアウトを変更しつつ、ヘッダーなどのコンポーネントも調整します。<br>
   一部のComponentsは[Tailblocks](https://tailblocks.cc)から引っ張ってきました。

   先程導入したフォントもここで適用します。

   また、Iconコンポーネントを作成してヘッダーとフッターに表示しています。

   ```jsx:src/app/_conponents/Icon.tsx
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

   詳細は[こちら](https://github.com/natainakata/natai-blog/commit/994d976d3b451e54a99b744dcdbb081d51d0d7f2)のコミットログを確認してください。


### 記事を置き換える

\_postsディレクトリにはexample記事があるので削除。<br>
この記事に置き換えました。

また、publicディレクトリへ自分のアイコンも配置しています (注:Iconコンポーネントとは別の画像)

### 記事部分のスタイルを修正

記事部分のスタイルがよろしくないのでmarkdown-styles.module.cssを編集していい感じにします。
