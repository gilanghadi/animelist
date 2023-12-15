import Navigate from "./Navigate";
import { Navbar as NavbarFlowbite } from "flowbite-react";

const Navbar = () => {
  return (
    <NavbarFlowbite>
      <NavbarFlowbite.Brand
        href="/"
        className="text-2xl font-bold font-poppins text-light"
      >
        Animelist<span className="text-secondary">*</span>
      </NavbarFlowbite.Brand>
      <NavbarFlowbite.Toggle className="text-light" />
      <NavbarFlowbite.Collapse className="text-light">
        <Navigate />
      </NavbarFlowbite.Collapse>
    </NavbarFlowbite>
  );
};

export default Navbar;
