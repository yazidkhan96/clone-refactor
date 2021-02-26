import Slider from "react-slick";
import CardsCourse from "../../containers/organism/CardCourse";
import Grids from "../../containers/organism/Grid";
import TitleCourse from "../../containers/organism/TitleCourse";
import mountain from '../../assets/img/mountain.jpg'

const Course = () => {
  const dataCard = ([
      {title: 'ini adalah judul',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 1},
      {title: 'ini adalah judul1',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 2},
      {title: 'ini adalah judul',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 3},
      {title: 'ini adalah judul',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 4},
      {title: 'ini adalah judul',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 5},
      {title: 'ini adalah judul',body: 'lampungDev',price: 'Rp300.000,-',foto: 'https://source.unsplash.com/100x100',id: 6}
    ]
  )
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };
    return ( 
        <div>
        <Grids display="d-flex" margin="mt-5" children={<TitleCourse title="Course" description="Read More &rarr;"/>}>
        </Grids>
        <Slider {...settings}>
        {dataCard.map((data) => (
           <CardsCourse key={data.id} title={data.title} body={data.body} price={data.price} picture={mountain}/>
        ))}
        </Slider>
      </div>
     );
}
 
export default Course;