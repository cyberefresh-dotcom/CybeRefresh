import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#eaeaea]">
     <div className='max-w-screen-xl w-full    bg-white'>
    <div className="divider bg-primary h-1     sm:w-full m-0  "></div>
    <Navbar/>
    <Form/>
    <Footer/>
    </div>
    </div>
  )
}

export default Contact