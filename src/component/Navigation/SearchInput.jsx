import React from "react";

import SearchIcon from "../../assets/icons/search-icons.svg";

const SearchInput = () => {
  const searchSubmitHandler = () => {};

  return (
    <form onSubmit={searchSubmitHandler} className="block">
      <div className="flex flex-row items-center gap-x-2 rounded-lg bg-sub-background-1 p-2 md:w-52 md:p-3 lg:w-[42.875rem]">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="w-28 bg-sub-background-1 p-1 text-slate-200 outline-none placeholder:text-white"
        />
      </div>
    </form>
  );
};

export default SearchInput;
