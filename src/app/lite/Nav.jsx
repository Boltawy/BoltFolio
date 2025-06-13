"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

export default function Nav() {
  const pathname = usePathname();
  const links = ["About", "Motivation", "Skills"];

  return (
    <ul
      className="flex flex-col justify-center items-end fixed top-1/2 h-screen -translate-y-1/2 right-12  py-16 text-2xl font-semibold font-inter gap-5 animate__animated animate__fadeIn
        before:content-[''] before:w-1 before:relative before:top-0 before:right-1 before:h-1/2 before:bg-gray-200/20
      after:content-[''] after:w-1 after:relative after:bottom-0 after:right-1 after:h-1/2 after:bg-gray-200/20"
    >
      {links.map((link) => (
        <Link
          key={link}
          href={`#${link}`}
          className={`hover:text-gray-200 inline-block w-full text-right ${
            pathname === `/#${link}` ? "text-gray-200" : "text-gray-200/50"
          }`}
        >
          {link}
        </Link>
      ))}
    </ul>
  );
}
