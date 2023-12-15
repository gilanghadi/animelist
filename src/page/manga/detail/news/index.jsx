import ArticleAnime from "../../../../components/ArticleAnime";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../../../services/axios";
import Loader from "../../../../components/utils/Loader";

const NewsPageManga = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [setLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`manga/${id}/news`).then((response) => {
      setData(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <>
      {setLoader && <Loader />}
      <ArticleAnime api={data} />
    </>
  );
};

export default NewsPageManga;
