import React from "react";

const Card = (props) => {
  return (
    <section
      className={`rounded bg-slate-600 p-3 shadow-sm ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
