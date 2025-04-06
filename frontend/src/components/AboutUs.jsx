import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20" id='about' data-aos="fade-right">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            We are on a mission to bridge the gap between alumni and students. Our platform helps students connect with experienced alumni for mentorship, guidance, and support.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            Whether you're looking to explore career paths or need help with opportunities, we’ve got your back—with clean, minimal, and powerful web experiences.
          </p>
        </div>

        {/* Image / GIF Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" // Replace with your own GIF if needed
            alt="About us animation"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
