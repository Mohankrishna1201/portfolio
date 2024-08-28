import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import figma from '../assets/softwares/Figma.png';
import github from '../assets/softwares/Github.png';
import react from '../assets/softwares/React.png';
import javascript from '../assets/softwares/Javascript.png';
import html5 from '../assets/softwares/HTML5.png';
import shape from '../assets/softwares/Shape.png';
import nodejs from '../assets/softwares/Nodejs.png';
import tailwind from '../assets/softwares/TailwindCSS.png';
import mongo from '../assets/softwares/Group 27.png';
import ps from '../assets/softwares/mage_photoshop.png';
import ai from '../assets/softwares/mage_illustrator.png';
import c from '../assets/softwares/Vector-1.png';
import css from '../assets/softwares/Vector.png';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Iam from './Iam';

export const Skills = () => {
  const [hovering, setHovering] = useState(false);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const CustomLeftArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      <img src={arrow1} alt="Left Arrow" />
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <img src={arrow2} alt="Right Arrow" />
    </div>
  );

  return (
    <section className="skill" id="skills">
      <Iam />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My Tech-Stack</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={!hovering}
                autoPlaySpeed={3000} // Adjust speed as needed
                className="owl-carousel owl-theme skill-slider"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {[
                  { src: react, label: 'React' },
                  { src: javascript, label: 'Javascript' },
                  { src: nodejs, label: 'NodeJs' },
                  { src: mongo, label: 'MongoDB' },
                  { src: figma, label: 'Figma' },
                  { src: tailwind, label: 'Tailwind' },
                  { src: html5, label: 'HTML5' },
                  { src: shape, label: 'Git' },
                  { src: github, label: 'Github' },
                  { src: c, label: 'C++' },
                  { src: css, label: 'CSS' },
                  { src: ps, label: 'Photoshop' },
                  { src: ai, label: 'Illustrator' }
                ].map((item, index) => (
                  <div key={index} className="item">
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};


