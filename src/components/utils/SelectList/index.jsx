/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "../../CardCharacter/Header";
import { IoIosArrowForward } from "react-icons/io";

const SelectList = ({ titleHeader, api }) => {
  return (
    <div className="mt-5 mb-4">
      <div className="mb-4">
        <Header title={titleHeader} linkHref={""} linkTitle={""} />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {api.map((item, index) => (
          <Link
            to={`/genre/${item.mal_id}/${item.name}`}
            className="flex hover:text-secondary border-b mb-2 border-softLight items-center font-poppins pb-1 text-softLight"
            key={index}
          >
            <IoIosArrowForward />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectList;
