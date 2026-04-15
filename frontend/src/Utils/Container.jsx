import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={`h-screen w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:12px ${className} `}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
