import { useEffect, useState } from "react";
import PageLayout from "../../layouts/page";
import { getDataAPI } from "../../../services/axios";
import Loader from "../../../components/utils/Loader";
import Header from "../../../components/CardCharacter/Header";
import Reviews from "../../../components/utils/Details/Reviews";

const MangaReviews = () => {
  const [reviewsManga, setReviewsManga] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI("reviews/manga", `spoiler=true`).then((response) => {
      setReviewsManga(response.data);
      setIsLoader(false);
    });
  }, []);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="mt-4">
        <Header title={"Reviews Manga"} linkHref={""} linkTitle={""} />
      </div>
      <Reviews api={reviewsManga} />
    </PageLayout>
  );
};

export default MangaReviews;
