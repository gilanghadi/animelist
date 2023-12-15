import { useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import Header from "../../components/CardCharacter/Header";
import { getDataAPI } from "../../services/axios";
import PageLayout from "../layouts/page";
import Loader from "../../components/utils/Loader";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [people, setPeople] = useState([]);
  const [setLoader, setIsLoader] = useState(false);
  const [pageChar, setPageChar] = useState(1);
  const [pagePeop, setPagePeop] = useState(1);

  useEffect(() => {
    setIsLoader(true);
    getDataAPI("top/characters", `page=${pageChar}`).then((response) => {
      setCharacters(response);
    });
    setTimeout(() => {
      getDataAPI("top/people", `page=${pagePeop}`).then((response) => {
        setPeople(response);
        setIsLoader(false);
      });
    }, 1000);
  }, [pageChar, pagePeop]);

  return (
    <PageLayout>
      {setLoader && <Loader />}
      <div className="mt-5">
        <Header title={"Top Characters"} linkHref={""} linkTitle={""} />
      </div>
      <CardCharacter
        api={characters?.data}
        page={pageChar}
        setPage={setPageChar}
        maxPage={characters?.pagination?.last_visible_page}
      />

      <div className="mt-5">
        <Header title={"Top People"} linkHref={""} linkTitle={""} />
      </div>
      <CardCharacter
        api={people?.data}
        page={pagePeop}
        setPage={setPagePeop}
        maxPage={people?.pagination?.last_visible_page}
      />
    </PageLayout>
  );
};

export default Characters;
