import React from "react";

import MessageIcon from "../../assets/chat.svg";
import NotificationIcon from "../../assets/notification.svg";

const MessageAndNotification = () => {
  return (
    <section className="flex flex-row items-center gap-x-2">
      <span className="cursor-pointer rounded-full bg-sub-background-1 p-2">
        <img src={MessageIcon} alt="" className="" />
      </span>
      <span className="cursor-pointer rounded-full bg-sub-background-1 p-2">
        <img src={NotificationIcon} alt="" className="" />
      </span>
    </section>
  );
};

export default MessageAndNotification;
