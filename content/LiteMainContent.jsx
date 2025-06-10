import React from "react";

export default function LiteMainContent({ setInteractiveMode }) {
  return (
    <main className="font-inter max-w-[460px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-6 mx-auto py-32 text-gray-200">
      <h1 className="font-semibold text-3xl opacity-50 pb-2 font-sriracha tracking-wider">
        BoltFolio
      </h1>
      <p className="pb-8 opacity-60">
        This is a <i>simple</i> version of my portfolio, for the interactive
        version,{" "}
        <button
          className=" underline underline-offset-2 cursor-pointer"
          onClick={() => setInteractiveMode(true)}
        >
          Click Here
        </button>
      </p>
      <div className="border w-full bg-gray-100 opacity-10 mb-4"></div>
      <p className="pb-4">
        Coming from a non-CS background, I approach software with fresh eyes and
        relentless curiosity. I’ve taught myself to code, debug, and design —
        not because I had to, but because of a passion for computers and
        software.
      </p>
      <p className="pb-4">
        I am currently learning Backend development in Node.js{" "}
      </p>
      <div className="border w-full bg-gray-100 opacity-10 mb-4"></div>
      <footer className="opacity-50 text-center">
        This portfolio is <b>heavily</b> {"  "} inspired by {"  "}
        <div className="inline-block border-b border-b-white/50">
          <a href="https://paco.me" className="">
            Paco Coursey
          </a>
        </div>
      </footer>
    </main>
  );
}
