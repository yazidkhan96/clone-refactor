import { Link,NavLink } from "react-router-dom"
import UlNavbar from "../../containers/organism/UlNavbar";
import Button from "../Buttons";
import Photo from "../images";

const Navbars = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                <NavLink to="/" className="text-decoration-none">
                        <Photo source="https://avatars3.githubusercontent.com/u/22560475?s=460&u=e3a75f127d63e2a4bf7005c939fbb77ca7eb673f&v=4" alt="daridsar.com" height="64" width="64"/>
                        <Link to="/" className="navbar-brand fs-6 mx-3">daridasar.com</Link>
                        <Button variant="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </Button>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <UlNavbar/>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbars;