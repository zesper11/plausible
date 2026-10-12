import React from "react";
import heroImage from "../assets/privacy-focused-web-analytics.webp";

const Hero = () => {
  return (
    <>
      <section className="mx-auto flex min-h-[490px] w-5/6 flex-col items-center justify-center px-4 pt-12 text-center sm:pt-16">
        <div className="flex w-full max-w-4xl flex-col items-center gap-5">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#171d2b] sm:text-5xl">
            Easy to use and privacy-friendly{" "}
            <span className="text-[#6050f5]">Google Analytics alternative</span>
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-[#7b8494] sm:text-xl">
            Plausible is powerful, lightweight analytics. No cookies, just
            insights. Made and hosted in the EU, powered by European-owned
            infrastructure. 🇪🇺
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <button className="primary-btn">Start free trial</button>

            <button className="secondary-btn">View live demo</button>
          </div>
        </div>
      </section>
      <div>
        <img
          src={heroImage}
          alt="dashboard screenshot"
          className="w-full hero-screenshot"
        />
      </div>
    </>
  );
};

export default Hero;
