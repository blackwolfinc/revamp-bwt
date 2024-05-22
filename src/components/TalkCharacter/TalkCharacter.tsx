import TalkingImage from "@/TalkingImage";
import { useEffect, useState } from "react";

const TalkCharacter = (props:any) => {
  const [pitch, setPitch] = useState(0.9);
  const [rate, setRate] = useState(0.7);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState("default");

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

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentWord("default"); // Set currentWord to "default" when audio playback is finished

      }
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

  useEffect(() => {
    if (props.text) {
      speak(props.text);
    }
  }, [props.text]); // Run only when props.text changes

  return (
    <div className="p-4 relative">
      <TalkingImage currentWord={currentWord} />
    </div>
  );
};

export default TalkCharacter;
