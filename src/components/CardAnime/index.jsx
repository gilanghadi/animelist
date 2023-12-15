/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../utils/Pagination";
import { humanDate } from "../../services/utils";

const CardAnime = ({ api, maxPage, page, setPage }) => {
  const url = useLocation();
  const pathname = url.pathname;
  return (
    <>
      <div className="flex justify-between mb-3">
        {pathname === "/anime/seasonal" && (
          <h1 className="text-light text-lg font-semibold">
            Seasonal Anime Now
          </h1>
        )}
        {pathname === "/anime/seasonal" && (
          <p className="text-light">Page #{page}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        {api?.map((item, index) => (
          <div
            className="border border-softLight font-poppins rounded"
            key={index}
          >
            <div className="flex justify-center items-center border-b border-secondary">
              <Link
                to={`/anime/${item.mal_id}/${item.title}/characters`}
                className="p-3 text-secondary text-md font-semibold hover:underline hover:text-accent"
              >
                {item?.title}
              </Link>
            </div>
            <div className="flex justify-center bg-softLight items-center">
              {/* next develop */}
              {/* <Link className="text-softLight bg-secondary px-1 m-1 rounded-md text-xs hover:opacity-80">
                PV
              </Link> */}
              <span className="text-accent px-2 py-1 text-xs">
                {humanDate(item?.aired?.to)} | {item?.duration}
              </span>
            </div>
            <div className="flex gap-1 justify-center bg-accent items-center p-2 overflow-x-auto">
              {item?.genres.map((genre, index) => (
                <Link
                  to={"/"}
                  key={index}
                  className="bg-light px-1 text-primary rounded-md text-xs hover:text-secondary"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={item.images?.webp?.image_url}
                alt={item.images?.webp?.image_url}
                className=" object-cover w-full h-full"
              />
              <div className="flex flex-col py-2 gap-y-2 overflow-y-auto h-60">
                <p className="text-softLight text-xs">{item?.synopsis}</p>
                <ul className="text-xs">
                  <li>
                    <span className="font-bold text-light mr-1">Studio:</span>
                    {item?.studios?.map((studio, index) => (
                      <Link
                        to={studio?.url}
                        key={index}
                        className="text-secondary hover:underline hover:text-accent"
                      >
                        {studio?.name},
                      </Link>
                    ))}
                  </li>
                  <li>
                    <span className="font-bold text-light mr-1">Source:</span>
                    <span className="text-softLight">{item.source}</span>
                  </li>
                  <li>
                    <span className="font-bold text-light mr-1">Theme:</span>
                    {item?.themes?.map((theme, index) => (
                      <Link
                        to={theme.url}
                        key={index}
                        className="text-secondary hover:underline hover:text-accent"
                      >
                        {theme.name},
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 px-4 py-1 bg-softLight">
              <p className="flex items-center gap-x-2 text-primary text-sm">
                <FaRegStar />
                {item.score}
              </p>
              <p className="flex items-center gap-x-2 text-primary text-sm">
                <FaPeopleGroup />
                {item.members}
              </p>
            </div>
          </div>
        ))}
      </div>
      {pathname === "/anime/seasonal" && (
        <Pagination maxPage={maxPage} page={page} setPage={setPage} />
      )}
    </>
  );
};

export default CardAnime;
