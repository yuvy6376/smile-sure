import React from "react";

const BookVisit = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-gray-50">
      {/* Top Section */}
      <div className="relative w-full max-w-6xl bg-[#4041D1] rounded-3xl px-6 md:px-16 py-16 text-center ">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 600 600"
          >
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <p className="text-sm font-semibold uppercase text-white/80 mb-4 relative">
          Book a Visit
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug relative">
          Come visit us and experience compassionate care.
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto relative">
          Whether it's your first visit or you’re a returning patient, our team
          is here to provide you with personalized care in a relaxed and
          friendly environment.
        </p>

        {/* Floating Form Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4rem] w-[90%] md:w-[80%] bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <p className="text-gray-600 mb-4">
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>
          <form className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="FULL NAME*"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1]"
              required
            />
            <input
              type="email"
              placeholder="EMAIL*"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1]"
              required
            />
            <input
              type="tel"
              placeholder="PHONE NUMBER*"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1]"
              required
            />
            <input
              type="date"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1]"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center px-5 py-3 rounded-xl bg-[#4041D1] hover:bg-[#2f30a8] transition text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookVisit;
