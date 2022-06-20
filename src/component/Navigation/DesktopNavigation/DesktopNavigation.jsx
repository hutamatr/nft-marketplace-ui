import React from "react";

import menuIcons from "../MenuIcons";

import logo from "../../../assets/icons/logo.svg";

const DesktopNavigation = ({ className }) => {
  return (
    <section
      className={`sticky top-0 left-0 min-h-screen min-w-[100px] flex-col gap-y-6 bg-sub-background-1 ${className}`}
    >
      <img src={logo} alt="" className="mx-auto max-w-max pt-6" />
      <span className="border-b-[1px] border-slate-500"></span>
      <ul className="flex w-full flex-col">
        {menuIcons.map((menu) => {
          return (
            <li className="py-4 hover:border-l-4 hover:border-violet-900 hover:bg-slate-600">
              <a href="##" className="">
                <img src={menu.icon} alt="" className="mx-auto" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DesktopNavigation;
