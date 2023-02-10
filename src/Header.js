import React from 'react'
import { BsGithub} from "react-icons/bs";
import { FaInstagram, FaFacebook,FaLinkedin} from "react-icons/fa";
import { GrMail} from "react-icons/gr";

export default function Header() {
  return (
    <div>
      <div className=' text-white lg:text-black flex flex-col mt-12 p-2 '>
        <button className=''><BsGithub className='h-7 w-8 mb-7'/></button>
        <button className=''><FaFacebook className='h-7 w-8 mb-7'/></button>
        <a href='https://www.linkedin.com/in/bibhas-sahu/'><button className=''><FaLinkedin className='h-7 w-8 mb-7'/></button></a>
        <button className='bg-'><FaInstagram className='h-7 w-8 mb-7'/></button>
        <button className='bg-'><GrMail className='h-7 w-8'/></button>
      </div>
    </div>
  )
}
