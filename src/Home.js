import React from 'react'
import img1 from './myphoto.jpg';
import Typical from 'react-typical'
import Header from './Header';
import { BsArrowDownCircle } from "react-icons/ai";
import { BsPersonCheckFill ,BsFillArrowDownCircleFill
} from "react-icons/bs";

export default function Home() {
    return (
        <div className=' bg-white lg:bg-white flex flex-col lg:flex-row-reverse w-full h-full lg:p-20 py-10 '>

            <div className=' mh bg-black lg:bg-white flex justify-around py-8 mb-5 lg:mb-0 lg:h-full'>

                <Header className='' />
                <img className='rounded-full p-4 w-2/3 lg:w-3/4  lg:p-5 ' src={img1} />
            </div>
            <div className='lg:flex lg:flex-col'><div className='p-3 '>
                <h3 className='flex lg:text-2xl text-black lg:text-black '>I'm<span className=' text-4xl lg:text-5xl font-bold font-mono lg:text-orange-500  text-orange-900'>Bibhas Sahu</span>  </h3>
                <div className='text-1xl px-3 lg:text-2xl font-semibold text-red-800 lg:text-green-400 mt-3'>
                    <Typical
                        steps={['I am a web developer', 2000, 'I am a digital artist', 2000, 'I am a software engineer', 2000]}
                        loop={Infinity}
                        wrapper="i"
                    />
                </div>
            </div>
            <div className='lg:flex lg:flex-col'><p className=' lg:text-black p-2 mt-3 text-black font-serif font-semibold mb-5'>I want to work in the field of my passion,
                and it is my object to get myself associated with a company
                where I can use my skill and gain further experience</p>
            <div className='flex  mt-7 p-4'> <a href='Bibhas_Resume.pdf' download><button type='button' className='flex mr-3 lg:w-full text-white 3/4 bg-orange-700 border border-gray-600  p-3 lg:p-4 rounded-2xl'>Resume <BsFillArrowDownCircleFill

                size='1.5rem' className='mt-1 text-white ml-4' /></button></a>
                <button type='' className=' flex text-orange-600  text-white w-1/3 lg:w-1/5 lg:ml-4 bg-slate-200 border border-orange-600 p-4 rounded-2xl'>Hire me<BsPersonCheckFill size='1.6rem' className=' ml-2 '/></button></div>
            </div>
            </div>
        </div>
    )
}
