import React from 'react';

const Hero = () => {
  return (
    <section data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-between px-8 py-28 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-1 md:mb-0 ">
        <h1 className="text-4xl font-bold mb-4 text-black">
        Alumni's Network
        </h1>
        <p className="text-lg text-gray-700 mb-6">
        I'm Tarun rawat, crafting minimal and powerful web experiences with a clean design approach. I'm working on connecting alumni with students who need their support.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300" id="services">
          View here
        </button>
      </div>

      {/* Image/GIF Section */}
      <div className="md:w-1/2 flex justify-center"  >
      <img 
  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
  alt="Hero Logo or GIF" 
  className="h-[300px] w-[400px] rounded-xl grayscale hover:grayscale-0 transition duration-300"
/>

      </div>
    </section>
  );
};

export default Hero;
