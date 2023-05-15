import React from 'react'
import webBuilder from "../../assets/webBuilder.png";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, IconName } from "react-icons/ai";
import Icons from './Icons';

const IntroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:mt-28 ">
      <div className='flex flex-col justify-center items-center md:w-1/2 gap-3'>
        <h1 className='sm:text-4xl text-4xl text-center font-bold font-serif'>Hi,Welcome To My World ! I am <span className='text-blue-600'>Subhransu</span>.</h1>
        <p className='text-3xl text-center font-mono'>A passionate <span className='text-blue-600'>Full Stack Developer</span>.</p>
       <Icons/>

       <button className='font-serif text-3xl bg-blue-600 text-slate-50 px-4 py-2 my-10 rounded-lg font-bold drop-shadow-lg hover:-translate-y-1 hover:shadow-2xl'>Contact me</button>
      </div>
      <div className='flex justify-center items-center md:w-1/2 '>
        <Image src={webBuilder} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default IntroSection;