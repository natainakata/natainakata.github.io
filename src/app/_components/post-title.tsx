import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h1>
  );
}