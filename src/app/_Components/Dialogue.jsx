"use client";
import { useEffect, useRef } from "react";
import DialoguePrompt from "./DialoguePrompt";
import DialogueAnswer from "./DialogueAnswer";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

export default function Dialogue() {
  const welcomeVoice = useRef(null);
  const bgMusic = useRef(null);

  useEffect(() => {
    if (welcomeVoice.current) {
      setTimeout(() => {
        welcomeVoice.current.play().catch((e) => {
          console.warn("Autoplay blocked:", e);
        });
      }, 8500);
    }
  }, []);

  useEffect(() => {
    if (bgMusic.current) {
      bgMusic.current.volume = 0.2;
      bgMusic.current.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
      });
    }
  }, []);

  return (
    <div
      className={`${roboto.className} flex flex-col justify-center items-center bg-transparent`}
    >
      <DialoguePrompt />
      <DialogueAnswer />
      <DialogueAnswer />
      <DialogueAnswer />
      <audio ref={welcomeVoice} src="/voice/welcome-to-boltfolio2.mp3" />
      <audio ref={bgMusic} src="/ethereal-soundtrack.m4a" />
    </div>
  );
}
