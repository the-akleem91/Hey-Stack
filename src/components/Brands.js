"use client";
import Carousal from "./Crousal";

function Brands() {
  return (
    <div className="brands-section">
      <div className="w-full mt-20 md:mt-28 container mx-auto">
        <p className="md:text-3xl text-[1.5rem] font-bold text-center ">
          Brands that <span className="text-secondary">trust us</span>
        </p>
        <div className="md:mt-10 mt-6 ">
          <div className="w-[95%] mx-auto">
            <Carousal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
