import AboutFeature from "../../containers/organism/AboutFeature";
import AboutHome from "../../containers/organism/AboutHome";
import Grids from "../../containers/organism/Grid";

const About = () => {
    const dataAbout = (
        [
           {
            title: 'SERVICES',
            feature: ['Course','Integration','Book','Blog'],
            id:1  
           },
           {
            title: 'SUPPORT',
            feature: ['Contact','Privacy','Agreement'],
            id:2  
           },
           {
            title: 'SOCIAL',
            feature: ['Facebook','Instagram','Youtube'],
            id:3  
           },
           {
            title: 'SOCIAL',
            feature: ['Facebook','Instagram','Youtube'],
            id:4  
           }
        ]
    )
    return ( 
        <Grids containerType="container-fluid" margin="mt-5">
            <Grids row="row">
                <Grids gridColumns="col-md-6">
                    <AboutHome title="ABOUT" description="daridasar Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolor officia illum consectetur molestias ducimus quam voluptatum minus, soluta ad eos reiciendis consequatur minima. At, vel. Molestiae soluta corrupti facere?"/>
                </Grids>
                <Grids gridColumns="col-md-6" display="d-flex" flexDirection="flex-row" justify="justify-content-around">
                    {dataAbout.map(data => (
                        <AboutFeature key={data.id} title={data.title} feature={data.feature.map(features => {
                            return <div>{features}</div>
                        })}/>
                    ))}
                </Grids>
            </Grids>
        </Grids>
     );
}
 
export default About;