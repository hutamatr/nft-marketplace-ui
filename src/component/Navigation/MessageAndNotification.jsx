import React from "react";

import MessageIcon from "../../assets/icons/chat-icons.svg";
import NotificationIcon from "../../assets/icons/notification-icons.svg";

const MessageAndNotification = () => {
  return (
    <section className="flex min-w-max flex-row items-center justify-center gap-x-2">
      <span className="cursor-pointer rounded-full bg-sub-background-1 p-3">
        <img src={MessageIcon} alt="" className="" />
      </span>
      <span className="cursor-pointer rounded-full bg-sub-background-1 p-3">
        <img src={NotificationIcon} alt="" className="" />
      </span>
    </section>
  );
};

export default MessageAndNotification;
