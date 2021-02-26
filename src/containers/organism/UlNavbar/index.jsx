import LiNavbar from "../LiNavbar/LiNavbar"

const UlNavbar = () => {
    return (
    <>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <LiNavbar title="kelas" linkTo="/kelas"/>
            <LiNavbar title="buku"/>
            <LiNavbar title="Blog"/>
        </ul>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <LiNavbar title="Login"/>
            <LiNavbar title="Get Started" styleLink="btn btn-primary rounded-pill text-white"/>
        </ul>
    </>
     );
}
 
export default UlNavbar;