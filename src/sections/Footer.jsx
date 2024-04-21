import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constant";
import { copyrightSign } from "../assets/icons";

export default function Footer() {
  return (
    <footer id="contact-us" className="max-container   ">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col flex-wrap  ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="footer logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm ">
            Get shoes ready for the term at your nearest Nike store. Find Your
            perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((e) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={e.src} alt={e.alt} width={24} height={24} />
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((section)=>(
            <div  key={section}>
              <h4 className="text-white leading-none font-medium    font-montserrat text-2xl ">{section.title}</h4>
              <ul>
                {section.links.map((e)=>(
                  <li className="mt-3 text-white-400 font-montserrat leading-normal  text-base hover:text-slate-gray cursor-pointer">
                    <a href={e.link}>{e.name}</a>
                  </li>
                ))}
              </ul>
               </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col  max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
          <img src={copyrightSign} alt="Copy Right" width={20} height={20} className="rounded-full m-0" />
          <p>CopyRight . All rights reserved. made by Mahdiyar Vaez with love</p>
        </div>
        <p className="text-center font-montserrat cursor-pointer mt-10">Terms & Condition </p>
      </div>
    </footer>
  );
}
