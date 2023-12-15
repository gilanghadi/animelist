import { Link } from "react-router-dom";
import Header from "../../../CardCharacter/Header";

const Recommendation = ({ api }) => {
  return (
    <div className="mt-4">
      <span className="flex mb-2">
        <Header title={"Recommendation"} linkHref={""} linkTitle={""} />
        <span className="text-secondary">*</span>
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {api?.map((item, index) => (
          <div
            className="font-poppins border flex flex-col justify-start rounded items-center p-4"
            key={index}
          >
            <img
              src={item?.entry?.images?.jpg?.image_url}
              alt={item?.entry?.images?.jpg?.image_url}
              className="rounded-md object-cover w-20"
            />

            <div className="flex flex-col gap-1 mt-3 text-start">
              <Link
                to={item?.url}
                target="_blank"
                className="text-xs hover:underline text-secondary"
              >
                {item?.entry?.title}
              </Link>
              <span className="text-xs text-softLight">
                {item?.votes} votes
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
