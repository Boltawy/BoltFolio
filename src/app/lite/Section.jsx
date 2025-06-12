import React from "react";
import Line from "./Line.jsx";

export default function Section({ children }) {
  return (
    <>
      <Line />
      <section>{children}</section>
      <Line />
    </>
  );
}
