import React from "react";
import NavBar from "../Nav";
import ExamplePrompts from "../Prompts";
import Ask from "../Ask";
import VoiceTranscriber from "../VoiceRecorder";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <ExamplePrompts />
      <Ask />
    </>
  );
};

export default HomePage;
