import Footer from "./MainFooter"
import Navbar from "./MainNavigation"
import Fab from "./Fab"

const Layout = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <Navbar />
      <Fab />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;