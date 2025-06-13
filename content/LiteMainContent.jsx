import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import MotivationContent from "./MotivationContent.jsx";
import Section from "@/app/lite/Section.jsx";
import "../public/fonts/style.css";
import B from "@/app/lite/B.jsx";
import { useState } from "react";

export default function LiteMainContent({
  fullMode,
  setFullMode,
  setInteractiveMode,
}) {
  const tools = ["React", "Next.js", "TailwindCSS", "Express.js", "MongoDB"];
  const languages = ["HTML/CSS", "JavaScript", "TypeScript"];

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
        <Section>
          <SubHeading sectionTag="Overview">Quick overview</SubHeading>
          <P className="text-gray-200 leading-6">
            Full-Stack Developer in progress, driven by a passion for software
            and building impactful projects, always learning, always growing.
          </P>
          <div className="flex pb-8">
            {/* <div className="w-1/3"></div> */}
            <div className="flex flex-col lg:flex-row w-1/2 lg:w-2/3">
              <div className="w-full lg:w-1/2">
                <h4 className="font-semibold text-gray-200/60 py-4 pr-8">
                  Tools & Frameworks
                </h4>
                <ul className="mb-4 ">
                  {tools.map((tool) => (
                    <li className="text-gray-200 leading-6 pb-2" key={tool}>
                      <B>{tool}</B>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <h4 className="font-semibold text-gray-200/60 py-4">
                  Languages
                </h4>
                <ul className="mb-4">
                  {languages.map((lang) => (
                    <li className="text-gray-200 leading-6 pb-2" key={lang}>
                      <B>{lang}</B>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2 lg:w1/3">
              <h4 className="font-semibold text-gray-200/60 py-4">Projects</h4>
              <ul className="mb-4">
                <li className="text-gray-200 leading-6 pb-2">
                  <B>CRUD.jsx</B>
                  <p className="text-gray-200/50">
                    a full-stack e-commerce app
                  </p>
                </li>
                <li className="text-gray-200 leading-6 pb-2">
                  <B>Spicy Tower</B>
                  <p className="text-gray-200/50">
                    a rage inducing game made with Kaplay.js{" "}
                  </p>
                </li>
                <li className="text-gray-200 leading-6 pb-2">
                  <B>Brutally Honest</B>
                  <p className="text-gray-200/50">
                    an annonymous messaging app
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {!fullMode && (
            <button
              className="text-gray-200 border border-gray-200/50 px-4 py-2 mb-8 block mx-auto  hover:bg-gray-200/10 cursor-pointer"
              onClick={() => setFullMode(true)}
            >
              More about me
            </button>
          )}
        </Section>
          <div className={"animate__animated animate__fadeIn " + (fullMode ? "block" : "hidden")}>
            <Section>
              <SubHeading sectionTag="About">
                Hello world, <span className="whitespace-nowrap">it's me</span>
              </SubHeading>
              <P>
                Coming from a non-CS background, I’ve always been drawn to the
                world of software and computers. What began as curiosity grew
                into a passion for building things and solving problems in code,
                I made the intentional decision to pursue a career in tech.
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
                I've been learning <B>Frontend development</B> for almost 5
                months, Doing practice projects and learning the{" "}
                <B>React Ecosystem</B>, <B>Next.js</B>, <B>Tailwind</B>, And
                other tools.{" "}
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
          </div>

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
