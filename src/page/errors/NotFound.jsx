import { Link, useNavigate } from "react-router-dom";
import ErrorLayout from "../layouts/errors";
import Notfound from "/assets/notfound.png";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const router = useNavigate();
  return (
    <ErrorLayout>
      <div className="flex flex-col gap-y-3 items-center">
        <img src={Notfound} alt={NotFound} width={250} />
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <p className="text-light">This Page Not Found</p>
        <button
          className="bg-secondary hover:bg-accent hover:scale-110 transition-all duration-200 text-light flex items-center px-3 gap-x-2 py-1 rounded"
          onClick={() => router(-1)}
        >
          <FaArrowLeft /> Go back
        </button>
      </div>
    </ErrorLayout>
  );
};

export default NotFound;
