"use client";
import React from "react";
import Carousel from "better-react-carousel";
import Image from "next/image";
import testimonial from "@/app/constants/testimonial";
import { TestimonialBreakPoints } from "@/app/constants/breakpoints";

function TestimonialCard() {
  return (
    <div className="mt-10 ">
      <Carousel
        loop
        scrollSnap
        cols={4}
        rows={1}
        gap={10}
        mobileBreakpoint={20}
        responsiveLayout={TestimonialBreakPoints}
        scroll-snap={true}
        containerClassName=""
        showDots
        dotColorActive="#1943cc"
      >
        {testimonial.map((item, index) => (
          <Carousel.Item key={index}>
            <div className=" border-2 px-8 py-8 flex flex-col gap-3 testimonial-card">
              <p className=" text-base font-bold testimonial-heading">
                “{item.heading}”
              </p>
              <p className="text-sm testimonial-content">{item.content}</p>
              <div className="flex gap-4  items-center">
                <div>
                  <Image
                    src={item.imgLink}
                    height={50}
                    width={50}
                    alt="testominal image"
                    className="rounded-[50%]"
                  />
                </div>
                <div>
                  <p className=" text-sm font-bold">{item.name}</p>
                  <p className="text-sm testimonial-content">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default TestimonialCard;
