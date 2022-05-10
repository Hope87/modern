import React, { FC } from "react";

const CTA: FC = () => {
  return (
    <div className="border border-solid border-white text-white flex justify-between items-center flex-row p-8 m-16 rounded-2xl gradient-bar sm:flex-col sm:my-16 sm:mx-8">
      <div>
        <p className="font-base font-medium text-xs text-black">Request Early Access to Get Started</p>
        <h3 className="font-base font-extrabold text-2xl text-black sm:text-lg">Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="flex justify-center items-center ml-8 sm:mt-8 sm:mx-0 mb-0">
        <button type="button" className="bg-black text-white rounded-[40px] font-base font-bold text-lg py-2 px-4 min-w-[150px] sm:text-sm">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
