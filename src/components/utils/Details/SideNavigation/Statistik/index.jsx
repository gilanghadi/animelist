/* eslint-disable react/prop-types */
import Header from "../../../../CardCharacter/Header";

const Statistics = ({ api }) => {
  return (
    <div className="my-2">
      <div className="border-b border-secondary mb-2">
        <Header title={"Statistics"} linkHref={""} linkTitle={""} />
      </div>
      <ul className="font-poppins text-light text-sm">
        <li>
          <span className="mr-1">Score :</span>
          <span className="text-softLight">{api?.score}</span>
        </li>
        <li>
          <span className="mr-1">Ranked :</span>
          <span className="text-softLight">{api?.rank}</span>
        </li>
        <li>
          <span className="mr-1">Popularity :</span>
          <span className="text-softLight">{api?.popularity}</span>
        </li>
        <li>
          <span className="mr-1">Members :</span>
          <span className="text-softLight">{api?.members}</span>
        </li>
        <li>
          <span className="mr-1">Favorites :</span>
          <span className="text-softLight">{api?.favorites}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
