import React from "react";

const Banner = ({ children, className = "", ...props }) => {
  return (
    <div className={`bg-[#b91c1c] ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Banner;
