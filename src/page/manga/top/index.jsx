import { useEffect, useState } from "react";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import TabBar from "../../../components/TabBar";
import Loader from "../../../components/utils/Loader";
import AnimeTable from "../../../components/AnimeTable";

const MangaTop = () => {
  const [topManga, setTopManga] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("manga");
  const dataTabs = [
    "manga",
    "novel",
    "lightnovel",
    "oneshot",
    "doujin",
    "manhwa",
    "manhua",
  ];

  useEffect(() => {
    setIsLoader(true);
    getDataAPI("top/manga", `type=${tab}&page=${page}`).then((response) => {
      setTopManga(response);
      setIsLoader(false);
    });
  }, [page, tab]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <TabBar setTab={setTab} tab={tab} dataTabs={dataTabs} />
      <AnimeTable
        api={topManga?.data}
        page={page}
        setPage={setPage}
        maxPage={topManga?.pagination?.last_visible_page}
        title="Top Manga Series"
        type={"manga"}
      />
    </PageLayout>
  );
};

export default MangaTop;
