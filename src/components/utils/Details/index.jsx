/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MainNavigation from "./MainNavigation";
import SideNavigation from "./SideNavigation";
import TrailerYoutube from "./TrailerYoutube";
import { getDataAPI } from "../../../services/axios";
import Loader from "../Loader";
import { useLocation } from "react-router-dom";

const Detail = ({ api, mal_id, type }) => {
  const { pathname } = useLocation();
  const defaultTab = pathname.split("/")[4];
  const [tab, setTab] = useState(defaultTab);
  const [setLoader, setIsLoader] = useState(false);
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      getDataAPI(`${type}/${mal_id}`).then((response) => {
        setDataAPI(response);
        setIsLoader(false);
      }, 1000);
    });
  }, [mal_id, tab, type]);

  const dataTabs = [
    "characters",
    "news",
    "forum",
    "reviews",
    "recommendations",
    // for next develop
    // "videos",
    "pictures",
    "statistics",
    "moreinfo",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {setLoader && <Loader />}
      <SideNavigation api={api} />
      <MainNavigation
        api={api}
        dataTabs={dataTabs}
        tab={tab}
        setTab={setTab}
        dataAPI={dataAPI}
        types={type}
      />
      {type == "anime" && (
        <TrailerYoutube youtubeID={api.trailer?.youtube_id} />
      )}
    </div>
  );
};

export default Detail;
