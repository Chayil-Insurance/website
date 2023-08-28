import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
