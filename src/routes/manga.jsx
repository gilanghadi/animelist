import { Route } from "react-router-dom";
import MangaTop from "../page/manga/top";
import AnimeSeasonal from "../page/anime/seasonal";
import AnimeRecommendation from "../page/anime/recommendation";
import DetailManga from "../page/manga/detail";
import CharactersPageManga from "../page/manga/detail/characters";
import NewsPageManga from "../page/manga/detail/news";
import ForumPageManga from "../page/manga/detail/forum";
import ReviewPageManga from "../page/manga/detail/reviews";
import RecommendPageManga from "../page/manga/detail/recommendations";
import PicturesPageManga from "../page/manga/detail/pictures";
import StatisticsPageManga from "../page/manga/detail/statistics";
import MoreInfoPageManga from "../page/manga/detail/moreinfo";

const MangaRoutes = () => {
  return (
    <>
      <Route index element={<MangaTop />} />
      <Route path="top" element={<MangaTop />} />
      <Route path="seasonal" element={<AnimeSeasonal />} />
      <Route path="recommendation" element={<AnimeRecommendation />} />
      <Route path=":id/:title" element={<DetailManga />}>
        <Route index element={<CharactersPageManga />} />
        <Route path="characters" element={<CharactersPageManga />} />
        <Route path="news" element={<NewsPageManga />} />
        <Route path="forum" element={<ForumPageManga />} />
        <Route path="reviews" element={<ReviewPageManga />} />
        <Route path="recommendations" element={<RecommendPageManga />} />
        <Route path="pictures" element={<PicturesPageManga />} />
        <Route path="statistics" element={<StatisticsPageManga />} />
        <Route path="moreinfo" element={<MoreInfoPageManga />} />
      </Route>
    </>
  );
};

export { MangaRoutes };
