import { useEffect, useMemo, useRef, useState } from "react";
import OpenAI from "openai";
import TalkingImage from "@/TalkingImage";

const TalkCharacter = (props: any) => {
  const [messages, setMessages]: any = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState("default");
  const [pitch, setPitch] = useState(0.9);
  const [rate, setRate] = useState(0.7);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [isCamera, setisCamera] = useState(false);

  // camera
  const [stream, setStream]: any = useState(null);
  const [filter, setFilter] = useState("none");
  const videoRef: any = useRef();

  const startCamera = async () => {
    setisCamera(true);
    try {
      const mediaStream: any = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    setisCamera(false);
    if (stream) {
      stream.getTracks().forEach((track: any) => track.stop());
      setStream(null);
    }
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
    if (videoRef.current) {
      videoRef.current.style.filter = event.target.value;
    }
  };

  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const sendMessage = async (content: any) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: [{ type: "text", text: content }] as any },
        ],
        temperature: 1,
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
    setMessages("");
    setMessages([
      ...messages,
      userMessage,
      { role: "bot", content: botMessage },
    ]);
    speak(botMessage);
    setInputMessage("");
  };

  const speak = (text: any) => {
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
        setMessages("");
      };

      utterance.onboundary = (event) => {
        if (event.name === "word" || event.name === "sentence") {
          const char = text[event.charIndex].toLowerCase();
          setCurrentWord(char);
          setTimeout(() => {
            const char2 = text[event.charIndex + 1]?.toLowerCase();
            setCurrentWord(char2);
          }, 20);

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
      const availableVoices: any = synth.getVoices();
      setVoices(availableVoices);
      const aaronVoice = availableVoices.find(
        (voice: any) => voice.name === "Aaron" && voice.lang === "en-US"
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

  const handleChangeInput = (e: any) => setInputMessage(e.target.value);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    handleSendMessage();
  }, []);

  return (
    <div className="p-4 relative flex items-center justify-center">
      {isSpeaking && messages[0] && (
        <div className="flex bg-black w-[30vw] p-[1rem] text-left flex-col  border-[2px] rounded-l-xl mr-[-1rem] shadow-2xl border-[#154031]">
          {messages?.map((message: any, index: any) => (
            <div
              key={index}
              style={{ textAlign: message.role === "user" ? "right" : "left" }}
            >
              {message.role !== "user" ? message.content : ""}
            </div>
          ))}
        </div>
      )}

      <div>
        <div
          className="flex items-center space-x-2 justify-center"
          onMouseLeave={() => {
            setisOpen(false);
          }}
          onMouseEnter={() => {
            setisOpen(true);
          }}
        >
          {!isCamera ? (
            <TalkingImage currentWord={currentWord} />
          ) : (
            <div className="w-[140px] h-[140px]  border-[4px] rounded-3xl   relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-[140px] h-[100px] rounded-3xl"
                style={{ filter: filter }}
              />
              <div className="absolute bottom-[-0.3rem] right-0 m-4">
                <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="bg-white border w-full text-black rounded px-2 py-1"
                >
                  <option value="none">None</option>
                  <option value="grayscale(100%)">Grayscale</option>
                  <option value="sepia(100%)">Sepia</option>
                  <option value="invert(100%)">Invert</option>
                  <option value="hue-rotate(90deg)">Hue Rotate</option>
                  <option value="saturate(200%)">Saturate</option>
                  <option value="contrast(200%)">Contrast</option>
                  <option value="brightness(150%)">Brightness</option>
                  <option value="blur(5px)">Blur</option>
                  {/* Add more filter options as needed */}
                </select>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            {isOpen && (
              <div className="flex flex-col space-y-2 items-center">
                <input
                  type="text"
                  placeholder="Any question ?"
                  value={inputMessage}
                  onChange={handleChangeInput}
                  onKeyDown={handleKeyDown}
                  className="text-black px-[1rem] p-[0.5rem]"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={stream ? stopCamera : startCamera}
                    className={`px-8 w-full py-2 font-bold text-white rounded ${
                      stream
                        ? "bg-red-500 hover:bg-red-700"
                        : "bg-blue-500 hover:bg-blue-700"
                    }`}
                  >
                    {stream ? " Camera" : " Camera"}
                  </button>
                  <button
                    className="px-[2rem] w-full py-[0.5rem] bg-slate-500"
                    onClick={handleSendMessage}
                  >
                    Ask
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkCharacter;
