import React from "react";

const Card = ({ className, children }) => {
  return (
    <section className={`rounded-lg shadow-sm ${className}`}>
      {children}
    </section>
  );
};

export default Card;
