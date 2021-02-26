import CardCourse from "../../components/CardsCourse";
import JumbotronHome from "../../components/JumbotonHome";
import Navbars from "../../components/Navbar";
import Quote from "../../components/Qoute";
import About from "../../components/About";
import Footer from "../../components/Footer";


const CoursePage = () => {
    return ( 
       <>
        <Navbars/>
        <JumbotronHome/>
        <CardCourse/>
        <Quote/>
        <About/>
        <Footer/>
       </>
     );
}
 
export default CoursePage;