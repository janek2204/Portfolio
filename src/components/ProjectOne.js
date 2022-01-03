import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCube,
  Scrollbar,
  Zoom,
  Navigation,
  Keyboard,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import project1 from "../assets/project1.png";
import pic1 from "../assets/project1/pic1.png";
import pic2 from "../assets/project1/pic2.png";

SwiperCore.use([EffectCube, Scrollbar, Zoom, Navigation, Keyboard]);
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
          Space Invaders is a classic arcade game from the 80s. The goal of the
          game is for the player to shoot an invading alien armada before it
          reaches the planet's surface using a mounted gun turret. For the theme
          of the game I chose a virus attacking the lab. This was my first
          project from General Assembly's course. It was an individual project
          built in 9 days and was the first proper game I had built as well as my
          first real-world web application with vanilla JavaScript and CSS.
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
            GitHub repo!
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
          scrollbar={{
            hide: true,
          }}
          style={{
            "--swiper-navigation-color": "red",
          }}
          speed={1000}
          effect={"cube"}
          grabCursor={true}
          className="mySwiper"
          zoom={true}
          navigation={true}
          cubeEffect={{
            shadow: true,
            slideShadows: false,
          }}
          loop={false}
          keyboard={{
            enabled: true,
          }}
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="huge" src={project1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="huge" src={pic1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="huge" src={pic2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default ProjectOne;
