import React from "react";
import Line from "./Line.jsx";

export default function Section({ children }) {
  return (
    <>
      <section>{children}</section>
      <Line />
    </>
  );
}
