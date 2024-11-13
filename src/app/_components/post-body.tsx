"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-one-dark.min.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "../styles/markdown.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="prose md:prose-2xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
