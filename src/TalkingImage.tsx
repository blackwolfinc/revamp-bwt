import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TalkingImage = ({ currentWord }:any) => {
  const [animationClass, setAnimationClass] = useState('');
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

  useEffect(() => {
    setAnimationClass('animate');
    const timeoutId = setTimeout(() => setAnimationClass(''), 100); // Reset animation class after 200ms
    return () => clearTimeout(timeoutId);
  }, [currentWord]);

  return (
    <div className="flex justify-center mt-4 z-50  relative overflow-hidden mr-[-2rem]">
      <Image
        src={`/assets/img/talk/${mouthMovement}`}
        alt="Talking Mouth"
        height={130}
        width={130}
        quality={1}
        priority
        className={`w-24 h-24 ${animationClass} border-[4px] rounded-3xl `} // Apply animation class
      />
    </div>
  );
};

export default TalkingImage;
