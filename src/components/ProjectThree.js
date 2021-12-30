import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Zoom, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import picture1 from "../assets/project3.png"
import pic1 from "../assets/project3/pic1.png"
import pic2 from "../assets/project3/pic2.png"
import pic3 from "../assets/project3/pic3.png"

SwiperCore.use([EffectCube, Pagination, Zoom, Navigation]);
const ProjectThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Header as="h1" className="titles">
          Best London Parks
        </Header>
        <Divider className="divider" />
        <Header as="h4" className="description">
          Building Best London Parks was my first experience of building a full-stack, MERN
          application as part of a group. After a short amount of discussion, we
          came up with the idea of creating London parks app, a social
          app for users to share and review their favourite parks.
        </Header>
        <Divider className="divider" />
        <Header as="h2" className="description">
          Links:
          <br />
          <br />
          <a
            href="https://github.com/janek2204/Project-3---London-Parks"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>
          <br />
          <a
            href="https://london-parks.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit site London Parks!
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
              <Image size="massive" src={picture1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="massive" src={pic1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="massive" src={pic2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Image size="massive" src={pic3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default ProjectThree;
