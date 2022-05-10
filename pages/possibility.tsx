import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { CTA } from "../components";

const Possibility: NextPage = () => {
  return (
    <>
    <div className="section-padding sm:py-16 sm:px-8 md:p-16 flex flex-row lg:flex-col">
      <div className="flex-1 flex justify-start item-center mr-8 lg: my-4 mx-0">
        <Image
          src="/possibility.png"
          alt="possibility"
          width={450}
          height={450}
        />
      </div>
      <div className="flex-1 flex flex-col justify-end items-start lg:mt-8">
        <h4 className="font-base font-medium text-base text-teal-400">Request Early Access to Get Started</h4>
        <h2 className="gradient-text font-base font-extrabold text-3xl my-4 mx-0">
          The possibilities are <br /> beyond your imagination
        </h2>
        <p className="font-base text-base text-text mb-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="font-base font-medium text-base text-orange-600">Request Early Access to Get Started</h4>
      </div>
    </div>
      <CTA/>
      </>
  );
};

export default Possibility;
