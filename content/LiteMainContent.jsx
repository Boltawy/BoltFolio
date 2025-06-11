import Line from "@/app/lite/Line.jsx";
import P from "@/app/lite/P.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import SocialBar from "@/app/lite/SocialBar.jsx";
import BlockQuote from "@/app/lite/BlockQuote.jsx";
export default function LiteMainContent({ setInteractiveMode }) {
  return (
    <main className="font-inter max-w-[510px] sm:max-w-xl  md:max-w-2xl lg:max-w-3xl px-6 mx-auto py-32 text-gray-200 leading-9">
      <h1 className="font-semibold text-4xl text-gray-200/60 pb-2 font-sriracha tracking-wider">
        BoltFolio
      </h1>
      <p className="pb-8 text-gray-200/50">
        This is a <i>simplistic</i> version of my portfolio, for the interactive
        version,{" "}
        <button
          className=" underline underline-offset-4 cursor-pointer hover:text-gray-200"
          onClick={() => setInteractiveMode(true)}
        >
          Click Here
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

      <SubHeading>The Joy of Building Things</SubHeading>
      <P>
        There’s something deeply satisfying about building software, you start
        with an idea, will it be a million-dollar startup or a throwaway
        side-project ? you might never know.
      </P>
      <P>
        You start turning this idea into code, only to be greeted by a swarm of
        bugs and unexpected limitations, From the clunkiness of CSS, The
        quirkiness of JS, to pulling your hair off from trying to integrate tens
        of libraries and make them work together
      </P>
      <BlockQuote>
        I once tried to start a project with both TypeScript and Redux, I've
        lasted three days before surrendering.
      </BlockQuote>
      <P>
        But then... something just *<b>Clicks</b>*. The pieces finally fit
        together, the UI works, the logic runs, and suddenly you're staring at
        something you made. That’s what keeps me going in an often difficult and
        competitive field, creating something from nothing, solving problems and
        seeing real results from my effort.
      </P>
      <Line />
      <P>I am currently learning Backend development in Node.js </P>
      <Line />
      <footer className="text-gray-200/50 text-center">
        This portfolio is <b>heavily</b> {"  "} inspired by {"  "}
        <a
          href="https://paco.me"
          target="_blank"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Paco Coursey
        </a>
        <SocialBar />
      </footer>
    </main>
  );
}
