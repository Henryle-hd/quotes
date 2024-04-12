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
          .typeString("Python Developer")
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString("Rust")
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString("Javascript ")
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString("Golang")
          .pauseFor(1000)
          .deleteAll()
        typewriter
          .typeString("C/C++")
          .pauseFor(1000)
          .deleteAll()
        typewriter
          .typeString("OpenSource")
          .pauseFor(1000)
          .deleteAll()

        typewriter
          .typeString("MachineLearning")
          .pauseFor(1000)
          .deleteAll()


          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
