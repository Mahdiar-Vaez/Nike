import React from "react";
import Button from "../Components/Button";

export default function Subscribe() {
  return (
    <section className="flex px-16 max-sm:px-8  items-center gap-1 flex-col">
      <h3 className="font-bold text-3xl text-center">
        Sign Up for <span className="text-coral-red ">Updates</span> &
        Newsletter
      </h3>
      <div className="mt-8 relative flex justify-center items-center flex-col-reverse gap-4">
        <div className=" lg:absolute right-[2%] top-[25%]">
          <Button label={"Sign Up"} />
        </div>
        <input className="mt-3 outline-none text-center border rounded-full md:w-[600px]  max-sm:w-[320px] max-sm:h-[50px] h-[65px] border-slate-gray " />
      </div>
    </section>
  );
}
