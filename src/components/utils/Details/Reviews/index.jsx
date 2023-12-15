/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { humanDate } from "../../../../services/utils";
import { GrScorecard } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Reviews = ({ api }) => {
  return (
    <div className="flex w-full relative justify-center items-center mt-4">
      <div className="w-full whitespace-normal overflow-x-hidden">
        {api.map((item, index) => (
          <div
            className="flex gap-3 mb-3 border-b border-secondary font-poppins pb-3"
            key={index}
          >
            <img
              src={item.user?.images?.jpg?.image_url}
              alt={item.user?.images?.jpg?.image_url}
              className="rounded-md object-cover w-20 h-20"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-between">
                <Link
                  to={item.user?.url}
                  className="text-sm hover:underline text-secondary"
                >
                  {item.user?.username}
                </Link>
                <span className="text-xs text-softLight">
                  {humanDate(item.date)}
                </span>
              </div>
              <div className="flex gap-x-3">
                {item.tags?.map((tag, index) => (
                  <span
                    className="bg-secondary px-2 rounded text-light text-center text-xs"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-light text-sm">{item.review}</p>
              <div className="flex gap-3">
                <span className="flex gap-x-2 text-softLight">
                  <GrScorecard size={20} className="text-light" />
                  {item?.score}
                </span>
                <span className="flex gap-x-2 text-softLight">
                  <FaRegThumbsUp size={20} className="text-accent" />
                  {item.reactions?.nice}
                </span>
                <span className="flex gap-x-2 text-softLight">
                  <FcLike size={20} />
                  {item.reactions?.love_it}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
