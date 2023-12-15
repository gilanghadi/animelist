import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Navigate = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <ul className="flex gap-x-3 font-poppins">
        <li className="text-secondary">
          <Dropdown
            label="Anime"
            className="bg-primary shadow-lg"
            inline
            arrowIcon={false}
          >
            <Link to={"/anime/search"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Anime Search
              </Dropdown.Item>
            </Link>
            <Link to={"/anime/top"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Top Anime
              </Dropdown.Item>
            </Link>
            <Link to={"/anime/seasonal"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Seasonal Anime
              </Dropdown.Item>
            </Link>
            <Link
              to={"/anime/recommendation"}
              className="text-secondary hover:text-accent text-md"
            >
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Recomedation
              </Dropdown.Item>
            </Link>
          </Dropdown>
        </li>
        <li className="text-secondary">
          <Dropdown
            label="Manga"
            className="bg-primary shadow-lg"
            inline
            arrowIcon={false}
          >
            <Link to={"/manga/search"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Manga Search
              </Dropdown.Item>
            </Link>
            <Link to={"/manga/top"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Top Manga
              </Dropdown.Item>
            </Link>
            <Link to={"/manga/reviews"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Manga Reviews
              </Dropdown.Item>
            </Link>
            <Link
              to={"/manga/recommendation"}
              className="text-secondary hover:text-accent text-md"
            >
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Recomedation
              </Dropdown.Item>
            </Link>
          </Dropdown>
        </li>
        <li className="text-secondary">
          <Dropdown
            label="Characters"
            className="bg-primary shadow-lg"
            inline
            arrowIcon={false}
          >
            <Link to={"/characters/search/char"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Characters Search
              </Dropdown.Item>
            </Link>
            <Link to={"/characters/search/peop"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                People Or Voice Actors Search
              </Dropdown.Item>
            </Link>
            <Link to={"/characters/top"} className="text-md">
              <Dropdown.Item className="hover:bg-softLight duration-200 transition-all text-secondary hover:text-primary">
                Top Characters
              </Dropdown.Item>
            </Link>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
