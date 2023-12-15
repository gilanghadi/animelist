/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { humanDate } from "../../services/utils";

const ArticleAnime = ({ api }) => {
  return (
    <div className="mt-4">
      {api.map((item, index) => (
        <div
          className="flex gap-3 mb-3 border-b border-secondary font-poppins pb-3"
          key={index}
        >
          <img
            src={item?.images?.jpg?.image_url}
            alt={item?.images?.jpg?.image_url}
            className="rounded-md object-cover w-20"
          />

          <div className="flex flex-col gap-3">
            <Link
              to={item?.forum_url}
              className="text-sm hover:underline text-secondary"
            >
              {item?.title}
            </Link>
            <p className="text-light text-xs">
              {item?.excerpt}{" "}
              <Link
                to={item?.forum_url}
                className="text-xs hover:underline text-secondary"
              >
                read more
              </Link>
            </p>
            <span className="text-xs text-softLight">
              {humanDate(item?.date)} by{" "}
              <Link
                to={item?.author_url}
                className="text-xs hover:underline text-secondary"
              >
                {item?.author_username}
              </Link>{" "}
              | {item?.comments} Discusion
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleAnime;
