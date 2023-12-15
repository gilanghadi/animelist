import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pictures = ({ api }) => {
  return (
    <div className="mx-auto w-full mt-4">
      <div className="grid grid-cols-3 gap-2">
        {api?.map((item, index) => (
          <Link
            key={index}
            download={true}
            to={item.jpg?.image_url}
            target="_blank"
          >
            <img src={item.jpg?.image_url} alt={item.jpg?.image_url} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
