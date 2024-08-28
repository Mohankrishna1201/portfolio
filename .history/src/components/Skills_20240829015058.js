import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const [hovering, setHovering] = useState(false);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
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
                autoPlay={!hovering}
                autoPlaySpeed={3000}  // Adjust speed as needed
                className="owl-carousel owl-theme skill-slider"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                {/* Carousel items */}
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
