"use client";
import Carousal from "./Crousal";

function Brands() {
  return (
    <div className="w-full mt-20 md:mt-28 brands-section ">
      <p className="md:text-3xl text-xl font-bold text-center ">
        Brands that <span className="text-secondary">trust us</span>
      </p>
      <div className="md:mt-10 mt-6 ">
        <div className="w-[95%] mx-auto">
          <Carousal />
        </div>
      </div>
    </div>
  );
}

export default Brands;
