import Footer from "../../components/utils/Footer";
import Navbar from "../../components/utils/Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="bg-primary w-full min-h-screen px-4 md:px-6">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
