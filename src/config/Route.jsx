import Home from '../pages/Home/index';
import Course from '../pages/Course/index'

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
    }
]
 
export default Routes;
