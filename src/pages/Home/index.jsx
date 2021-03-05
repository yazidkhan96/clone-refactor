import About from "../../components/About";
import Advantage from "../../components/Advantage";
import Benifits from "../../components/Benifits";
import Course from "../../components/Course";
import Footer from "../../components/Footer";
import JumbotronHome from "../../components/JumbotonHome";
import Price from "../../components/Price";
import Quote from "../../components/Qoute";
import Layout from "../../containers/templates/Layout";
import HeaderTitleCourse from "../../containers/organism/HeaderCourse";

const Home = () => {
    return (
        <>
       <Layout>
       <JumbotronHome/>
        <Advantage/>
        <Benifits/>
        <HeaderTitleCourse head="Mulai bersama daridasar.com" description="Platform belajar yang dapat membantumu belajar apapun dari dasar" textAlign="text-center" styleParagraph="lead" marginTop="mt-5"/>
        <Course/>
        <Price/>
        <Quote/>
        <About/>
        <Footer/>
       </Layout>
        </>
    );
}
 
export default Home;