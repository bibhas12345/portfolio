import React from 'react'
import { BsGithub} from "react-icons/bs";
import { FaInstagram, FaFacebook,FaLinkedin} from "react-icons/fa";
import { GrMail} from "react-icons/gr";

export default function Contact() {
    return (
        <div>

            <div className='py-10 mt-10 flex flex-col'>
                <h1 className='text-2xl text-orange-400 font-bold ml-4'>Get In Touch</h1>
                <div className='flex flex-col p-4'>
                    <p>Phone - 6296158014</p>
                    <p>Email - bibhassahu04@gmail.com</p>
                    
                </div>
                <div className='flex justify-around mt-5 '>
                <p><BsGithub size='2rem' className='animate-bounce'/></p>
                <p><FaInstagram size='2rem' className='animate-bounce'/></p>
                <p><FaFacebook size='2rem' className='animate-bounce'/></p>
                <p><FaLinkedin size='2rem' className='animate-bounce'/></p>
                </div>
                <form className='flex p-5 flex-col'>
                    <lebel name='name'>Name</lebel>
                    <input className='border border-gray-400' type="text" name='name' />
                    <lebel name='email'>Email</lebel>
                    <input className='border border-gray-400' type="email" name='email' />
                    <lebel name='textarea'>
                        Any query</lebel>
                    <textarea  className='mt-3 border border-gray-400' name='textarea'></textarea>
                    <button  className='bg-green-400 p-3 mt-4'>Send</button>
                </form>
            </div>
        </div>
    )
}
