"use client"
import TextToSpeech from "@/TextToSpeech"
import { OpenAnimation } from "@/components/OpenAnimation/OpenAnimation"
import CameraComponent from "@/components/camera/CameraComponent"
import Whisper from "@/components/whisper/Whisper"
// import Chatbot from "@/components/chatbot/Chatbot"
const page = () => {
  return (
    <div className="text-red-400">    <OpenAnimation/>
    {/* <TextToSpeech/> */}
    {/* <Chatbot/> */}
    {/* <Whisper/> */}
    <CameraComponent/>
    </div>
  )
}

export default page