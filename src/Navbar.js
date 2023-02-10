import React from 'react'
import { Link } from 'react-router-dom'
import { SiApachesolr } from "react-icons/si";

export default function NavBar() {
  return (
    <div>
      <div className=''>
        <nav className='bg-blue-900 text-white w-full mb-5 top-0 fixed z-10'>
          <ul className='p-2 flex m-1 justify-between'>
            <div className='flex'>
              <li><SiApachesolr className='mt-1 lg:mr-1' /></li>
              <li className='mr-2 font-serif lg:text-2xl'><Link to='/home'>Home</Link></li>
            </div>
            <div className='flex px-3 space-x-3'>

              <li className='mr-3'><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li className='mr-2'><Link to='/certificates'>Certificates</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}
