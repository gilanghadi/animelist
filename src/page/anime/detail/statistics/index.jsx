import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../../../services/axios";
import Loader from "../../../../components/utils/Loader";
import Statistics from "../../../../components/utils/Details/Statistics";

const StatisticsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [setLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`anime/${id}/statistics`).then((response) => {
      setData(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <>
      {setLoader && <Loader />}
      <Statistics api={data} />
    </>
  );
};

export default StatisticsPage;
