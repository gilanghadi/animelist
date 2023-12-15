import { useEffect, useState } from "react";
import SearchInput from "../../../components/utils/Navbar/SearchInput";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import Loader from "../../../components/utils/Loader";
import CardAnime from "../../../components/CardAnime";
import TabBar from "../../../components/TabBar";
import { Label, Select } from "flowbite-react";

const SearchAnime = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [type, seType] = useState("tv");
  const [status, setStatus] = useState("airing");
  const [rating, setRating] = useState("g");

  const dataTabs = ["tv", "ova", "ona", "movie", "special"];

  useEffect(() => {
    if (search.trim() !== "") {
      setLoader(true);
      getDataAPI(
        "anime",
        `q=${search}&type=${type}&status=${status}&rating=${rating}`
      ).then((response) => {
        setData(response);
        setLoader(false);
      });
    } else {
      getDataAPI(
        "anime",
        `type=${type}&status=${status}&rating=${rating}`
      ).then((response) => {
        setData(response);
        setLoader(false);
      });
    }
  }, [search, type, status, rating]);

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
            <option value={"airing"} defaultValue>
              Airing
            </option>
            <option value={"complete"}>Complete</option>
            <option value={"upcoming"}>Upcoming</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Rating" value="Rating" className="text-light" />
          </div>
          <Select
            id="Rating"
            required
            onChange={(event) => setRating(event.target.value.toLowerCase())}
          >
            <option value={"g"} defaultValue>
              G - All Ages
            </option>
            <option value={"pg"}>PG - Children</option>
            <option value={"pg13"}>PG-13 - Teens 13 or older</option>
            <option value={"r17"}>R - 17+ (violence & profanity)</option>
            <option value={"r"}>R+ - Mild Nudity</option>
            <option value={"rx"}>Rx - Hentai</option>
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

export default SearchAnime;
