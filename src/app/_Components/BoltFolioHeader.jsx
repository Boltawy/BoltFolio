import { Sriracha } from "next/font/google";

const sriracha = Sriracha({
  variable: "--font-sriracha",
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
        className={`animate__animated animate__fadeInDownBig text-8xl font-bold text-gray-700/90 text-shadow-2xs text-center align-bottom block`}
        style={{
          fontFamily: sriracha.style.fontFamily,
          animationDuration: "20s", animationDelay: "1s", animationTimingFunction: "cubic-bezier(.12,.47,0,.95)"        }}
      >
        Coming Soon...
      </h1>
    // </div>
  );
}
