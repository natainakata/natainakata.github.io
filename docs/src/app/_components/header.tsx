import Link from "next/link";
import styles from "../styles/link.module.css";
import Icon from "./icon";

const Header = () => {
  return (
    <header className="shadow-sm container mx-auto flex">
      <div className="mx-auto container flex flex-wrap p-4 flex-col md:flex-row items-center md:justify-between">
        <h2 className="font-bold tracking-tight md:tracking-tighter leading-tight flex items-center">
          <div className="pr-4">
            <Icon />
          </div>
          <Link href="/" className="hover:underline md:text-4xl text-2xl">
            Natai Nakata
          </Link>
        </h2>
        <nav className="flex items-center justify-between md:mt-0 mt-4">
          <Link href={"/about"} className={styles["link-header"]}>
            About
          </Link>
          {/*
            <Link href={"/works"} className={styles["link-header"]}>
              Works
            </Link>
          */}
          <Link href={"/contact"} className={styles["link-header"]}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
