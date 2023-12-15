import { useEffect, useState } from "react";
import AnimeTable from "../../../components/AnimeTable";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import TabBar from "../../../components/TabBar";
import Loader from "../../../components/utils/Loader";

const AnimeTop = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("tv");
  const dataTabs = ["tv", "ova", "ona", "movie", "special"];

  useEffect(() => {
    setIsLoader(true);
    getDataAPI("top/anime", `page=${page}&type=${tab}`).then((response) => {
      setTopAnime(response);
      setIsLoader(false);
    });
  }, [page, tab]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <TabBar setTab={setTab} tab={tab} dataTabs={dataTabs} />
      <AnimeTable
        api={topAnime?.data}
        page={page}
        setPage={setPage}
        maxPage={topAnime?.pagination?.last_visible_page}
        title="Top Anime Series"
        type={"anime"}
      />
    </PageLayout>
  );
};

export default AnimeTop;
