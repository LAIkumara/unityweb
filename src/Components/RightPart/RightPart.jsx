import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function RightPart() {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className=" py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
          placeholder="Search"
        />
        <div className=" absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
    </div>
  );
}
