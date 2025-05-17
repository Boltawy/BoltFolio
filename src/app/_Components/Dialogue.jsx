"use client";
import { useEffect, useRef } from "react";
import DialoguePrompt from "./DialoguePrompt";
import DialogueAnswer from "./DialogueAnswer";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

export default function Dialogue() {


  return (
    <div
      className={`${roboto.className} flex flex-col justify-center items-center bg-transparent`}
    >
      <DialoguePrompt />
      <DialogueAnswer />
      <DialogueAnswer />
      <DialogueAnswer />
    </div>
  );
}
