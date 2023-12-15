import { useEffect, useState } from "react";
import PageLayout from "../layouts/page";
import Animelist from "../../components/AnimeList";
import CardCharacter from "../../components/CardCharacter";
import CardSlider from "../../components/CardSlider";
import { getDataAPI, flatMapData } from "../../services/axios";
import Header from "../../components/CardCharacter/Header";
import Loader from "../../components/utils/Loader";

const Dashboard = () => {
  const [setLoader, setIsLoader] = useState(false);
  const [topAnime, setTopAnime] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [latestAnime, setLatestAnime] = useState([]);

  const fetchData = () => {
    setIsLoader(true);
    setTimeout(() => {
      getDataAPI("top/characters", "limit=5").then((response) => {
        setTopCharacters(response.data);
      });
    }, 1000);
    setTimeout(() => {
      getDataAPI("top/anime", "limit=15").then((response) => {
        setTopAnime(response.data);
      });
    }, 4000);
    setTimeout(() => {
      flatMapData("recommendations/anime").then((response) => {
        setRecommended(response);
      });
    }, 7000);
    setTimeout(() => {
      getDataAPI("seasons/now").then((response) => {
        setLatestAnime(response.data);
      });
    }, 8000);
    setTimeout(() => {
      getDataAPI("schedules", "limit=15").then((response) => {
        setSchedules(response.data);
        setIsLoader(false);
      });
    }, 10000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="grid md:grid-cols-3 mt-3 gap-4">
        <div className="md:col-span-2">
          <Header
            title={"Most Popular Characters"}
            linkHref={"/characters/top"}
            linkTitle={"view more"}
          />
          <CardCharacter api={topCharacters} />
        </div>
        <div className="md:col-span-1">
          <Animelist
            title={"Top Anime"}
            linkHref={"anime/top"}
            linkTitle={"More"}
            api={topAnime}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
        <div className="md:col-span-2">
          <Header
            title={"Recommended"}
            linkHref={"/anime/recommendation"}
            linkTitle={"view more"}
          />
          <CardSlider slider={"slider1"} api={recommended} />
          <Header
            title={"Latest Update Episodes videos"}
            linkHref={""}
            linkTitle={"view more"}
          />
          <CardSlider slider={"slider2"} api={latestAnime} />
          <Header
            title={"Most Popular Anime Trailers"}
            linkHref={"/anime/seasonal"}
            linkTitle={"view more"}
          />
          <CardSlider slider={"slider2"} api={topAnime} />
        </div>
        <div className="md:col-span-1">
          <Animelist
            title={"Schedules Anime"}
            linkHref={"anime/top"}
            linkTitle={"More"}
            api={schedules}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
