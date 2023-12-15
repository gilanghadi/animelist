/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Pagination from "../utils/Pagination";
import { humanDate } from "../../services/utils";

const AnimeTable = ({ api, page, maxPage, setPage, title, type }) => {
  return (
    <div className="font-poppins overflow-x-auto">
      <div className="flex justify-between mb-3">
        <h1 className="text-light text-lg font-semibold">{title}</h1>
        <p className="text-light">Page #{page}</p>
      </div>
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs  uppercase bg-primary shadow-xl text-light">
          <tr>
            <th scope="col" className="md:px-6 px-1 py-3">
              Rank
            </th>
            <th scope="col" className="md:px-6 px-1 py-3">
              Title Anime
            </th>
            <th scope="col" className="md:px-6 px-1 py-3">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="text-softLight">
          {api?.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="md:px-6 px-1 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="md:px-6 px-1 py-4">
                <div className="flex gap-3 font-poppins">
                  <Link to={`/${type}/${item.mal_id}/${item.title}/characters`}>
                    <img
                      src={item.images?.webp?.image_url}
                      alt={item.images?.webp?.image_url}
                      className="rounded-md object-cover w-full h-full md:w-20 md:h-20"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 w-full">
                    <Link
                      to={`/${type}/${item.mal_id}/${item.title}/characters`}
                      className="md:text-lg hover:underline text-secondary"
                    >
                      {item.title}
                    </Link>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-softLight text-sm">
                        {item.type} ({item.episodes} eps)
                      </p>
                      <p className="text-softLight text-sm">
                        {humanDate(item.aired?.from)}
                      </p>
                      <p className="text-softLight text-sm">
                        {item.members} members
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="md:px-6 px-1 py-4">
                <div className="flex items-center gap-x-2">
                  <CiStar className="text-light" size={20} /> {item.score}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  );
};
export default AnimeTable;
