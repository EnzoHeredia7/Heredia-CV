import React from "react";

const SecondaryBtn = ({
  type,
  id,
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-white bg-green-600 font-medium px-3 py-1.5 rounded flex items-center border border-green-600 gap-x-1 hover:border-green-400 hover:bg-green-400 ease-out duration-500 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
