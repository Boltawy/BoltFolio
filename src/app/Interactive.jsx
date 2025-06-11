"use client";

import { useEffect, useRef } from "react";
import "animate.css";
import BackToLite from "./interactive/BackToLite.jsx";
import BoltFolioHeader from "./interactive/BoltFolioHeader.jsx";
import VantaBackground from "./interactive/VantaBackground.jsx";


export default function Interactive({ setInteractiveMode }) {
  const welcomeVoice = useRef(null);
  const bgMusic = useRef(null);

  useEffect(() => {
    if (welcomeVoice.current) {
      setTimeout(() => {
        welcomeVoice.current.play().catch((e) => {
          console.warn("Autoplay blocked:", e);
        });
      }, 13000);
    }
  }, []);

  useEffect(() => {
    if (bgMusic.current) {
      bgMusic.current.volume = 0.6;
      bgMusic.current.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
      });
    }
  }, []);
  return (
    <>
      <VantaBackground></VantaBackground>
      <div className="flex flex-col justify-center items-center pb-60 min-h-screen min-w-screen">
        <BoltFolioHeader />
        <BackToLite setInteractiveMode={setInteractiveMode} />
      </div>

      <audio ref={welcomeVoice} src="/voice/coming-soon.mp3" />
      <audio ref={bgMusic} src="/ethereal-soundtrack-short2.mp3" />
    </>
  );
}
