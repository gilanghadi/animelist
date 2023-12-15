import { Link } from "react-router-dom";
import Header from "../../../CardCharacter/Header";

/* eslint-disable react/prop-types */
const Characters = ({ api }) => {
  return (
    <div className="w-full mt-4">
      <Header title={"Characters & Voice Actor"} linkHref={""} linkTitle={""} />
      {api?.map((item, index) => (
        <div
          className="border border-secondary flex justify-between w-full px-2 py-1 rounded-md mb-3"
          key={index}
        >
          <div className="flex gap-3 py-2">
            <Link to={item?.character?.url} target="_blank">
              <img
                src={item?.character?.images?.webp?.image_url}
                alt={item?.character?.images?.webp?.image_url}
                width={50}
                className="rounded"
              />
            </Link>
            <div className="text-light">
              <Link
                to={item?.character?.url}
                target="_blank"
                className="text-secondary hover:text-accent hover:underline text-sm md:text-md"
              >
                {item?.character?.name}
              </Link>
              <h5 className="text-softLight text-xs">{item?.role}</h5>
            </div>
          </div>
          <div>
            {item?.voice_actors?.map((actor, index) => (
              <div
                className="py-2 flex justify-between items-center gap-x-3"
                key={index}
              >
                <div>
                  <Link
                    to={actor?.person?.url}
                    target="_blank"
                    className="text-secondary hover:text-accent hover:underline text-sm md:text-md"
                  >
                    {actor?.person?.name}
                  </Link>
                  <h5 className="text-softLight text-xs">{actor?.language}</h5>
                </div>
                <Link to={actor?.person?.url} target="_blank">
                  <img
                    src={actor?.person?.images?.jpg?.image_url}
                    alt={actor?.person?.images?.jpg?.image_url}
                    width={50}
                    className="rounded"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
