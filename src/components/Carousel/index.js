import Slider from 'react-slick';
import './carousel.css';

function Carousel({children}) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        adptiveHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default Carousel;