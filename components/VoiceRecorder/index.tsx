// components/VoiceTranscriber.tsx
"use client";
import { useState, useRef } from "react";

const VoiceTranscriber: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  const recognitionRef = useRef<any>(null);

  const initializeRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  };

  const startRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="voice-transcriber">
      <button
        onClick={toggleRecording}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <p className="mt-4">{transcript}</p>
    </div>
  );
};

export default VoiceTranscriber;
