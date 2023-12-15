import { Link } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";
import { CiLink } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center font-poppins p-8">
      <div className="flex justify-between items-center gap-10">
        <div className="flex gap-2 items-center">
          <p className="text-softLight text-sm mr-3">Follow Me</p>
          <Link to={"https://www.instagram.com/gilanghhadi/"} target="_blank">
            <FaInstagram size={30} className="text-light" />
          </Link>
          <Link to={"https://github.com/gilanghadi"} target="_blank">
            <FaGithub size={30} className="text-light" />
          </Link>
          <Link to={"https://gilanghadi.vercel.app/"} target="_blank">
            <CiLink size={30} className="text-light" />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-softLight text-sm mr-3">Reference</p>
          <Link to={"https://myanimelist.net/"} target="_blank">
            <SiMyanimelist size={30} className="text-light" />
          </Link>
        </div>
      </div>
      <h5 className="text-softLight">&copy; 2023. All Rights Reserved.</h5>
    </div>
  );
};

export default Footer;
