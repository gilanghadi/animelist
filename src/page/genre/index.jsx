import { useEffect, useState } from "react";
import SelectList from "../../components/utils/SelectList";
import PageLayout from "../layouts/page";
import { getDataAPI } from "../../services/axios";

const Genre = () => {
  const [genreAnime, setGenreAnime] = useState([]);
  const [genreManga, setGenreManga] = useState([]);

  useEffect(() => {
    getDataAPI("genres/anime").then((response) => {
      setGenreAnime(response.data);
    });
    setTimeout(() => {
      getDataAPI("genres/manga").then((response) => {
        setGenreManga(response.data);
      });
    }, 2000);
  }, []);

  return (
    <PageLayout>
      <SelectList titleHeader={"Genre Anime"} api={genreAnime} />
      <SelectList titleHeader={"Genre Manga"} api={genreManga} />
    </PageLayout>
  );
};

export default Genre;
