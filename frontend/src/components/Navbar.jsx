import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md" id='home'>
      <div className="max-w-7xl mx-auto px-5 py-2 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Logo */}
<div className="overflow-hidden h-16 w-16 rounded-full" data-aos="fade-left">
  <img
    src="https://github.com/Tarun-rawat-007/Documents/blob/main/profile-pic%20(2).png?raw=true"
    alt="Logo"
    className="h-full w-full object-cover"
  />
</div>



        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-shadow-md text-lg font-medium">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#register" className="hover:text-gray-400">Register</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#search" className="hover:text-gray-400">Alumni Search</a>
          <a href="#contact" className="hover:text-gray-400">Contact Us</a>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-md font-semibold hover:bg-gray-200 transition duration-300">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
