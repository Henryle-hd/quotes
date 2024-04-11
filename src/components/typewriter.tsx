"use client";

import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('print("Kalibu Jordan here!")')
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString(":)")
          .pauseFor(1000)
          .deleteAll()

          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
