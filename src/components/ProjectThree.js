import React from "react";
import { Container, Header } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";

const ProjectThree = () => {
  return(
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.8 }}
    >
    <Container>
      <Header as='h1'>Project Three site</Header>
    </Container>
    </motion.div>
  )
}

export default ProjectThree