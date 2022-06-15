import React from "react";

import SearchIcon from "../../assets/icons/search-icons.svg";

const SearchInput = () => {
  const searchSubmitHandler = () => {};

  return (
    <form onSubmit={searchSubmitHandler}>
      <div className="flex flex-row items-center justify-center gap-x-2 rounded-lg bg-sub-background-1 p-2">
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
