import Image from "next/image";
import React from "react";

function Tab() {
  return (
    <div className="w-full flex justify-center mt-10 ">
      <div className="md:w-[70%] w-[85%] relative">
        <div className="w-full tab-box relative z-40 lg:px-10 lg:py-6 px-6 py-6 bg-white flex justify-center flex-col overflow-hidden">
          <h1 className="lg:text-[2.5rem] md:text-4xl text-[1rem] lg:mx-40 my-2">
            Actionable insights for smarter decisions
          </h1>
          <p className="text-sm md:text-xl md:mt-4 text-[0.8rem] mt-2 text-left ">
            Heystack is the most comprehensive analytics solution for
            aggregating and analyzing customer reviews at scale. Heystack
            aggregates millions of customer reviews across Amazon, Walmart,
            Target, and 100’s of other retailer websites in a{" "}
          </p>
          <div className="text-center mt-6">
            <button className="btn px-6 py-1 hover:opacity-80 transition">
              Live Demo
            </button>
            <div className="z-10 absolute right-[-2%] bottom-[-9%]">
              <Image
                src={"/circle.svg"}
                height="100"
                width="100"
                alt="pattern"
              />
            </div>
          </div>
        </div>
        <div className="w-[102%] h-full absolute z-30 top-0 bg-tab-box"></div>
      </div>
    </div>
  );
}

export default Tab;
