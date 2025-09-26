import React from 'react'

const AboutClinic = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#F9FAFB]">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 py-12 space-y-6">
        
        {/* Section Label */}
        <p className="text-sm font-medium text-[#4041D1] uppercase tracking-wide">
          About Clinic
        </p>

        {/* Main Heading */}
        <h2 className="text-xl md:text-4xl lg:text-2xl font-bold text-[#11081C] leading-snug">
          Dental is a modern practice dedicated to exceptional care in a welcoming environment.
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Our clinic is equipped with the latest technology and staffed by highly trained
          professionals who prioritize your comfort and well-being.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img
              src="https://framerusercontent.com/images/aJApq07b2tRU9SdYq7jc5ldecI.svg"
              alt="Care Icon"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#4041D1]">Patient-Centered Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize the well-being and comfort of our patients, offering personalized
                treatments and a supportive environment to make every visit a positive experience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img
              src="https://framerusercontent.com/images/Uad0icXI22m7urNiziHHdiV22ow.svg"
              alt="Tooth Icon"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#4041D1]">Advanced Treatments</h3>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to providing the highest standard of dental care using advanced
                techniques and state-of-the-art technology, ensuring optimal results for our patients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="/about-us"
          className="inline-block mt-6 px-8 py-3 bg-[#4041D1] hover:bg-[#2f30a8] text-white font-medium rounded-full transition"
        >
          About Our Clinic
        </a>
      </div>

      {/* Right Video */}
      <div className="flex justify-center items-center w-full md:w-1/2 p-6">
        <video
          src="https://framerusercontent.com/assets/QIxj4M3Ku5fa6SWTZWqzNoDt1A.mp4"
          poster="https://framerusercontent.com/images/F8S4eX96Pul5uYP4Yc6E8GH3aM.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default AboutClinic
