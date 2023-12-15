import { useEffect, useState } from "react";
import Characters from "../../../../components/utils/Details/Characters";
import { useParams } from "react-router-dom";
import { getDataAPI } from "../../../../services/axios";
import Loader from "../../../../components/utils/Loader";

const CharactersPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [setLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI(`anime/${id}/characters`).then((response) => {
      setData(response.data);
      setIsLoader(false);
    });
  }, [id]);

  return (
    <>
      {setLoader && <Loader />}
      <Characters api={data} />
    </>
  );
};

export default CharactersPage;
