import React from "react";

const PrimaryBtn = ({ type, id, children, className, onClick }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        onClick={onClick} // Aquí agregamos el manejador del evento onClick
        className={`text-base text-green-400 bg-black font-medium px-3 py-1.5 rounded gap-x-1 hover:bg-[#1E3032] ease-out duration-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
