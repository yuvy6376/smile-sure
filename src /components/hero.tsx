import React from 'react';

const Hero = () => {
  return (
    // <div>
    <div className="flex flex-row justify-center items-center relative h-[510px]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 filter-[brightness(0.5)]">
        <video
          className="-translate-y-130"
          autoPlay
          loop
          muted
          src="/videos/hero-vid.mp4"
        ></video>
      </div>

      <div className='flex flex-row gap-[70px]'>
        <div className="flex flex-start text-4xl font-bold w-full text-7xl text-white">
          Exceptional
          <br />
          dental care.
        </div>
        <div className="flex flex-col w-full gap-[40px] text-white">
          <div>
            <p className="text-[16px]">
              Our team is committed to delivering top-quality, compassionate
              treatments in a comfortable environment.
            </p>
          </div>
          <div>
            <button className="text-black px-[30px] py-[20px] rounded-full bg-white hover:bg-blue-600 transition uppercase text-xs">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
