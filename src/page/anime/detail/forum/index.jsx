import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../../../services/axios";
import Loader from "../../../../components/utils/Loader";
import Forum from "../../../../components/utils/Details/Forum";

const ForumPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [setLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`anime/${id}/forum`).then((response) => {
      setData(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <>
      {setLoader && <Loader />}
      <Forum api={data} />
    </>
  );
};

export default ForumPage;
