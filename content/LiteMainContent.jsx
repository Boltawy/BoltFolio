import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import MotivationContent from "./MotivationContent.jsx";
import Section from "@/app/lite/Section.jsx";
export default function LiteMainContent({ setInteractiveMode }) {
  return (
    <>
      <main className="font-inter max-w-[510px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-5 mx-auto py-32">
        {/* <h1
          className="font-semibold text-4xl text-gray-200/60 pb-2 font-sriracha tracking-wider"
          id="Home"
        >
          <img
            className="inline w-10 opacity-[55%] pr-0.5 relative bottom-0.5"
            src="/bolt-favicon.svg"
          />
          oltFolio
        </h1> */}
        <img src="boltfolio-white.svg" alt="boltfolio logo" className="w-44 opacity-60 pb-3" />

        <p className="pb-6 text-gray-200/50 leading-6">
          This is the <i>minimalistic</i> version of my portfolio, the
          interactive version{" "}
          <button
            className=" underline underline-offset-4 cursor-pointer hover:text-gray-200"
            onClick={() => setInteractiveMode(true)}
          >
            is in progress.
          </button>
        </p>
        <Section>
          <SubHeading sectionTag="About">Hello world, it's me</SubHeading>
          <P>
            Coming from a non-CS background, I’ve always been drawn to the world
            of software and computers. What began as curiosity grew into a
            passion for building things and solving problems in code, I made the
            intentional decision to pursue a career in tech.
          </P>
          <P>
            I’ve taught myself how to program, debug, and design, not out of
            necessity, but out of passion and curiosity.
          </P>
        </Section>
        <MotivationContent />
        <Section>
          <SubHeading sectionTag="Skills">What do I know </SubHeading>
          <P>
            I've been learning <b>Frontend development</b> for almost 5 months,
            Doing practice projects and learning the <b>React Ecosystem</b>,{" "}
            <b>Next.js</b>, <b>Tailwind</b>, And other tools.{" "}
          </P>
          <P>
            So far, I’ve completed{" "}
            <a
              href="https://github.com/Boltawy/Spicy-Tower"
              target="_blank"
              className="underline underline-offset-4 cursor-pointer hover:text-gray-200"
            >
              <b>one project</b>
            </a>{" "}
            that I fully consider my own, and i am actively working on more.
          </P>
          <P>
            I'm currently diving into <b>Backend Development</b> with{" "}
            <b>Node.js</b>, working toward becoming a{" "}
            <b>Full-Stack Developer</b>.
          </P>
        </Section>
        <SubHeading className={"pb-4"}>To be continued...</SubHeading>
        <Line />
        <footer className="text-gray-200/50 text-center flex flex-col items-center">
          <div>
            This portfolio is {"  "} inspired by {"  "}
            <a
              href="https://paco.me"
              target="_blank"
              className="underline underline-offset-4 whitespace-nowrap hover:text-gray-50"
            >
              Paco Coursey
            </a>
            <SocialBar />
          </div>
          <img
            src="/bolt-favicon.svg"
            className="w-16 opacity-50 pt-12 -mb-12"
            alt="a bolt illustration"
          />
        </footer>
      </main>
    </>
  );
}
