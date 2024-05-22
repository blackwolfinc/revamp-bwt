import { useEffect, useMemo, useState } from "react";
import OpenAI from "openai";
import TalkingImage from "@/TalkingImage";

const TalkCharacter = (props:any) => {
  const [messages, setMessages]:any = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState("default");
  const [pitch, setPitch] = useState(0.9);
  const [rate, setRate] = useState(0.7);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]);


  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const sendMessage = async (content:any) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: [{ type: "text", text: content }] as any },
        ],
        temperature: 2,
        max_tokens: 30,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error sending message:", error);
      return "Sorry, an error occurred while processing your request.";
    }
  };

  const handleSendMessage = async () => {
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    const userMessage = { role: "user", content: trimmedMessage };
    const botMessage = await sendMessage(trimmedMessage);
    setMessages("")
    setMessages([
      ...messages,
      userMessage,
      { role: "bot", content: botMessage },
    ]);
    speak(botMessage);
    setInputMessage("");
  };

  const speak = (text:any) => {
    setIsSpeaking(true);
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch;
      utterance.rate = rate;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentWord("default");
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentWord("default"); // Set currentWord to "default" when audio playback is finished
        setMessages("")
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
      setIsSpeaking(false);
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
  }, [props.text]); // Ru


  const handleChangeInput = (e:any) => setInputMessage(e.target.value);

  const handleKeyDown = (e:any) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    handleSendMessage();
  }, []);

  return (
    <div className="p-4 relative flex items-center justify-center">
     
        {isSpeaking && messages &&
         <div className="flex bg-black w-[30vw] p-[1rem] text-left flex-col">
        {  messages?.map((message:any, index:any) => (
            <div
              key={index}
              style={{ textAlign: message.role === "user" ? "right" : "left" }}
            >
              {message.role !== "user" ? message.content : ""}
            </div>
          ))}
          </div>
          }
     
      <div>
        <div className="flex items-center space-x-2">
          <TalkingImage currentWord={currentWord} />

         <div className="flex flex-col space-y-2">
         <input
            type="text"
            placeholder="Any question ?"
            value={inputMessage}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            className="text-black px-[1rem] p-[0.5rem]"
          />
          <button className="px-[2rem] py-[0.5rem] bg-slate-500" onClick={handleSendMessage}>Ask</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TalkCharacter;
