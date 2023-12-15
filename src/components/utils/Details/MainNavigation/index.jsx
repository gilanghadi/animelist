/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import Header from "../../../CardCharacter/Header";
import TabLink from "../../../TabLink";

const MainNavigation = ({ api, dataTabs, tab, setTab, types }) => {
  return (
    <div className="md:col-span-2 font-poppins">
      <div className="bg-primary shadow-lg flex rounded-md md:p-3">
        <div className="border-r border-secondary flex flex-col gap-y-1 p-5 justify-center">
          <span className="bg-secondary px-2 rounded text-light text-center text-sm font-semibold">
            SCORE
          </span>
          <h3 className="text-light text-2xl text-center font-bold">
            {api?.score}
          </h3>
          <h5 className="text-softLight text-center text-xs md:text-sm">
            {api?.favorites} users
          </h5>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5 md:p-5">
          <div className="flex flex-row">
            <span className="ml-2 pl-1 md:ml-0 md:px-2 text-xs md:text-xl text-light">
              Ranked #{api?.rank}
            </span>
            <span className="ml-2 pl-1 md:ml-0 md:px-2 text-xs md:text-xl text-light">
              Popularity #{api?.popularity}
            </span>
            <span className="ml-2 pl-1 md:ml-0 md:px-2 text-xs md:text-xl text-light">
              Members {api?.members}
            </span>
          </div>
          <div className="flex flex-row gap-x-2 uppercase">
            <Link className="ml-2 pl-2 border-r border-secondary text-secondary hover:text-accent pr-3 text-sm">
              {api?.season}
            </Link>
            <Link className="ml-2 pl-2 border-r border-secondary text-secondary hover:text-accent pr-3 text-sm">
              {api?.type}
            </Link>
            {api?.producer ? (
              <Link
                to={api?.producers[0]?.url}
                className="ml-2 pl-2 border-r border-secondary text-secondary hover:text-accent pr-3 text-sm"
              >
                {api?.producers[0]?.name}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-primary shadow-lg rounded-md px-4 py-3">
        <span className="flex">
          <Header title={"Synopsis"} linkHref={""} linkTitle={""} />
          <span className="text-secondary">*</span>
        </span>
        <p className="text-softLight">{api.synopsis}</p>
      </div>
      <div className="overflow-x-auto">
        <TabLink dataTabs={dataTabs} tab={tab} setTab={setTab} type={types} />
      </div>
      <Outlet />
    </div>
  );
};

export default MainNavigation;
