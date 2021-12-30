import React from "react";
import { Container, Segment } from "semantic-ui-react";
import Typical from "react-typical";
import { motion } from "framer-motion/dist/framer-motion";


const Home = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.8 }}
    >
    <Container>
      <Segment textAlign="center" raised inverted>
        <Typical
          steps={[500, "Hello there!", 1000, ""]}
          loop={Infinity}
          wrapper="h1"
        />
        <Segment raised>
          <Typical
            steps={[1000, "Thank you for visiting my site!"]}
            loop={1}
            wrapper="h2"
          />
          <Typical
            steps={[1000, " As you can see, I am still in progress!"]}
            loop={1}
            wrapper="h4"
          />
          <Typical steps={[1000, "Catch you later!"]} loop={1} wrapper="h4" />
          <Typical steps={[1000, "Regards, Piotr!"]} loop={1} wrapper="h4" />
        </Segment>
      </Segment>
    </Container>
    </motion.div>
  );
};

export default Home;
