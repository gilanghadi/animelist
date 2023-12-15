/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "./Header";

const Animelist = ({ title, linkHref, linkTitle, api }) => {
  return (
    <div className="md:w-96 mx-auto">
      <Header title={title} linkHref={linkHref} linkTitle={linkTitle} />
      <ul className="overflow-y-auto h-72 flex flex-col gap-y-3">
        {api.map((item, index) => (
          <li key={index}>
            <div className="flex gap-3">
              <img
                src={item.images?.webp?.image_url}
                alt={item.images?.webp?.image_url}
                className="rounded-md object-cover w-20"
              />
              <div className="flex flex-col gap-y-1 font-poppins pr-2">
                <Link to={`/anime/${item.mal_id}/${item.title}`}>
                  <h4 className="font-semibold capitalize text-secondary text-md hover:underline">
                    {item.title} - {item.year}
                  </h4>
                </Link>
                <p className="text-softLight text-xs mb-1">
                  {item.rating} - {item.episodes} episodes - {item.duration}
                </p>
                <div className="flex gap-2">
                  <span className="text-xs text-light bg-accent w-28 text-center py-1 px-1 rounded">
                    {item.status}
                  </span>
                  <span className="text-xs text-light bg-accent w-16 text-center py-1 px-1 rounded">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Animelist;
