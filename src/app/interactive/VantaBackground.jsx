"use client";
import { useRef, useEffect, useState } from "react";
import Dots from "vanta/dist/vanta.dots.min";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      setVantaEffect(
        Dots({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.5,
          scaleMobile: 1.5,
          backgroundColor: 0xe5e5e5,
          color: 0x939393,
          backgroundColor2: 0xadd8e6,
          showLines: false,
          size: 6.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className=" fixed top-0 left-0 min-h-screen min-w-screen -z-10"

    >
      {children}
    </div>
  );
}
