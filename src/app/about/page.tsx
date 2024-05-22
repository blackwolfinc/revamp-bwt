"use client"
import TextToSpeech from "@/TextToSpeech"
import { OpenAnimation } from "@/components/OpenAnimation/OpenAnimation"
const page = () => {
  return (
    <div className="text-red-400">    <OpenAnimation/>
    <TextToSpeech/>
    </div>
  )
}

export default page