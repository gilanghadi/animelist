/* eslint-disable react/prop-types */
import Header from "../../../../CardCharacter/Header";

const AlternativeTitle = ({ api }) => {
  return (
    <div className="my-4">
      <div className="border-b border-secondary mb-2">
        <Header title="Alternative Titles" linkHref={""} linkTitle={""} />
      </div>
      <ul className="font-poppins text-light text-sm">
        <li>
          <span className="mr-1">Synonyms:</span>
          {api?.title_synonyms?.map((synonym, index) => (
            <span key={index} className="text-softLight">
              {synonym},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Japanise:</span>
          <span className="text-softLight">{api?.title_japanese}</span>
        </li>

        <li>
          <span className="mr-1">English:</span>
          <span className="text-softLight">{api?.title_english}</span>
        </li>
      </ul>
    </div>
  );
};

export default AlternativeTitle;
