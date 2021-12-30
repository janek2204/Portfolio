import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Zoom, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import project1 from "../assets/project1.png";
import pic1 from "../assets/project1/pic1.png";
import pic2 from "../assets/project1/pic2.png";

SwiperCore.use([EffectCube, Pagination, Zoom, Navigation]);
const ProjectOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Header as="h1" className="titles">
          Virus Invaders
        </Header>
        <Divider className="divider" />
        <Header as="h4" className="description">
          Space Invaders is a classic arcade game from the 80s. The player aims
          to shoot an invading alien armada before it reaches the planet's
          surface using a mounted gun turret. For theme of the game I choose
          virus attacking lab. This was my first project from General Assembly's
          Software Engineering Immersive course. It was an individual project
          built in 9 days and was the first proper game I had built, and my
          first real-world type practice with vanilla JavaScript and CSS.
        </Header>
        <Divider className="divider" />
        <Header as="h2" className="description">
          Links:
          <br />
          <br />
          <a
            href="https://github.com/janek2204/SEI-Project-1---The-game"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>
          <br />
          <a
            href="https://janek2204.github.io/SEI-Project-1---The-game/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play here!
          </a>
        </Header>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          pagination={true}
          className="mySwiper"
          zoom={true}
          navigation={true}
          loop={true}
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image src={project1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image src={pic1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image src={pic2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default ProjectOne;
