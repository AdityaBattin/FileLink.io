import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { SiPostman } from 'react-icons/si'

const Footer = () => {
  return (
    <>
     <div className='h-fit w-screen flex flex-col justify-center items-center bg-[#040404] border-t border-t-1 pt-5 pb-5'>
        <div className='flex justify-center items-center text-white text-lg'>
          © 2023 filelink.io. All rights reserved.
        </div>
        <div className='md:flex sm:none justify-center items-center text-center text-white text-lg '>
          filelink.io is a file sharing platform that operates as a non-profit organization.
        </div>
        <div className='flex text-2xl text-white justify-center items-center gap-5 mt-5'>
          <a className=" flex items-center  uppercase font-bold leading-snug text-white opacity-75 hover:opacity-100"
                  href="#pablo"> <FaLinkedinIn /> </a>
          <a className="flex items-center uppercase font-bold leading-snug text-white opacity-75 hover:opacity-100"
                  href="#pablo"> <AiFillGithub /> </a>
          <a className=" flex items-center uppercase font-bold leading-snug text-white opacity-75 hover:opacity-100"
                  href="#pablo"> <TbWorldWww /> </a>
          <a className=" flex items-center uppercase font-bold leading-snug text-white opacity-75 hover:opacity-100"
                  href="#pablo"> <AiOutlineYoutube /> </a>
          <a className="flex items-center uppercase font-bold leading-snug text-white opacity-75 hover:opacity-100"
                  href="#pablo"> <SiPostman /> </a>    
        </div>
     </div> 
    </>
  )
}

export default Footer
