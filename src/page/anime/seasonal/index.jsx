import { useEffect, useState } from "react";
import CardAnime from "../../../components/CardAnime";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import TabBar from "../../../components/TabBar";
import Loader from "../../../components/utils/Loader";

const AnimeSeasonal = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("tv");
  const dataTabs = ["tv", "ova", "ona", "movie", "special"];

  useEffect(() => {
    setIsLoader(true);
    getDataAPI("seasons/now", `filter=${tab}&page=${page}`).then((response) => {
      setTopAnime(response);
      setIsLoader(false);
    });
  }, [page, tab]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <TabBar setTab={setTab} tab={tab} dataTabs={dataTabs} />
      <div className="w-full bg-primary shadow-md rounded-lg flex shadow-softLight justify-center text-light p-2 mb-5 uppercase">
        {tab}
      </div>
      <CardAnime
        api={topAnime?.data}
        maxPage={topAnime.pagination?.last_visible_page}
        page={page}
        setPage={setPage}
      />
    </PageLayout>
  );
};

export default AnimeSeasonal;
