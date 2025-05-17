import Image from "next/image";
import Dialogue from "./_Components/Dialogue.jsx";
import Button from "./_Components/Button.jsx";
import VantaBackground from "./_Components/VantaBackground.jsx";

export default function Dialogue() {
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
      bgMusic.current.volume = 0.5;
      bgMusic.current.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
      });
    }
  }, []);

export default function Home() {
  return (
    <>
      <VantaBackground></VantaBackground>
      {/* <Button /> */}
      {/* <Dialogue /> */}
      <audio ref={welcomeVoice} src="/voice/welcome-to-boltfolio2.mp3" />
      <audio ref={bgMusic} src="/ethereal-soundtrack-short2.mp3" />
      {/* <div className="bg-amber-50 min-h-screen min-w-screen flex items-center justify-center bg-[url('../../public/bg2.webp')] bg-cover bg-center">
      </div> */}
    </>
  );
}
