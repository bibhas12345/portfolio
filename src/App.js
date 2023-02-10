import React from 'react'
// import Typical from 'react-typical'
// import {toast,ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Navbar';
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Certificates from './Certificates';



export default function App() {
  // const notify=()=>{
  //   toast.success("send successfully");
  // }
  return (
    <div className=''>
      {/* <div className='text-3xl text-lime-400'>
      <Typical
        steps={['Hellotthtfhtf', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
    <button onClick={notify}>Notify</button>
    <ToastContainer>

    </ToastContainer> */}

    <Navbar/>

     <Routes>
       <Route element={<About/>} path="/about"/>
       <Route element={<Contact/>} path="/contact"/>
       <Route element={<Home/>} path="/home"/>
       <Route element={<Certificates/>} path="/certificates"/>
      
     </Routes>
    
    
    </div>
    
  )
}
