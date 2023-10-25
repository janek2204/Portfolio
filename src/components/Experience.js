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
        <Header as="h2" className="titles">
          Junior Full-Stack Software Developer, AttractionTickets.com, London,
          Hybrid | Mar 2022 - Present
        </Header>
        <Header as="h4" className="description">
          I possess expertise in crafting high-quality, efficient code aligned
          with industry standards and actively contribute to the agile
          development process, with a focus on Jenkins deployment for automated
          releases. Proficient in Next.js and TypeScript, I specialize in
          building scalable web applications with dynamic user interfaces in
          React. My achievements include implementing Apple Pay to meet customer
          needs and leading a white-label project for a key client, which
          expanded the brand into new global markets by leveraging PHP and
          Drupal for dynamic web solutions.
        </Header>

        <Header as="h2" className="titles">
          Software Engineering Immersive Course, General Assembly, London,
          Remote | Sep 2021 - Dec 2021
        </Header>
        <Header as="h4" className="description">
          The GA SEI course was a full time immersive course that included over
          400 hours of professional study and a further 400+ hours of practical
          coding over a 12 week period. During the course, I have gained
          knowledge of front-end and back-end technologies and can now create
          real-world working web applications. I have developed a passion for
          clean code, new technologies and an enthusiasm for solving both real
          world and technical problems. While studying at GA, I have worked on
          multiple projects independently and in a pair/group coding scenario.
        </Header>
      </Container>
    </motion.div>
  );
};

export default Experience;
