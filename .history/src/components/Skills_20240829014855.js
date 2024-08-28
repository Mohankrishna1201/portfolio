import React from 'react';
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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
                autoPlay={true}
                autoPlaySpeed={3000} // Adjust the speed as needed
                transitionDuration={500} // Duration of transition between slides
                arrows={true} // Display default arrows
                customLeftArrow={<img src={arrow1} alt="left arrow" />}
                customRightArrow={<img src={arrow2} alt="right arrow" />}
                pauseOnHover={true} // Pause auto-play on hover
                containerClass="carousel-container" // Custom class for styling
                itemClass="carousel-item" // Custom class for each item
              >
                <div className="item">
                  <img src={react} alt="React" />
                  <p>React</p>
                </div>
                <div className="item">
                  <img src={javascript} alt="Javascript" />
                  <p>Javascript</p>
                </div>
                <div className="item">
                  <img src={nodejs} alt="NodeJs" />
                  <p>NodeJs</p>
                </div>
                <div className="item">
                  <img src={mongo} alt="MongoDB" />
                  <p>MongoDB</p>
                </div>
                <div className="item">
                  <img src={figma} alt="Figma" />
                  <p>Figma</p>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Tailwind" />
                  <p>Tailwind</p>
                </div>
                <div className="item">
                  <img src={html5} alt="HTML5" />
                  <p>HTML5</p>
                </div>
                <div className="item">
                  <img src={shape} alt="Git" />
                  <p>Git</p>
                </div>
                <div className="item">
                  <img src={github} alt="Github" />
                  <p>Github</p>
                </div>
                <div className="item">
                  <img src={c} alt="C++" />
                  <p>C++</p>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <p>CSS</p>
                </div>
                <div className="item">
                  <img src={ps} alt="Photoshop" />
                  <p>Photoshop</p>
                </div>
                <div className="item">
                  <img src={ai} alt="Illustrator" />
                  <p>Illustrator</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
