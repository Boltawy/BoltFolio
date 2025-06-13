import BlockQuote from "@/app/lite/BlockQuote.jsx";
import P from "@/app/lite/P.jsx";
import Section from "@/app/lite/Section.jsx";
import SectionTag from "@/app/lite/SectionTag.jsx";
import SubHeading from "@/app/lite/SubHeading.jsx";
import React from "react";

export default function MotivationContent() {
  return (
    <Section>
      {/* <SectionTag>Motivation</SectionTag> */}
      <SubHeading sectionTag={"Motivation"}>The joy of building things</SubHeading>
      <P>
        There’s something deeply satisfying about building software, you start
        with an idea, will it be a million-dollar startup or a throwaway
        side-project ? you might never know.
      </P>
      <P>
        You start turning this idea into code, only to be greeted by a swarm of
        bugs and unexpected limitations, From the clunkiness of CSS, The
        quirkiness of JS, to pulling your hair off from trying to integrate tens
        of libraries and make them work together.
      </P>
      <BlockQuote>
        I once tried to start a project with both TypeScript and Redux, i lasted
        three days before being overwhelmed by the sheer complexity.
      </BlockQuote>
      <P>
        But then... something just *<b>Clicks</b>*. The pieces finally fit
        together, the UI works, the logic runs, and suddenly you're staring at
        something you made. That’s what keeps me going in an often difficult and
        competitive field, creating something from nothing, solving problems and
        seeing real results from my effort.
      </P>
    </Section>
  );
}
