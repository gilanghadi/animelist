/* eslint-disable react/prop-types */
import Header from "../../../CardCharacter/Header";
import CardSlider from "../../../CardSlider";

const Videos = ({ api }) => {
  return (
    <>
      <div>
        <Header title={"Episodes"} linkHref={""} linkTitle={""} />
        <CardSlider api={api.episodes} />
      </div>
      <div>
        <Header title={"Music Videos"} linkHref={""} linkTitle={""} />
      </div>
    </>
  );
};

export default Videos;
