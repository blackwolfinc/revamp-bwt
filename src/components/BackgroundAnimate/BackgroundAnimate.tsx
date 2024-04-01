import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import Forest from '../../../public/assets/img/Forest.png'
import Forest2 from '../../../public/assets/img/Forest2.png'
import Cloud from '../../../public/assets/img/cloud.webp'

export const BackgroundAnimate = (props :any) => {

  const Animate = useMemo(() => props ? props.Animate : true, [props])

  return (
    <div className='fixed z-[10] w-full bottom-0'>
      {
        Animate ? <>
          <Image alt="" className='opacity-10 z-[0] animation-backgroundone top-[-20rem] lg:!left-[-20rem] animation-background3 invert' src={Cloud} />
          <Image alt="" className='opacity-10 z-[0] animation-backgroundone  lg:!left-[-20rem]  ' src={Forest2} />
          <Image alt="" className='opacity-10 z-[0] animation-backgroundtwo  animation-background2 ' src={Forest} />
          <Image alt="" className='opacity-10 z-[-1] animation-backgroundtwo lg:!left-[-20rem] animation-background  ' src={Forest} />
           </> : 
           <>
           <Image alt="" className='opacity-10 z-[0] animation-backgroundone  top-[-20rem] lg:!left-[-20rem] animation-background3' src={Cloud} />
           <Image alt="" className='opacity-10 z-[0] animation-backgroundone  lg:!left-[-20rem]  ' src={Forest2} />
           <Image alt="" className='opacity-10 z-[0] animation-backgroundtwo  animation-background2' src={Forest} />
           <Image alt="" className='opacity-10 z-[-1] animation-backgroundtwo lg:!left-[-20rem] animation-background  ' src={Forest} />
            </> 
      }
    </div>
  )
}
