import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCube,
  Zoom,
  Navigation,
  Scrollbar,
  Keyboard,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import project2 from "../assets/project2.png";
import pic1 from "../assets/project2/pic1.png";
import pic2 from "../assets/project2/pic2.png";

SwiperCore.use([EffectCube, Zoom, Navigation, Keyboard, Scrollbar]);
const ProjectTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Header as="h1" className="titles">
          BreweryApp
        </Header>
        <Divider className="divider" />
        <Header as="h4" className="description">
          BreweryApp is a beer searching app using BrewDog API. BreweryApp will
          help you to find your favourite BrewDog beer. This was a 2-day
          hackathon project that was pair coded and my first experience of using
          a public API and building the front-end in React.
        </Header>
        <Divider className="divider" />
        <Header as="h2" className="description">
          Links:
          <br />
          <br />
          <a
            href="https://github.com/janek2204/Project-2-Brewery/tree/master/project-2-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo!
          </a>
          <br />
          <a
            href="https://brewerybrewdogapi.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit BreweryApp!
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
          loop={false}
          cubeEffect={{
            shadow: true,
            slideShadows: false,
          }}
          keyboard={{
            "enabled": true
          }}
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="huge" src={project2} />
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

export default ProjectTwo;
