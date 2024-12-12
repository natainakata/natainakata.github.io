import { BASE_PATH, CMS_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";

import Footer from "@/app/_components/footer";
import Header from "./_components/header";

import { ThemeSwitcher } from "./_components/theme-switcher";
import "./globals.css";

export const metadata: Metadata = {
  title: `${CMS_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href={`${BASE_PATH}/assets/icon/icon.png`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          type="text/css"
        />
      </head>
      <body className={cn("font-sans", "dark:bg-gray-700 dark:text-gray-200")}>
        <Header />
        <div className="min-h-screen max-w-screen-xl mx-auto">{children}</div>
        <ThemeSwitcher />
        <Footer />
      </body>
    </html>
  );
}
