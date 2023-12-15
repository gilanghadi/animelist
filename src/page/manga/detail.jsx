import { useParams } from "react-router-dom";
import Header from "../../components/AnimeList/Header";
import Detail from "../../components/utils/Details";
import PageLayout from "../layouts/page";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../services/axios";
import Loader from "../../components/utils/Loader";

const DetailManga = () => {
  let { id } = useParams();
  const [setLoader, setIsLoader] = useState(false);
  const [manga, setManga] = useState([]);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`manga/${id}/full`).then((response) => {
      setManga(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="mt-2">
        <Header
          title={manga.title}
          linkHref={"/manga/top"}
          linkTitle={"Back to Manga"}
        />

        <Detail api={manga} mal_id={id} type="manga" />
      </div>
    </PageLayout>
  );
};

export default DetailManga;
