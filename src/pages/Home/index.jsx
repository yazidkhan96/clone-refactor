import About from "../../components/About";
import Advantage from "../../components/Advantage";
import Benifits from "../../components/Benifits";
import Course from "../../components/Course";
import Footer from "../../components/Footer";
import JumbotronHome from "../../components/JumbotonHome";
import Navbars from "../../components/Navbar";
import Price from "../../components/Price";
import Quote from "../../components/Qoute";
import HeaderTitleCourse from "../../containers/organism/HeaderCourse";

const Home = () => {
    return (
        <>
        <Navbars/>
        <JumbotronHome/>
        <Advantage/>
        <Benifits/>
        <HeaderTitleCourse head="Mulai bersama daridasar.com" description="Platform belajar yang dapat membantumu belajar apapun dari dasar" textAlign="text-center" styleParagraph="lead" marginTop="mt-5"/>
        <Course/>
        <Course/>
        <Price/>
        <Quote/>
        <About/>
        <Footer/>
        </>
    );
}
 
export default Home;