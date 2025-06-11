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

export default function BackToLite({ setInteractiveMode }) {
  return (
    <button
      onClick={() => setInteractiveMode(false)}
      className={`animate__animated animate__fadeIn text-6xl  pt-16 font-bold text-gray-500 text-shadow-2xs text-center align-bottom block select-none cursor-pointer`}
      style={{
        fontFamily: play.style.fontFamily,
        animationDuration: "3s",
        animationDelay: "16.5s",
        animationTimingFunction: "ease-in",
      }}
    >
      Go back
    </button>
    // </div>
  );
}
