/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Pagination from "../utils/Pagination";

const CardCharacter = ({ api, page, setPage, maxPage }) => {
  const url = useLocation();
  const pathname = url.pathname;
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 border-b border-secondary pb-4">
        {api?.map((item, index) => (
          <Link
            to={item?.url}
            key={index}
            target="_blank"
            className="text-xs text-softLight hover:underline font-poppins"
          >
            <div className="flex flex-col gap-y-2">
              <img
                src={item.images?.jpg?.image_url}
                alt={item.images?.jpg?.image_url}
                className="rounded-md object-cover w-full max-h-72"
              />
              <span className="font-bold">{item.name}</span> (
              {item?.name_kanji ?? item?.given_name})
            </div>
          </Link>
        ))}
      </div>
      {pathname === "/characters/top" && (
        <Pagination page={page} setPage={setPage} maxPage={maxPage} />
      )}
    </>
  );
};

export default CardCharacter;
