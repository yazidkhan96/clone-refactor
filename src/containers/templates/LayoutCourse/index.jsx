import About from "../../../components/About"
import Footer from "../../../components/Footer"
import JumbotronHome from "../../../components/JumbotonHome"
import Quote from "../../../components/Qoute"
import Layout from "../Layout"

const LayoutCourse = ({children}) => {
    return ( 
        <div className="layout-course">
           <Layout>
               <JumbotronHome/>
               {children}
               <Quote/>
               <About/>
               <Footer/>
           </Layout>
       </div> 
     );
}
 
export default LayoutCourse;