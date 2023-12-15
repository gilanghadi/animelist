import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../../../services/axios";
import Loader from "../../../../components/utils/Loader";
import Moreinfo from "../../../../components/utils/Details/Moreinfo";

const MoreInfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [setLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`anime/${id}/moreinfo`).then((response) => {
      setData(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <>
      {setLoader && <Loader />}
      <Moreinfo api={data} />
    </>
  );
};

export default MoreInfoPage;
