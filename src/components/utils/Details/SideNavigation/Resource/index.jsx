/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "../../../../CardCharacter/Header";

const Resource = ({ api }) => {
  return (
    <div className="my-2">
      <div className="border-b border-secondary mb-2">
        <Header title={"Resource"} linkHref={""} linkTitle={""} />
      </div>
      <ul className="font-poppins text-light text-sm list-disc ml-5">
        {api?.external?.map((resource, index) => (
          <li key={index}>
            <Link
              to={resource.url}
              className="text-secondary hover:text-accent capitalize"
              target="_blank"
            >
              {resource.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resource;
