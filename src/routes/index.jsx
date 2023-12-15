import { Routes, Route } from "react-router-dom";
import Dashboard from "../page/dashboard";
import AnimeSeasonal from "../page/anime/seasonal";
import DetailAnime from "../page/anime/detail";
import NotFound from "../page/errors/NotFound";
import AnimeTop from "../page/anime/top";
import CharactersPage from "../page/anime/detail/characters";
import CharactersPageManga from "../page/manga/detail/characters";
import NewsPage from "../page/anime/detail/news";
import NewsPageManga from "../page/manga/detail/news";
import ForumPage from "../page/anime/detail/forum";
import ForumPageManga from "../page/manga/detail/forum";
import ReviewPage from "../page/anime/detail/reviews";
import ReviewPageManga from "../page/manga/detail/reviews";
import RecommendPage from "../page/anime/detail/recommendations";
import RecommendPageManga from "../page/manga/detail/recommendations";
import PicturesPage from "../page/anime/detail/pictures";
import PicturesPageManga from "../page/manga/detail/pictures";
import StatisticsPage from "../page/anime/detail/statistics";
import StatisticsPageManga from "../page/manga/detail/statistics";
import MoreInfoPage from "../page/anime/detail/moreinfo";
import MoreInfoPageManga from "../page/manga/detail/moreinfo";
import AnimeRecommendation from "../page/anime/recommendation";
import MangaTop from "../page/manga/top";
import DetailManga from "../page/manga/detail";
import MangaReviews from "../page/manga/reviews";
import Characters from "../page/characters";
import SearchAnime from "../page/anime/search";
import SearchManga from "../page/manga/search";
import SearchCharacter from "../page/characters/search";
import SearchPeople from "../page/characters/search/people";

const RouteApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}>
        <Route index path="/home" element={<Dashboard />} />
      </Route>

      {/* anime route */}
      <Route path="/anime">
        <Route index element={<AnimeTop />} />
        <Route path="search" element={<SearchAnime />} />
        <Route path="top" element={<AnimeTop />} />
        <Route path="seasonal" element={<AnimeSeasonal />} />
        <Route path="recommendation" element={<AnimeRecommendation />} />
        <Route path=":id/:title" element={<DetailAnime />}>
          <Route index element={<CharactersPage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="reviews" element={<ReviewPage />} />
          <Route path="recommendations" element={<RecommendPage />} />
          <Route path="pictures" element={<PicturesPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="moreinfo" element={<MoreInfoPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* manga route */}
      <Route path="/manga">
        <Route index element={<MangaTop />} />
        <Route path="search" element={<SearchManga />} />
        <Route path="top" element={<MangaTop />} />
        <Route path="reviews" element={<MangaReviews />} />
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
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* route characters */}
      <Route path="/characters">
        <Route index element={<Characters />} />
        <Route path="search/char" element={<SearchCharacter />} />
        <Route path="search/peop" element={<SearchPeople />} />
        <Route path="top" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* route community */}
      {/* next develop */}
      {/* <Route path="/community">
        <Route index element={<Characters />} />
        <Route path="clubs" element={<Characters />} />
        <Route path="users" element={<DetailAnime />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteApp;
