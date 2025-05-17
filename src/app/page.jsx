import Image from "next/image";
import Dialogue from "./_Components/Dialogue.jsx";
import Button from "./_Components/Button.jsx";
import VantaBackground from "./_Components/VantaBackground.jsx";

export default function Home() {
  return (
    <>
      <VantaBackground>
      </VantaBackground>
        {/* <Button /> */}
        <Dialogue />
      {/* <div className="bg-amber-50 min-h-screen min-w-screen flex items-center justify-center bg-[url('../../public/bg2.webp')] bg-cover bg-center">
      </div> */}
    </>
  );
}
