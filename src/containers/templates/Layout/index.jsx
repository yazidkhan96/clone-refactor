import Navbars from "../../../components/Navbar";
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Navbars />
          {children}  
    </div>
  );
};

export default Layout;
