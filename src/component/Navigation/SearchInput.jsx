import React from "react";

import SearchIcon from "../../assets/icons/search-icons.svg";

const SearchInput = () => {
  const searchSubmitHandler = () => {};

  return (
    <form onSubmit={searchSubmitHandler} className="md:w-full">
      <div className="flex flex-row gap-x-3 overflow-auto rounded-lg bg-sub-background-1 p-3 md:p-4">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-sub-background-1 text-sm text-slate-200 outline-none placeholder:text-white"
        />
      </div>
    </form>
  );
};

export default SearchInput;
