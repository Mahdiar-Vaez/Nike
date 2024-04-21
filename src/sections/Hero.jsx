import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constant";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
export default function Hero() {
  const [bigShoe,setBigShoe]=useState(bigShoe1)
  return (
    <section
      id="home"
      className="xl:flex-row flex-col flex w-full  pt-20
      min-h-screen justify-center gap-10
      max-container 
      "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-2">
        <p className="text-xl font-montserrat ">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 max leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop now"} iconUrl={arrowRight} />
        <div className="flex justify-center gap-16 items-center flex-wrap w-full mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:min-h-screen relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center "> 
        
        <img src={bigShoe} alt="shoe collection" width={610} height={500} className="object-contain z-10 relative" />
          <div>
            <div className="flex sm:gap-6 gap-4 absolute bottom-[3%] max-lg:left-[20%] left-[30%] max-sm:px-6">
              {shoes.map((shoe)=>(
                <div key={shoe}>
                  <ShoeCard bigShoeImage={bigShoe} imgUrl={shoe} ChangeBigShoe={(shoe)=>{setBigShoe(shoe)}}/>
                   </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
