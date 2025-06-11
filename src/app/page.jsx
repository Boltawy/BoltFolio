"use client";
import MDXLayout from "./_Components/MDXlayout.jsx";
import Content from "./../../content/lite-main.mdx";
import LiteMainContent from "../../content/LiteMainContent.jsx";
import { useState } from "react";
import Interactive from "./Interactive.jsx";

export default function page() {
  const [interactiveMode, setInteractiveMode] = useState(false);
  return (
    <>
      <div className="bg relative -z-10 select-text">
        <div className="bg-[#141414] h-screen w-screen fixed inset-0"></div>
        <div className="bg-[url('/simple-bg.png')] h-screen w-screen fixed inset-0"></div>
      </div>
      {interactiveMode ? (
        <Interactive setInteractiveMode={setInteractiveMode} />
      ) : (
        <LiteMainContent setInteractiveMode={setInteractiveMode} />
      )}
      {/* <LiteMainContent setInteractiveMode={setInteractiveMode} /> */}
    </>
  );
}
