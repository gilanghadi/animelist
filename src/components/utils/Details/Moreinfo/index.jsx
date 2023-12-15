/* eslint-disable react/prop-types */
import Header from "../../../CardCharacter/Header";

const Moreinfo = ({ api }) => {
  return (
    <div className="mt-4">
      <span className="flex">
        <Header title={"More Info"} linkHref={""} linkTitle={""} />
        <span className="text-secondary">*</span>
      </span>
      <h4 className="text-softLight">{api?.moreinfo}</h4>
    </div>
  );
};

export default Moreinfo;
