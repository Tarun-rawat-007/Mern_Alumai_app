import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Services = () => {
  const alumniServices = [
    {
      title: 'Alumni Directory',
      description: 'Connect with alumni from various fields.',
      animation: 'https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json',
    },
    {
      title: 'Social Gatherings',
      description: 'Stay in the loop with events and reunions.',
      animation: 'https://assets7.lottiefiles.com/packages/lf20_puciaact.json',

    },
    {
      title: 'Career Guidance',
      description: 'Get guidance and mentorship from alumni.',
      animation: 'https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json',
    },
    {
      title: 'Mentorship Programs',
      description: 'One-on-one mentorship programs available.',
      animation: 'https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json',

    },
    {
      title: 'Job Referrals',
      description: 'Explore job and internship opportunities.',
      animation: 'https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json',
    },
    {
      title: 'Knowledge Sharing',
      description: 'Learn by sharing and Connecting.',
      animation: 'https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center" id="services" data-aos="fade-up-left">
      <h1 className="text-4xl font-bold mb-12 text-center">Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {alumniServices.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border border-gray-700"
          >
            <Player
              autoplay
              loop
              src={service.animation}
              style={{ height: '140px', margin: '0 auto' }}
            />
            <h2 className="text-xl font-semibold mb-2 mt-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
