import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import MotivationContent from "./MotivationContent.jsx";
import Section from "@/app/lite/Section.jsx";
import "../public/fonts/style.css";
import B from "@/app/lite/B.jsx";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClipboard,
  faCopy,
  faTrowel,
  faUpRightFromSquare,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import NoWrap from "@/app/lite/NoWrap.jsx";

export default function LiteMainContent({
  fullMode,
  setFullMode,
  setInteractiveMode,
}) {
  //   const tailwindsvg = `d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
  // `;
  const tools = [
    { name: "React", icon: "/icons/react.svg", alt: "React logo" },
    { name: "Next.js", icon: "/icons/next.svg", alt: "Next.js logo" },
    { name: "Tailwind", icon: "/icons/tailwind.svg", alt: "Tailwind CSS logo" },
    { name: "Express.js", icon: "/icons/express.svg", alt: "Express.js logo" },
    { name: "MongoDB", icon: "/icons/mongodb.svg", alt: "MongoDB logo" },
  ];
  const languages = [
    { name: "HTML/CSS", icon: "/icons/html-css.svg", alt: "HTML CSS logo" },
    { name: "JavaScript", icon: "/icons/js.svg", alt: "JavaScript logo" },
    { name: "TypeScript", icon: "/icons/ts.svg", alt: "TypeScript logo" },
  ];

  const [copied, setCopied] = useState(false);
  const emailAddress = "boltawy.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <>
      <main className="font-inter max-w-[510px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-5 mx-auto pt-32">
        <h1
          className="font-bold text-4xl text-gray-200/60 pb-2 font-sriracha tracking-[2.5px]"
          id="Home"
        >
          <span className="icon-bolt-favicon text-[1.85rem]">B</span>
          oltfolio
        </h1>

        {/* <p className="pb-6 text-gray-200/50 leading-6">
          This is the <i>minimalistic</i> version of my portfolio, the
          interactive version{" "}
          <button
            className=" underline underline-offset-4 cursor-pointer hover:text-gray-200"
            onClick={() => setInteractiveMode(true)}
          >
            is in progress.
          </button>
        </p> */}
        <Line />
        <Section>
          <SubHeading sectionTag="Overview">At a glance</SubHeading>
          <P className="text-gray-200">
            Full-Stack Developer in progress, driven by a passion for software
            and building impactful projects, always learning, always growing.
          </P>
          <div className="flex pb-8">
            <div className="flex flex-col lg:flex-row w-1/2 lg:w-2/3">
              <div className="w-full lg:w-1/2">
                <h4 className="font-semibold text-gray-200/60 py-4 pr-8">
                  Tools & Frameworks
                </h4>
                <ul className="mb-4 ">
                  {tools.map((tool) => (
                    <li
                      className="text-gray-200 leading-6 pb-4"
                      key={tool.name}
                    >
                      <img
                        src={tool.icon}
                        alt={tool.alt}
                        className="inline-block w-6 mr-2 mb-1 fill-gray-200"
                      />
                      <B>{tool.name}</B>
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
                    <li
                      className="text-gray-200 leading-6 pb-4"
                      key={lang.name}
                    >
                      <img
                        src={lang.icon}
                        alt={lang.alt}
                        className="inline-block w-6 mr-2 mb-1 fill-gray-200"
                      />

                      <B>{lang.name}</B>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2 lg:w1/3">
              <h4 className="font-semibold text-gray-200/60 py-4">Projects</h4>
              <ul className="mb-4">
                <li className="text-gray-200 leading-6 pb-6">
                  <a
                    href="https://github.com/Boltawy/spicy-tower"
                    target="_blank"
                  >
                    <B>Spicy Tower</B>
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className=" hidden text-gray-200/50 text-[10px] relative bottom-1 pl-1 block"
                    />
                    <p className="text-gray-200/50">
                      a fun platformer game similar to icy tower, made with
                      Kaplay.js.
                    </p>
                  </a>
                </li>
                <li className="text-gray-200 leading-6 pb-6">
                  <a href={null} target="_blank" className="cursor-no-drop">
                    <B>CRUD.jsx</B>
                    <FontAwesomeIcon
                      icon={faWrench}
                      className=" hidden text-gray-200/50 text-[10px] relative bottom-1 pl-1 block"
                    />
                    <p className="text-gray-200/50">
                      a full-stack e-commerce app, built in React and Nest.js.
                    </p>
                  </a>
                </li>

                <li className="text-gray-200 leading-6 pb-6">
                  <a href={null} target="_blank" className="cursor-no-drop">
                    <B>Unfiltered Truth</B>
                    <FontAwesomeIcon
                      icon={faWrench}
                      className=" hidden text-gray-200/50 text-[10px] relative bottom-1 pl-1 block"
                    />
                    <p className="text-gray-200/50">
                      an annonymous messaging app.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!fullMode && (
            <button
              className="text-gray-50 border border-gray-200/50 px-8 py-2 mb-8 block mx-auto  hover:bg-gray-200/10 active:bg-neutral-800 cursor-pointer"
              onClick={() => setFullMode(true)}
            >
              More about me
            </button>
          )}
        </Section>
        <div
          className={
            "animate__animated animate__fadeIn " +
            (fullMode ? "block" : "hidden")
          }
        >
          <Section>
            <SubHeading sectionTag="About">
              Hello world, <NoWrap>it's me</NoWrap>
            </SubHeading>
            <P>
              Coming from a non-CS background, I’ve always been drawn to the
              world of software and computers. What began as curiosity grew into
              a passion for building things and solving problems in code, I made
              the intentional decision to pursue a career in tech.
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
              <B>React Ecosystem</B>, <B>Next.js</B>, <B>Tailwind</B>, And other
              tools.{" "}
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
      </main>
      <footer className="text-gray-200/50 text-center flex flex-col items-center mx-auto pt-12 pb-14 px-4">
        <P className="text-gray-200/50 text-base !pb-4 relative">
          I'm open to job opportunities,{" "}
          <NoWrap>collaborations, or just chatting,</NoWrap>
          <br /> contact me at:{" "}
          <NoWrap>
            <a
              href={"mailto:" + emailAddress}
              className="underline underline-offset-[6px] text-gray-200/70 hover:text-gray-50 pr-1"
            >
              {emailAddress}
            </a>
            <button onClick={handleCopyEmail}>
              {copied ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="hidden relative bottom-1 text-base text-gray-50 block animate_animated animate_fadeIn"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCopy}
                  className="hidden relative bottom-1 text-base hover:text-gray-50 block animate_animated animate_fadeIn"
                />
              )}
            </button>{" "}
          </NoWrap>
        </P>
        <SocialBar />
        <img
          src="/bolt-favicon.svg"
          className="w-16 opacity-50 py-12  "
          alt="boltawy logo"
        />
        <p className="text-gray-200/50 italic text-sm pb-4">
          “Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away.”
        </p>
        <P className="text-gray-200/50 text-sm">
          This portfolio was inspired by {"  "}
          <a
            href="https://paco.me"
            target="_blank"
            className="underline underline-offset-4 whitespace-nowrap hover:text-gray-50"
          >
            Paco Coursey
          </a>
        </P>
      </footer>
    </>
  );
}
