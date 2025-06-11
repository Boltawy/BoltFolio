import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import TheJoyOfBuildingThings from "./TheJoyOfBuildingThings.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
export default function LiteMainContent({ setInteractiveMode }) {
  return (
    <>
      <main className="font-inter max-w-[510px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-5 mx-auto py-32 leading-9">
        <h1 className="font-semibold text-4xl text-gray-200/60 pb-1 font-sriracha tracking-wider">
          BoltFolio
        </h1>
        <p className="pb-4 text-gray-200/50">
          This is the <i>simplistic</i> version of my portfolio, the interactive
          version{" "}
          <button
            className=" underline underline-offset-4 cursor-pointer hover:text-gray-200"
            onClick={() => setInteractiveMode(true)}
          >
            is in progress
          </button>
          .
        </p>
        <Line />
        <P>
          Coming from a non-CS background, I am entering tech to fulfill the joy
          of building things and providing solutions for everyday problems. I’ve
          taught myself to code, debug, and design — not because I had to, but
          because of a passion for computers and software.
        </P>
        <TheJoyOfBuildingThings />
        <Line />
        <SubHeading>What Do I Know</SubHeading>
        <P>
          I've been learning <b>Frontend development</b> for almost 5 months,
          Doing practice projects and learning the <b>React Ecosystem</b>,{" "}
          <b>Next.js</b>, <b>TailwindCSS</b>, And other tools.{" "}
        </P>
        <P>
          So far, I’ve completed{" "}
          <a
            href="https://spicy-tower.vercel.app"
            target="_blank"
            className="underline underline-offset-4 cursor-pointer hover:text-gray-200"
          >
            <b>one project</b>
          </a>{" "}
          that I fully consider my own and am actively working on more.
        </P>
        <P>
          I'm currently diving into <b>Backend Development</b> with{" "}
          <b>Node.js</b>, working toward becoming a <b>Full-Stack Developer</b>.
        </P>
        <Line />
        <footer className="text-gray-200/50 text-center">
          This portfolio is <b>heavily</b> {"  "} inspired by {"  "}
          <a
            href="https://paco.me"
            target="_blank"
            className="underline underline-offset-4 whitespace-nowrap hover:text-gray-50"
          >
            Paco Coursey
          </a>
          <SocialBar />
        </footer>
      </main>
    </>
  );
}
