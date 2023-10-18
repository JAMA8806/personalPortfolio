import Carousel from 'react-bootstrap/Carousel'
import { projectsDataBase } from '../../../services/projectsDataBase';
import Image from "next/image";


function UncontrolledExample() {
    const projDataBase = projectsDataBase;
    return (
    <Carousel>
      <Carousel.Item>
        <Image src={projDataBase[0].Photo}  alt={projDataBase[0].Photo} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={projDataBase[1].Photo} alt={projDataBase[1].Photo} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={projDataBase[2].Photo}  alt={projDataBase[2].Photo} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;