import React from "react";

const Banner = ({ children, className = "", ...props }) => {
  return (
    <div className={`bg-[#004B3E] ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Banner;
