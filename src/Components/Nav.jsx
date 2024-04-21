import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constant";
export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:flex hidden">
          <img width={25} height={25} src={hamburger} alt="hamburger" />
          
        </div>

      </nav>
    </header>
  );
}
