import React from "react";

const solutions = [
  {
    icon: "https://framerusercontent.com/images/IcJUnaGk8VeLcwULCEg3wzQlhI.svg",
    title: "In-Office Professional Whitening",
    description:
      "Our whitening treatment combines advanced technology, expert techniques, and quality products to deliver results.",
  },
  {
    icon: "https://framerusercontent.com/images/MPmtH9mXcmlTUsoivBgF7sorYA.svg",
    title: "Take-Home Whitening Kits",
    description:
      "With custom trays and professional-grade gel, you can whiten your smile comfortably at your own pace from home.",
  },
  {
    icon: "https://framerusercontent.com/images/Uad0icXI22m7urNiziHHdiV22ow.svg",
    title: "Stain Removal and Polishing",
    description:
      "Our cleaning and polishing treatments eliminate stains from food, drinks, and smoking, bringing back your teeth's natural shine.",
  },
];

const WhiteSolution = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Subtitle */}
      <p className="text-indigo-600 font-medium uppercase tracking-wide mb-2">
        Achieve a Brighter, Whiter Smile
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        We offer effective teeth whitening solutions.
      </h2>

      {/* Body */}
      <p className="text-gray-600 max-w-2xl mb-12">
        Whether you're looking to enhance your smile for a special occasion or
        simply want to improve your everyday appearance.
      </p>

      {/* Solutions Grid */}
      <div className="grid gap-12 md:grid-cols-3 w-full max-w-6xl mb-12">
        {solutions.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-6">
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/contact-us"
        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
      >
        Make Your Teeth Whiter
      </a>
    </section>
  );
};

export default WhiteSolution;
