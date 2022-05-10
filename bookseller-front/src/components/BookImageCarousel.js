import Carousel from 'react-bootstrap/Carousel';

import stolenRussianTank1 from '../images/stolen-russian-tank-1.jpg';
import stolenRussianTank2 from '../images/stolen-russian-tank-2.webp';
import stolenRussianTank3 from '../images/stolen-russian-tank-3.jpg';

export default function BookImageCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src={stolenRussianTank1}
            className='d-block w-100'
            alt='1st slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={stolenRussianTank2}
            className='d-block w-100'
            alt='2nd slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={stolenRussianTank3}
            className='d-block w-100'
            alt='3rd slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}