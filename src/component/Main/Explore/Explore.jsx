import React from "react";

const Explore = () => {
  const exploreMenu = [
    "Live Action",
    "Art",
    "Photography",
    "Games",
    "Music",
    "Utility",
  ];
  return (
    <div>
      <h1 className="my-3 text-2xl font-medium text-white">Explore</h1>
      <ul className="flex flex-row items-center gap-x-3 overflow-x-auto">
        {exploreMenu.map((item, index) => {
          return (
            <li className="m-0.5" key={index}>
              <button
                type="button"
                className="cursor-pointer whitespace-nowrap rounded-full bg-sub-background-1 py-3 px-6 text-white hover:bg-slate-600 hover:ring-2 hover:ring-[#7B6FE5] focus:bg-slate-600 focus:ring-2 focus:ring-[#7B6FE5] active:bg-slate-600"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Explore;
