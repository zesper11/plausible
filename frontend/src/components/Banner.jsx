import React from "react";

const banner = () => {
  return (
    <div className="flex justify-between py-15">
      <div className="flex w-1/2 max-w-3xl">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#171d2b] sm:text-4xl">
          Ready to ditch Google Analytics? <br />
          <span className="text-[#6050f5]">Start your free trial today</span>
        </h1>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button className="primary-btn">Start free trial</button>

        <button className="secondary-btn">View live demo</button>
      </div>
    </div>
  );
};

export default banner;
