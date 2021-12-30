import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Header as="h1" className="titles">
          My recent coding experience!
        </Header>
        <Divider className="divider" />
          <Header as='h2' className="titles">
            Software Engineering Immersive Course, General Assembly London,
            Remote | Sep 2021 - Dec 2021
          </Header>
          <Header as="h4" className="description">
          The GA SEI course was a full time immersive course that included over
          400 hours of professional study and a further 400+ hours of extra
          curricular study over 12 weeks. Throughout my time on the course, I
          have gained knowledge of front-end and back-end technologies and have
          the ability to create real world working web applications. I have
          developed a pleasure for clear code, a keenness to learn new
          technologies and an enthusiasm for solving both real world and
          technical problems. While studying at GA, I have worked on multiple
          projects solely and pair/group coding.
        </Header>
      </Container>
    </motion.div>
  );
};

export default Experience;
