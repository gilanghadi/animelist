import { Link } from "react-router-dom";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center font-poppins">
      <h2 className="text-light font-poppins font-semibold text-sm md:text-lg mb-3">
        {title}
      </h2>
      <Link
        to={linkHref}
        className="text-secondary hover:underline text-sm md:text-lg mb-3"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
