import React from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCube,
  Keyboard,
  Scrollbar,
  Zoom,
  Navigation,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import picture1 from "../assets/project4.png";
import pic1 from "../assets/project4/pic1.png";
import pic2 from "../assets/project4/pic2.png";
import pic3 from "../assets/project4/pic3.png";

SwiperCore.use([EffectCube, Keyboard, Scrollbar, Zoom, Navigation]);
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
          For this project I had to use Django with PostgreSQL as a back-end
          server and React.js for the front-end. I decided to do this project
          independently. After some thought about what I would like to build, I
          decided to do something I haven’t tried before so I picked an
          e-commerce website.
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
            GitHub repo!
          </a>
          <br />
          <a
            href="https://easyshopp-2692167865b4.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit E@syShopp!
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
