import { useEffect, useState } from "react";
import SearchInput from "../../../components/utils/Navbar/SearchInput";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import Loader from "../../../components/utils/Loader";
import TabBar from "../../../components/TabBar";
import { Label, Select } from "flowbite-react";
import CardAnime from "../../../components/CardAnime";

const SearchManga = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [type, seType] = useState("manga");
  const [status, setStatus] = useState("publishing");

  const dataTabs = [
    "manga",
    "novel",
    "lightnovel",
    "oneshot",
    "doujin",
    "manhwa",
    "manhua",
  ];

  useEffect(() => {
    if (search.trim() !== "") {
      setLoader(true);
      getDataAPI("manga", `q=${search}&type=${type}&status=${status}`).then(
        (response) => {
          setData(response);
          setLoader(false);
        }
      );
    } else {
      getDataAPI("manga", `type=${type}&status=${status}`).then((response) => {
        setData(response);
        setLoader(false);
      });
    }
  }, [search, type, status]);

  return (
    <PageLayout>
      {loader && <Loader />}
      <TabBar dataTabs={dataTabs} setTab={seType} tab={type} />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Status" value="Status" className="text-light" />
          </div>
          <Select
            id="Status"
            required
            onChange={(event) => setStatus(event.target.value.toLowerCase())}
          >
            <option value={"publishing"} defaultValue>
              Publishing
            </option>
            <option value={"complete"}>Complete</option>
            <option value={"hiatus"}>Hiatus</option>
            <option value={"discontinued"}>Discontinued</option>
            <option value={"upcoming"}>Upcoming</option>
          </Select>
        </div>
      </div>
      <SearchInput setSearch={setSearch} search={search} />
      <div className="mt-6">
        {data?.data?.length > 0 ? (
          <CardAnime api={data?.data} maxPage={""} page={""} setPage={""} />
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

export default SearchManga;
