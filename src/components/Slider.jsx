import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardItem from "./CardItem";
import './styles/Slider.css'
import { MdArrowOutward } from "react-icons/md";



const Slider = ({ secRef,isMobile }) => {
  const projectsData = [
    {
      cardTitle: "YouTranscribe",
      cardUrl: "https://github.com/SarthSatpute/Translation-and-Transcription",
      cardImg: "/assets/YouTranscribe.jpg",

    },
    {
      cardTitle: "Spoti-py",
      cardUrl: "https://github.com/SarthSatpute/Spotify_Recommendation_System",
      cardImg: "/assets/Spotipu.jpg",

    },
    {
      cardTitle: "Akinator",
      cardUrl: "https://github.com/SarthSatpute/akinator-localised-system",
      cardImg: "/assets/akinator.jpg",

    },
    {
      cardTitle: "Akinua",
      cardUrl: "https://github.com/SarthSatpute/MazeGeneration",
      cardImg: "/assets/akinua.jpg",

    },
    {
      cardTitle: "Portfolio",
      cardUrl: "https://github.com/SarthSatpute/Portfolio",
      cardImg: "/assets/portfolio.jpg",

    },
    {
      cardTitle: "Byte-Benders",
      cardUrl: "https://github.com/tokuieten/Byte-Benders",
      cardImg: "/assets/bytebenders.jpg",

    },
    
  ];

  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (

    <section ref={targetRef} className="slider-container" style={{

      position: "relative", height: "300vh"
    }}>
      <div className="slider" style={{ position: "sticky", top: 0, display: "flex", height: "100vh", overflow: "hidden" }}>


      <a href="https://github.com/SarthSatpute" aria-label="github-profile-link" className="slideritem know gradient-title1 g-yellow">
        See More of My Projects <MdArrowOutward />
      </a>
        <p className="top-status gradient-title1 g-yellow">Previous Works</p>
        <motion.div className="d-flex slideritem gap-3" style={{ x }}>

          {projectsData.map((item, index) => (
            <CardItem key={index} cardTitle={item.cardTitle} cardImg={item.cardImg} cardUrl={item.cardUrl} />
          ))}

        </motion.div>

        <motion.div
          initial={isMobile ? undefined :{ opacity: 0, y: "-100px" }}
          whileInView={isMobile ? undefined :{ opacity: 1, y: "0px" }}
          viewport={isMobile ? undefined :{ margin:"-200px",once: false }}
          transition={{ delay: 0.3 }}
          exit={isMobile ? undefined :{ opacity: 0, y: "400px" }} 
          className="text-slider-bottom" ref={secRef.sectionRef4} id="section4">
          <div className="hero-content w-31 ">
            <p className="hero-text gradient-title1 g-yellow">Includes the recent..</p>
            <h1 className="hero-heading gradient-title1 g-yellow smdesk-slider-heading">
              AI & Web Devlopment projects
            </h1>
          </div>
          <div className="hero-content w-31">
            <p className="hero-text gradient-title1 g-yellow">Also includes the past..</p>
            <h1 className="hero-heading gradient-title1 g-yellow smdesk-slider-heading">
              Innovative Software & Research!
            </h1>
          </div>
        </motion.div>




      </div>



    </section>
  );
};

export default Slider;
