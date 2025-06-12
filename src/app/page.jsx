"use client";
import LiteMainContent from "../../content/LiteMainContent.jsx";
import { useEffect, useState } from "react";
import Interactive from "./Interactive.jsx";
import SocialBar from "./lite/SocialBar.jsx";

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

  return (
    <>
      <div className="bg relative -z-10 select-text">
        <div className="bg-[#141414] h-screen w-screen fixed inset-0"></div>
        <div className="bg-[url('/simple-bg.png')] h-screen w-screen fixed inset-0"></div>
      </div>

      {isMobile && isLoaded && <SocialBar className="absolute top-6 left-1/2 -translate-x-1/2" />}
      {!isMobile && isLoaded && <SocialBar vertical={true} />}

      {interactiveMode ? (
        <Interactive setInteractiveMode={setInteractiveMode} />
      ) : (
        <LiteMainContent setInteractiveMode={setInteractiveMode} />
      )}
    </>
  );
}
