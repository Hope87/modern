import React, { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="section-padding sm:py-16 sm:px-8 md:p-16 flex flex-col justify-center items-center bg-footer">
      <div className="w-full text-center mb-12">
        <h2 className="gradient-text font-base font-extrabold text-4xl text-center tracking-wider">
          Do you want to step in to the future before others
        </h2>
      </div>

      <div className="flex justify-center items-center p-4 border border-solid border-white text-center mb-40 sm:mb-20">
        <button type="button" className="font-base text-lg text-white tracking-wider">Request Early Access</button>
      </div>

      <div className="flex justify-between sm:justify-center items-start flex-wrap flex-row w-full text-left">
        <div className="w-[250px] m-4 flex flex-col text-center">
          <Image src="/logo.svg" alt="logo" width={120} height={30} />
          <p className="mt-4 font-base text-xs text-white">
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="w-[250px] m-4 flex justify-start flex-col md:text-center">
          <h4 className="font-base text-sm text-white mb-4">Links</h4>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Overons</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Social Media</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Counters</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Contact</p>
        </div>
        <div className="w-[250px] m-4 flex justify-start flex-col md:text-center">
          <h4 className="font-base text-sm text-white mb-4">Company</h4>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Terms & Conditions </p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Privacy Policy</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Contact</p>
        </div>
        <div className="w-[250px] m-4 flex justify-start flex-col md:text-center">
          <h4 className="font-base text-sm text-white mb-4">Get in touch</h4>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">Crechterwoord K12 182 DK Alknjkcb</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">085-132567</p>
          <p className="font-base text-xs text-white my-2 mx-0 cursor-pointer">info@payme.net</p>
        </div>
      </div>

      <div className="mt-8 text-center w-full">
        <p className="font-base text-xs text-white">@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
