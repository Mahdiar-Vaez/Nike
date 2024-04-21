import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

export default function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center  gap-10  max-xl:flex-col-reverse  max-container ">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <div className="flex flex-1 flex-col ">
          <h2 className="lg:max-w-lg mt-10 capitalize font-bold  max-sm:leading-[82px] font-palanquin text-4xl  max-sm:leading-[82px] font-bold ">
            <br />
            <span className="text-coral-red inline-block mt-3"> Special </span>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg py-4 info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg   info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.{" "}
          </p>
          <div className="mt-11 flex flex-wrap gap-4  ">
            {" "}
            <Button label={"Shop Now"} iconUrl={arrowRight} />
            <Button
              label={"Learn More"}
              backgroundColor="bg-white"
              borderColor="border-500-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
