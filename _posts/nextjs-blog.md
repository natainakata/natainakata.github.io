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

自サイト改修の一環として、Next.jsのblog-starterを使ってブログを作ってみました。

### blog-starterを導入する

1. リポジトリの作成、今回はyarnで環境構築

```bash
yarn create next-app --example blog-starter natai-blog
cd natai-blog
yarn dev
```

2. http://localhost:3000/へアクセス
