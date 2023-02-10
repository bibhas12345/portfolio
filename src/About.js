import React,{useEffect} from 'react'
import img2 from './myphoto2.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About() {
    useEffect(() =>{
        Aos.init({duretion:2000})
    },[]);
    return (
        <div>
            <div className=' w-full p-3 py-12'>
                <div className='flex w-full'>
                    <h3 className='text-3xl lg:text-6xl lg:text-orange-600 px-5 mt-10 lg:py-10 lg:mt-10 '>About me</h3>
                </div><hr className='bg-blue-900 mt-2'/>
                <p className='w-full mt-5 ml-2'>A Computer Science under graduate student who is seeking to find the opportunity to work in a fun and challenging working environment
                    that will encourage me to improve and learn new necessary skills as well as be motivated by the company to do my best for the sake of
                    helping myself as well as the company advancement in the software development engineering industry.</p>
            </div>
            <div className='bg-orange-400 p-5 '>
                <h1 className='text-2xl text-slate-700 font-bold font-serif'>Education</h1>
                <div data-aos='fade-right' className=' p-3 m-2 bg-slate-50 shadow-lg shadow-black '><h2>Bachelor of Technology (B.Tech CSE)</h2>
                <h2>Lovely Professional University(8/2020 - present)</h2>
                </div>
                <div data-aos='fade-left' className=' mt-5 p-3 m-2 bg-slate-50 lg:text-black shadow-lg shadow-black'><h2>12th WBCHSE (The West Bengal council Of
Higher Secondary Education)</h2>
                <h2>BANKURA BANGA VIDYALAYA(HS)(8/2020 - present)</h2>
                </div>
                <div data-aos='fade-up' className=' mt-5 p-3 bg-slate-50 m-2 lg:text-black shadow-lg shadow-black'><h2>10th WBBSE (West Bengal Board of
Secondary Education)</h2>
                <h2>Matgoda High school</h2>
                </div>
                

            </div>
            <div className='p-2 ml-3'>
                <h2 className='text-2xl text-amber-900 font-serif font-semibold'>Language</h2>
                <div className='mt-3 flex justify-around'>
                    <div className='bg-lime-50 shadow-lg shadow-gray-500 m-1 p-2'>
                    <p className='text-1xl font-mono text-black'>English</p>
                    <p className='font-thin text-gray-500'>Full Professional Proficiency</p>
                    </div>
                    <div className='bg-lime-50 shadow-lg shadow-gray-500 m-1 p-2'>
                    <p className='text-1xl font-mono text-black'>Hindi</p>
                    <p className='font-thin text-gray-500'>Full Professional Proficiency</p>
                    </div>
                    <div className='bg-lime-50 shadow-lg shadow-gray-500  m-1 p-2'>
                    <p className='text-1xl font-mono text-black '>Bengali</p>
                    <p className='font-thin text-gray-500'>Native or Bilingual Proficiency</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
