import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import MotivationContent from "./MotivationContent.jsx";
import Section from "@/app/lite/Section.jsx";
import "../public/fonts/style.css";
import B from "@/app/lite/B.jsx";

export default function LiteMainContent({ setInteractiveMode }) {
  return (
    <>
      <main className="font-inter max-w-[510px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-5 mx-auto py-32">
        <h1
          className="font-bold text-4xl text-gray-200/60 pb-2 font-sriracha tracking-[2.5px]"
          id="Home"
        >
          <span className="icon-bolt-favicon text-[1.85rem]">B</span>
          oltfolio
        </h1>

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
        <Line />
        {/* <Section>
          <SubHeading sectionTag="Overview">Quick overview</SubHeading>
          <ul className="list-disc mb-4">
            <li className="text-gray-200 leading-6">
              Full-Stack developer, proficient in:
              <ul className="list-disc pl-4">
                <li>
                  <B>React</B>, <B>Next.js</B>, <B>Tailwind</B>.
                </li>
                <li>
                  <B>Express</B>, <B>Nest.js</B>, <B>MongoDB</B>.
                </li>
                <li>and various others.</li>
              </ul>
            </li>
          </ul>
        </Section> */}
        <Section>
          <SubHeading sectionTag="About">
            Hello world, <span className="whitespace-nowrap">it's me</span>
          </SubHeading>
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
            I've been learning <B>Frontend development</B> for almost 5 months,
            Doing practice projects and learning the <B>React Ecosystem</B>,{" "}
            <B>Next.js</B>, <B>Tailwind</B>, And other tools.{" "}
          </P>
          <P>
            So far, I’ve completed{" "}
            <a
              href="https://github.com/Boltawy/Spicy-Tower"
              target="_blank"
              className="underline underline-offset-4 cursor-pointer hover:text-gray-200"
            >
              <B>one project</B>
            </a>{" "}
            that I fully consider my own, and i am actively working on more.
          </P>
          <P>
            I'm currently diving into <B>Backend Development</B> with{" "}
            <B>Node.js</B>, working toward becoming a{" "}
            <B>Full-Stack Developer</B>.
          </P>
        </Section>
        <SubHeading className={"pb-4"}>To be continued...</SubHeading>
        <Line />
        <footer className="text-gray-200/50 text-center flex flex-col items-center">
          <P className="text-gray-200/50">
            This portfolio is {"  "} inspired by {"  "}
            <a
              href="https://paco.me"
              target="_blank"
              className="underline underline-offset-4 whitespace-nowrap hover:text-gray-50"
            >
              Paco Coursey
            </a>
          </P>
          <SocialBar />
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
