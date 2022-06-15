import React from "react";

const Card = (props) => {
  return (
    <section className={`rounded-lg shadow-sm ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Card;
