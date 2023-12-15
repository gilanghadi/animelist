/* eslint-disable react/prop-types */
import Header from "../../../../CardCharacter/Header";

const Information = ({ api }) => {
  return (
    <div className="my-3">
      <div className="border-b border-secondary mb-2">
        <Header title={"Information"} linkHref={""} linkTitle={""} />
      </div>
      <ul className="font-poppins text-light text-sm">
        <li>
          <span className="mr-1">Type: </span>
          <span className="text-softLight">{api?.type}</span>
        </li>
        <li>
          <span className="mr-1">Episodes:</span>
          <span className="text-softLight">{api?.episodes}</span>
        </li>
        <li>
          <span className="mr-1">Status:</span>
          <span className="text-softLight">{api?.status}</span>
        </li>
        <li>
          <span className="mr-1">Aired:</span>
          <span className="text-softLight">{api?.aired?.string}</span>
        </li>
        <li>
          <span className="mr-1">Premiered:</span>
          <span className="text-softLight">{api?.season}</span>
        </li>
        <li>
          <span className="mr-1">Brodcast:</span>
          <span className="text-softLight">{api?.broadcast?.string}</span>
        </li>
        <li>
          <span className="mr-1">Producers:</span>
          {api?.producers?.map((producer, index) => (
            <span key={index} className="text-softLight">
              {producer.name},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Licensors:</span>
          {api?.licensors?.map((licensor, index) => (
            <span key={index} className="text-softLight">
              {licensor.name},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Studios:</span>
          {api?.studios?.map((studio, index) => (
            <span key={index} className="text-softLight">
              {studio.name},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Genres:</span>
          {api?.genres?.map((genre, index) => (
            <span key={index} className="text-softLight">
              {genre.name},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Theme:</span>
          {api?.themes?.map((theme, index) => (
            <span key={index} className="text-softLight">
              {theme.name},
            </span>
          ))}
        </li>
        <li>
          <span className="mr-1">Duration:</span>
          <span className="text-softLight">{api?.duration}</span>
        </li>
        <li>
          <span className="mr-1">Rating:</span>
          <span className="text-softLight">{api?.rating}</span>
        </li>
      </ul>
    </div>
  );
};

export default Information;
