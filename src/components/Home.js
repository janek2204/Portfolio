import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation, Scrollbar, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import pic1 from "../assets/aboutme/1.png";
import pic2 from "../assets/aboutme/2.png";
import pic3 from "../assets/aboutme/3.png";
import pic4 from "../assets/aboutme/4.png";
import pic5 from "../assets/aboutme/5.png";
import pic6 from "../assets/aboutme/6.png";
import pic7 from "../assets/aboutme/7.png";
import pic8 from "../assets/aboutme/8.png";

SwiperCore.use([EffectCoverflow, Navigation, Scrollbar, Keyboard]);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid>
        <Header className="titles"></Header>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          keyboard={{
            "enabled": true
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 60,
            depth: 900,
            modifier: 3,
            slideShadows: false,
          }}
          style={{
            "--swiper-navigation-color": "red",
          }}
          speed={1000}
          className="mySwiper"
          navigation={true}
          loop={false}
        >
          <SwiperSlide>
            <Image size="massive" centered src={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic7} />
          </SwiperSlide>
          <SwiperSlide>
            <Image size="massive" centered src={pic8} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default Home;
