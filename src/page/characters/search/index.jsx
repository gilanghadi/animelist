import { useEffect, useState } from "react";
import SearchInput from "../../../components/utils/Navbar/SearchInput";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import Loader from "../../../components/utils/Loader";
import CardCharacter from "../../../components/CardCharacter";

const SearchCharacter = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() !== "") {
      setLoader(true);
      getDataAPI("characters", `q=${search}&sort=desc`).then((response) => {
        setData(response);
        setLoader(false);
      });
    } else {
      getDataAPI("characters", `sort=desc`).then((response) => {
        setData(response);
        setLoader(false);
      });
    }
  }, [search]);

  return (
    <PageLayout>
      {loader && <Loader />}
      <SearchInput setSearch={setSearch} search={search} />
      <div className="mt-6">
        {data?.data?.length > 0 ? (
          <CardCharacter api={data?.data} maxPage={""} page={""} setPage={""} />
        ) : (
          <div className="text-center text-light font-bold font-poppins text-xl">
            Searching For <span className="mx-2 text-secondary">{search}</span>{" "}
            Not Found
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SearchCharacter;
