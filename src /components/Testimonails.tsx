import React from "react";

const testimonials = [
  {
    title: "Wonderful Experience!",
    text: "I’ve been visiting Dental for years, and I’ve always had a great experience. The staff is friendly, the office is clean and modern, and Dr. Martinez always takes the time to explain my treatment options. I’m so happy with my smile!",
    name: "Lisa Miles",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/BobOk65j6uDzBORMNee0gKRWGk.jpg",
  },
  {
    title: "Highly Recommended!",
    text: "Dr. Wilson and his team made my orthodontic journey smooth and stress-free. The results are incredible, and I feel more confident than ever. I highly recommend Dental for anyone looking for top-notch dental care!",
    name: "Daniel Dalen",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/cPnLmzkyXcZEojXUlOLK54T0yw.jpg",
  },
  {
    title: "Amazing Experience!",
    text: "I was nervous about getting my first root canal, but Dr. Martinez and the whole team were so reassuring, kind, and professional. The procedure was quick, and I felt no pain. I’m grateful for the excellent care I received!",
    name: "Anna Frost",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/G45vgYrNZfse4JlMfG3uP8wg.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-indigo-600 font-medium uppercase tracking-wide">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What our patients say.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#f6f7ff] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >
            {/* Title + Body */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                “{t.title}”
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">{t.text}</p>
            </div>

            {/* Client Info */}
            <div className="mt-6 flex items-center bg-white rounded-full shadow-[0px_4px_34px_rgba(64,65,209,0.1)] px-4 py-2">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
