"use client";
import LiteMainContent from "../../content/LiteMainContent.jsx";
import { useEffect, useState } from "react";
import Interactive from "./Interactive.jsx";
import SocialBar from "./lite/SocialBar.jsx";
import Nav from "./lite/Nav.jsx";

export default function page() {
  const [interactiveMode, setInteractiveMode] = useState(false);

  const [isMobile, setIsMobile] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < 1124);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    setIsLoaded(true);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const [fullMode, setFullMode] = useState(false);

  return (
    <>
      <div className="bg relative -z-10 select-text">
        <div className="bg-[#141414] h-screen w-screen fixed inset-0"></div>
        <div className="bg-[url('/simple-bg.png')] h-screen w-screen fixed inset-0"></div>
      </div>

      {isMobile && isLoaded && (
        <header>
          <SocialBar className="absolute top-6 left-1/2 -translate-x-1/2" />
        </header>
      )}
      {!isMobile && isLoaded && <SocialBar vertical={true} />}
      {!isMobile && isLoaded && <Nav setFullMode={setFullMode} />}

      <LiteMainContent
        fullMode={fullMode}
        setFullMode={setFullMode}
        setInteractiveMode={setInteractiveMode}
      />
    </>
  );
}
