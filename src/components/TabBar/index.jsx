import { useEffect } from "react";

/* eslint-disable react/prop-types */
const TabBar = ({ tab, setTab, dataTabs }) => {
  const handleType = (type) => {
    setTab(type);
  };

  return (
    <div className="w-full border-b border-softLight text-light mt-4 mb-5 flex gap-4 font-poppins overflow-x-auto">
      {dataTabs?.map((item, index) => (
        <button
          key={index}
          className={`border border-softLight rounded-t px-2 hover:bg-softLight hover:text-secondary transition-all duration-150 uppercase ${
            tab == item ? "bg-softLight text-secondary" : ""
          }`}
          onClick={() => handleType(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
