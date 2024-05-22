"use client"
import Image from 'next/image';

const TalkingImage = ({ currentWord }:any) => {
  console.log(currentWord, "currentWord")
  const wordToImageMapping:any = {
    'a': 'a.webp',
    'b': 'b.webp',
    'c': 'c.webp',
    'd': 'd.webp',
    'e': 'e.webp',
    'f': 'f.webp',
    'g': 'g.webp',
    'h': 'h.webp',
    'i': 'i.webp',
    'j': 'j.webp',
    'k': 'k.webp',
    'l': 'l.webp',
    'm': 'm.webp',
    'n': 'n.webp',
    'o': 'o.webp',
    'p': 'p.webp',
    'q': 'q.webp',
    'r': 'r.webp',
    's': 's.webp',
    't': 't.webp',
    'u': 'u.webp',
    'v': 'v.webp',
    'w': 'w.webp',
    'x': 'x.webp',
    'y': 'y.webp',
    'z': 'z.webp',
    'default': 'default.webp'
  };

  const mouthMovement = wordToImageMapping[currentWord] || wordToImageMapping['default'];

 
  return (
    <div className="flex justify-center mt-4 z-50  relative overflow-hidden mr-[-2rem]">
      <Image
        src={`/assets/img/talk/${mouthMovement}`}
        alt="Talking Mouth"
        height={130}
        width={130}
        priority
        className={`w-24 h-24 border-[4px] rounded-3xl `} // Apply animation class
      />
    </div>
  );
};

export default TalkingImage;
