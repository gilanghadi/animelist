import { Link } from "react-router-dom";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { humanDate } from "../../../../services/utils";

const Forum = ({ api }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs  uppercase bg-primary shadow-xl text-light">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              All Topic
            </th>
            <th scope="col" className="px-6 py-3">
              Replies
            </th>
            <th scope="col" className="px-6 py-3">
              Last Comment
            </th>
          </tr>
        </thead>
        <tbody className="text-softLight">
          {api.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-3">
                  <Link
                    to={item?.url}
                    target="_blank"
                    className="text-secondary hover:text-accent hover:underline text-md"
                  >
                    {item?.title}
                  </Link>
                  <div className="flex text-xs gap-3">
                    <Link
                      to={item?.author_url}
                      target="_blank"
                      className="text-secondary hover:text-accent hover:underline"
                    >
                      {item?.author_username}
                    </Link>
                    {humanDate(item?.date)}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{item.comments}</td>
              <td className="px-6 py-4 flex flex-col">
                <div className="flex gap-1">
                  By{" "}
                  <Link
                    to={item?.last_comment?.author_url}
                    target="_blank"
                    className="text-secondary hover:text-accent hover:underline"
                  >
                    {item?.last_comment?.author_username}{" "}
                  </Link>
                  <Link
                    to={item?.last_comment?.url}
                    target="_blank"
                    className="text-secondary hover:text-accent hover:underline"
                  >
                    <FaArrowsTurnRight />
                  </Link>
                </div>
                {humanDate(item?.last_comment?.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forum;
