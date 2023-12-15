import { useEffect, useState } from "react";
import PageLayout from "../../layouts/page";
import { flatMapData, getDataAPI } from "../../../services/axios";
import TabBar from "../../../components/TabBar";
import Loader from "../../../components/utils/Loader";
import CardSlider from "../../../components/CardSlider";
import Header from "../../../components/CardCharacter/Header";

const AnimeRecommendation = () => {
  const [dataAnime, setdataAnime] = useState([]);
  const [dataManga, setdataManga] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoader(true);
    flatMapData("recommendations/anime").then((response) => {
      setdataAnime(response);
      setIsLoader(false);
    });
    flatMapData("recommendations/manga").then((response) => {
      setdataManga(response);
      setIsLoader(false);
    });
  }, []);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="mt-5">
        <Header title={"Recommendations Anime"} linkHref={""} linkTitle={""} />
        <CardSlider api={dataAnime} slider={"slider1"} />
      </div>
      <div className="mt-5">
        <Header title={"Recommendations Manga"} linkHref={""} linkTitle={""} />
        <CardSlider api={dataManga} slider={"slider2"} />
      </div>
    </PageLayout>
  );
};

export default AnimeRecommendation;
