import React from 'react';

const HeroBottom = () => {
  const services = [
    { label: 'Preventive Care', href: './services/preventive-care' },
    { label: 'Oral Surgery', href: './services/oral-surgery' },
    {
      label: 'Emergency Care',
      href: './services/emergency-care',
    },
    { label: 'Orthodontics', href: './services/orthodontics' },
    { label: 'Cosmetic Dentistry', href: './services/cosmetic-dentistry' },
    { label: 'Dental Repair', href: './services/dental-repair' },
  ];

  const title = 'Services';
  const copy =
    'We offer a comprehensive range of dental services designed to meet the needs of every patient.';
  const img =
    'https://framerusercontent.com/images/dWARlvTfJvZGsuaCnPbV2hIzCRs.png';

  return (
    <section className="flex flex-row gap-[40px] justify-start items-center">
      <div>
        <section
          aria-labelledby="services-title"
          className="w-full rounded-3xl bg-indigo-50/40 p-6 sm:p-8 md:p-10"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left: headline + pills */}
            <div>
              <h2
                id="services-title"
                className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl"
              >
                We provide expert
                <br className="hidden sm:block" /> dental care tailored
                <br className="hidden sm:block" /> to your needs.
              </h2>

              <nav aria-label="Dental services" className="mt-6 sm:mt-8">
                <ul className="flex flex-wrap gap-3">
                  {services.map((s) => (
                    <li key={s.label}>
                      <a
                        // href={s.href}
                        className={[
                          'inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition border-indigo-300 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-100',
                        ].join(' ')}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right: Why Dental */}
            <div className="md:pl-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Why Dental?
                </h3>

                {/* Avatar group (decorative) */}
                <div
                  className="ml-4 hidden shrink-0 -space-x-2 sm:flex"
                  aria-hidden="true"
                >
                  {[
                    'https://framerusercontent.com/images/zyLihMsmSSdiL5g5jHJn4e6zQ.jpg',
                    'https://framerusercontent.com/images/0YT123QRbremRM1AgxCueBx7IRY.jpg',
                    'https://framerusercontent.com/images/yWUGDZMAYtE216zWWnYBZ0LBoRo.jpg',
                    'https://framerusercontent.com/images/BcSdxaffL9NSUbnZMFbwTXGgdcc.jpg',
                    'https://framerusercontent.com/images/puGp4Hi5DUcsbLLVVYEhrdP1lg.jpg',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you're visiting for a routine check-up or a more
                advanced procedure, we ensure your oral health is in the best
                hands, helping you achieve a confident, healthy smile.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="group relative w-full max-w-[480px] overflow-visible">
        {/* Card */}
        <div className="relative h-[520px] w-full overflow-hidden rounded-[28px] bg-slate-900">
          {/* Photo */}
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {/* Subtle vignette + bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

          {/* Title */}
          <h3 className="absolute left-5 top-5 text-2xl font-semibold text-white drop-shadow-sm">
            {title}
          </h3>

          {/* Body copy */}
          <p className="absolute bottom-24 left-5 right-5 text-white/90">
            {copy}
          </p>

          {/* Floating round arrow button */}
          <button
            type="button"
            // onClick={onClick}
            className="absolute -bottom-6 -right-6 grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="See services"
          >
            {/* Arrow */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h12M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Optional soft outer highlight on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-0 ring-indigo-200/0 transition group-hover:ring-8" />
      </div>
    </section>
  );
};

export default HeroBottom;
