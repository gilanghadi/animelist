/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "../../../../CardCharacter/Header";

const StreamingPlatform = ({ api }) => {
  return (
    <div className="my-2">
      <div className="border-b border-secondary mb-2">
        <Header title={"Streaming Platform"} linkHref={""} linkTitle={""} />
      </div>
      <ul className="font-poppins text-sm text-light list-disc ml-5">
        {api?.streaming?.map((streaming, index) => (
          <li key={index}>
            <Link
              to={streaming.url}
              target="_blank"
              className="text-secondary hover:text-accent capitalize"
            >
              {streaming.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamingPlatform;
