import { Sriracha, Roboto, Oswald, Play } from "next/font/google";

const sriracha = Sriracha({
  variable: "--font-sriracha",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400"],
});

export default function BoltFolioHeader() {
  return (
    // <div
    // className=" flex justify-center items-center bg-gray-400/20 backdrop-blur-md rounded-md shadow-md p-4 min-h-[200px] min-w-[400px] animate__animated animate__fadeInDownBig"
    // style={{ animationDuration: "20s", animationDelay: "1s", animationTimingFunction: "cubic-bezier(.12,.47,0,.95)" }}
    // >
    <h1
      className={`animate__animated animate__fadeIn text-8xl font-bold text-gray-600 text-shadow-2xs text-center align-bottom block`}
      style={{
        fontFamily: play.style.fontFamily,
        animationDuration: "6s",
        animationDelay: "6s",
        animationTimingFunction: "ease-in",
      }}
    >
      Coming Soon...
    </h1>
    // </div>
  );
}
