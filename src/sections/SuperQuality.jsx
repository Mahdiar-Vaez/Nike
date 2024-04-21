import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col w-full max-container "
      id="about-us"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="lg:max-w-lg mt-10 capitalize font-bold   font-palanquin text-4xl   font-bold ">
          We Provide you  
          <br />
          <span className="text-coral-red inline-block mt-3">Super Quality  </span>
             Shoes 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg   info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11"> <Button label={'View Details'}  /></div>
       
      </div>
      <div className="flex-1 flex justify-center items-center first-letter:">
        <img className="object-contain" src={shoe8} alt="shoe8"  width={570} height={522}   />
      </div>
    </section>
  );
}
