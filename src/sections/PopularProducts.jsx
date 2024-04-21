import React from "react";
import { products } from "../Constant";
import PopulateProductsCard from "../Components/PopulateProductsCard";
export default function PopularProducts() {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-bold  font-palanquin"> Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value k/p
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-14 sm:gap-4">
        {products.map((product)=>{
          return(
            <PopulateProductsCard key={product.name} {...product} />
          )
        })}
      </div>
    </section>
  );
}
