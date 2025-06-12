"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

export default function Nav() {
  const pathname = usePathname();

  return (
    <ul
      className="flex flex-col justify-center items-end fixed top-1/2 h-screen -translate-y-1/2 right-12  py-16 text-2xl gap-5 text-gray-200/50 animate__animated animate__fadeIn
        before:content-[''] before:w-1 before:relative before:top-0 before:right-1 before:h-1/2 before:bg-gray-200/20
      after:content-[''] after:w-1 after:relative after:bottom-0 after:right-1 after:h-1/2 after:bg-gray-200/20"
    >
      <Link
        className="hover:text-gray-200 inline-block w-full text-right"
        href="#Home"
      >
        About
      </Link>
      <Link
        className="hover:text-gray-200 inline-block w-full text-right"
        href="#Motivation"
      >
        Motivation
      </Link>
      <Link
        className="hover:text-gray-200 inline-block w-full text-right"
        href="#Skills"
      >
        Skills
      </Link>
    </ul>
  );
}
