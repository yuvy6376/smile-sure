import React from 'react';
 
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center relative h-[400px] md:h-[510px] px-4 md:px-8 lg:px-12">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 filter-[brightness(0.5)]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="/videos/hero-vid.mp4"
        ></video>
      </div>
 
      <div className='flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[70px] w-full max-w-7xl mx-auto'>
        <div className="flex flex-col text-center lg:text-left text-3xl md:text-5xl lg:text-7xl w-full text-white">
          Exceptional
          <br />
          dental care.
        </div>
        <div className="flex flex-col w-full gap-6 lg:gap-[40px] text-white text-center lg:text-left">
          <div>
            <p className="text-sm md:text-base lg:text-[16px] leading-relaxed">
              Our team is committed to delivering top-quality, compassionate
              treatments in a comfortable environment.
            </p>
          </div>
          <div>
            <button className="text-black px-6 md:px-8 lg:px-[30px] py-3 md:py-4 lg:py-[20px] rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase text-xs md:text-sm font-medium">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Hero;