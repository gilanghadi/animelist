import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const TabLink = ({ tab, setTab, dataTabs, type }) => {
  const { id, title } = useParams();
  const handleType = (type) => {
    setTab(type);
  };

  return (
    <div className="w-full border-b border-softLight text-light mt-4 mb-5 flex gap-4 font-poppins">
      {dataTabs?.map((item, index) => (
        <Link
          key={index}
          to={`/${type}/${id}/${title}/${item}`}
          className={`border border-softLight rounded-t px-2 hover:bg-softLight hover:text-secondary transition-all duration-150 uppercase ${
            tab == item ? "bg-softLight text-secondary" : ""
          }`}
          onClick={() => handleType(item)}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default TabLink;
