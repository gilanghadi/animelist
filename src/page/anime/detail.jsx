import { useParams } from "react-router-dom";
import Header from "../../components/AnimeList/Header";
import Detail from "../../components/utils/Details";
import PageLayout from "../layouts/page";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../services/axios";
import Loader from "../../components/utils/Loader";

const DetailAnime = () => {
  let { id } = useParams();
  const [setLoader, setIsLoader] = useState(false);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`anime/${id}/full`).then((response) => {
      setAnime(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="mt-2">
        <Header
          title={anime.title}
          linkHref={"/anime/top"}
          linkTitle={"Back to Anime"}
        />

        <Detail api={anime} mal_id={id} type="anime" />
      </div>
    </PageLayout>
  );
};

export default DetailAnime;
