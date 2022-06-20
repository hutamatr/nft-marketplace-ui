import React from "react";

import Ellipse74 from "../../assets/profile-picture.png";
import arrowIcons from "../../assets/icons/arrow-icons.svg";

const ProfilePicture = () => {
  return (
    <div className="min-w-max sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-x-4">
      <img src={Ellipse74} alt="" />
      <span className="hidden whitespace-nowrap font-medium text-white sm:block">
        Marvin McKinney
      </span>
      <div className="hidden cursor-pointer sm:block">
        <img src={arrowIcons} alt="" />
      </div>
    </div>
  );
};

export default ProfilePicture;
