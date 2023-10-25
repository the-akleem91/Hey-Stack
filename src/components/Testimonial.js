import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <div className="md:mt-28 mt-20 testimonial testimonial">
      <div>
        <div className="text-center">
          <p className="text-center md:text-[2.5rem] text-[2rem] px-3 heading">
            Testimonials
          </p>
          <p className="md:text-2xl text-xl">What peoaple say about us</p>
        </div>
        <div className="w-[90%] mx-auto ">
          <TestimonialCard />
        </div>
      </div>
      <div className="bg-[#e5ecff] pt-10 flex justify-center flex-col md:mt-28 mt-20">
        <p className="text-center md:text-[2.5rem] text-[2rem] px-3 heading ">
          How HeyStack Works
        </p>
        <Image
          src="/howwork.svg"
          width={"100"}
          height={"100"}
          alt="work"
          className="w-[100%] mt-4"
        />
      </div>
    </div>
  );
}

export default Testimonial;
