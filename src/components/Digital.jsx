
import React from 'react';
import { GiBullseye, GiCyberEye } from "react-icons/gi";
import aboutSide from '../assets/images/about-side.jpg';

const DigitalTransformationSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-16 md:py-32">
      <div className="flex flex-col lg:flex-row justify-center  items-center ">
        {/* Left Section */}
        <div className="lg:w-1/2 px-4 lg:px-8 space-y-6 py-10 about-bg-div">
          <p className="text-sm md:text-lg uppercase font-bold text-primary">Who We Are</p>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            We Help Transform Your Digital Brands
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
          At CybeRefresh, we specialize in guiding businesses through the complex journey of digital transformation. From enhancing your online presence to streamlining your operations, we are your trusted partner in delivering transformative digital solutions.
          </p>
          <div className="w-full lg:hidden  lg:w-[40%] h-[200px] md:h-[400px] lg:h-[600px] flex justify-center items-center mt-6 lg:mt-0">
          <img src={aboutSide} className='w-full h-full object-cover rounded-lg' alt="About Side" />
        </div>

          {/* Mission and Vision Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 border-green-400">
              <GiBullseye size={45} className="text-primary" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="text-gray-500 text-sm md:text-base">
              At CybeRefresh, our mission is to empower businesses by providing innovative digital solutions that drive growth, improve efficiency, and foster long-term success. We are dedicated to aligning technology with your business goals to ensure seamless transformation.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 border-green-400">
              <GiCyberEye size={40} className="text-primary" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
              <p className="text-gray-500 text-sm md:text-base">
              Our vision is to be a global leader in digital transformation, shaping the future by leveraging cutting-edge technologies. We aim to create an ecosystem where businesses thrive in an increasingly digital world, while focusing on sustainability, adaptability, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full hidden  lg:w-[40%] h-[300px] md:h-[400px] lg:h-full 2xl:h-[600px] lg:flex ">
          <img src={aboutSide} className='w-full h-full object-cover rounded-lg' alt="About Side" />
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationSection;

