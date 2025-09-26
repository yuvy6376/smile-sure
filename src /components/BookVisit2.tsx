import React from "react";

const features = [
  "Comprehensive Services",
  "Experienced Professionals",
  "State-of-the-Art Technology",
  "Personalized Treatment Plans",
  "Comfortable Relaxing Environment",
];

const BookVisit2 = () => {
  return (
    <section className="bg-[#f6f7ff] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Column */}
        <div>
          <p className="text-indigo-600 font-medium uppercase mb-6">
            Book a Visit
          </p>
          <div className="flex flex-col gap-3">
            {features.map((item, i) => (
              <button
                key={i}
                className="px-4 py-2 border border-indigo-600 rounded-full text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Column - Doctor Image */}
        <div className="flex justify-center">
          <img
            src="https://framerusercontent.com/images/Tk5H6Gua9njSZMCM2LwGgGGlFu4.jpg"
            alt="Dentist"
            className="rounded-2xl w-[350px] h-[400px] object-cover shadow-md"
          />
        </div>

        {/* Right Column - Content */}
        <div>
          {/* Icon */}
          <img
            src="https://framerusercontent.com/images/91516UD7bQ6A5Eb1kKCG1bFNhbA.svg"
            alt="Call Icon"
            className="w-12 h-12 mb-4"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule your visit with us today!
          </h2>
          <p className="text-gray-600 mb-6">
            Our dedicated team at Dental is here to provide you with expert
            dental care in a comfortable and welcoming environment.
          </p>

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookVisit2;
