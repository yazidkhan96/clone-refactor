import Home from '../pages/Home/index';
import Course from '../pages/Course/index'
import LoginPage from '../pages/Login';
import SignUp from '../pages/Sign Up';
import CourseUpdate from '../pages/CourseUpdate/CourseUpdate';
import CourseDetail from '../pages/CourseDetail';
import CourseAdd from '../pages/CourseAdd';

const Routes = [
    {
        path:'/',
        label:"Home",
        component: Home
    },
    {
        path:'/course',
        label:"Course",
        component: Course
    },
    {
        path:'/login',
        label:"Login",
        component: LoginPage
    },
    {
        path:'/signup',
        label:"Sign Up",
        component: SignUp
    },
    {
        path: "/course/create",
        label: "Course Create",
        component: CourseAdd,
    },
    {
        path:'/course/:id/update',
        label: "Course Update",
        component:CourseUpdate
    },
    {
        path:'/course/:id',
        label: "Course Detail",
        component:CourseDetail
    },
]
 
export default Routes;
