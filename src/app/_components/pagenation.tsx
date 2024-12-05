import Link from "next/link";
import { PER_PAGE } from "@/lib/constants";
import { range } from "@/lib/api";

type Props = {
  totalPages: number
  currentPage: number
}

export function Pagenation({totalPages, currentPage}: Props) {
  return (
    <ul className="flex gap-4 justify-center items-center w-12 mx-auto list-none">
      {range(1, Math.ceil(totalPages / PER_PAGE)).map((index) => (
        <li key={index}>
          <button className={`${index == currentPage ? "bg-gray-400" : "bg-sky-300"} w-12 h-12 p-2 rounded-lg`}>
            <Link href={`/pages/${index}`}>{index}</Link>
          </button>
        </li>
      ))}
    </ul>
  )
}


