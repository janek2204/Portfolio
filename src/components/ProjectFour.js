import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Zoom, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import picture1 from "../assets/project4.png"
import pic1 from "../assets/project4/pic1.png"
import pic2 from "../assets/project4/pic2.png"
import pic3 from "../assets/project4/pic3.png"

SwiperCore.use([EffectCube, Pagination, Zoom, Navigation]);
const ProjectFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Header as="h1" className="titles">
          E@asyShopp
        </Header>
        <Divider className="divider" />
        <Header as="h4" className="description">
          In the last project I had to use Django with PostgreSQL as a backend
          server and React.js for the frontend. I decided to do this project
          solo. After quick thought about what I would like to build, I decided
          to try my strength with something I haven’t tried before and I go with
          the e-commerce website.
        </Header>
        <Divider className="divider" />
        <Header as="h2" className="description">
          Links:
          <br />
          <br />
          <a
            href="https://github.com/janek2204/Project-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>
          <br />
          <a
            href="https://easyshopp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit E@syShopp!
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
              <Image size="huge" src={picture1} />
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
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="huge" src={pic3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default ProjectFour;
