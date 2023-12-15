import { Link } from "react-router-dom";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-l from-primary to-secondary p-2 font-poppins mb-3 rounded-l-md">
      <h3 className="font-semibold text-light text-md">{title}</h3>
      <Link
        to={linkHref}
        className="text-secondary hover:text-accent underline text-md"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
