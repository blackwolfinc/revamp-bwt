import React, { useState, useEffect } from "react";
import TalkingImage from "./TalkingImage";

const TextToSpeech = () => {
  const [text, setText] = useState(
    "Welcome to Black Wolf Tech Indonesia, your trusted ally in navigating the digital landscape. As a leading force in technology solutions, we specialize in providing tailored answers to your unique challenges, ensuring you stay at the forefront of innovation.  "
  );
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice]:any = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState("default");

  useEffect(() => {
    const loadVoices = () => {
      const synth = window.speechSynthesis;
      const availableVoices:any = synth.getVoices();
      setVoices(availableVoices);
      const aaronVoice = availableVoices.find(
        (voice:any) => voice.name === "Aaron" && voice.lang === "en-US"
      );
      if (aaronVoice) {
        setSelectedVoice(aaronVoice);
      }
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = (text:any) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch;
      utterance.rate = rate;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      setIsSpeaking(true);
      setCurrentWord("default");

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentWord("default");
      };

      utterance.onend = () => setIsSpeaking(false);

      utterance.onboundary = (event) => {
        if (event.name === "word" || event.name === "sentence") {
          const char = text[event.charIndex].toLowerCase();
          setCurrentWord(char);
          setTimeout(() => {
            const char2 = text[event.charIndex + 1]?.toLowerCase();
            setCurrentWord(char2);
          }, 20);
          setTimeout(() => {
            const char2 = text[event.charIndex + 2]?.toLowerCase();
            setCurrentWord(char2);
          }, 30);
          setTimeout(() => {
            const char2 =
              text[
                event.charIndex + (Math.round(event.charLength / 2) - 1)
              ]?.toLowerCase();
            setCurrentWord(char2);
          }, 40);
          setTimeout(() => {
            const char2 =
              text[
                event.charIndex + Math.round(event.charLength / 2)
              ]?.toLowerCase();
            setCurrentWord(char2);
          }, 50);
          setTimeout(() => {
            const char2 =
              text[
                event.charIndex + (Math.round(event.charLength / 2) + 1)
              ]?.toLowerCase();
            setCurrentWord(char2);
          }, 60);

          setTimeout(() => {
            const char2 = text[event.charIndex - 1]?.toLowerCase();
            setCurrentWord(char2);
          }, 80);

          setTimeout(() => {
            const char2 = text[event.charIndex - 2]?.toLowerCase();
            setCurrentWord(char2);
          }, 90);

          setTimeout(() => {
            const char2 =
              text[event.charIndex + (event.charLength - 1)]?.toLowerCase();
            setCurrentWord(char2);
          }, 100);
        }
      };

      speechSynthesis.speak(utterance);
    } else {
      console.log("Text-to-Speech not supported");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      speak(text)
    }, 6000);
  }, [])
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Text-to-Speech Example</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
     
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="mb-4">
        <label className="block mb-1">
          Pitch:
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e:any) => setPitch(e.target.value)}
            className="w-full mt-1"
          />
        </label>
        <span>{pitch}</span>
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Rate:
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e:any) => setRate(e.target.value)}
            className="w-full mt-1"
          />
        </label>
        <span>{rate}</span>
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Voice:
          <select
            value={selectedVoice ? selectedVoice.name : ""}
            onChange={(e) => {
              const selected = voices.find(
                (voice :any) => voice.name === e.target.value
              );
              setSelectedVoice(selected);
            }}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {voices.map((voice:any) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        onClick={() => speak(text)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Speak
      </button>
      <TalkingImage currentWord={currentWord} />
    </div>
  );
};

export default TextToSpeech;
