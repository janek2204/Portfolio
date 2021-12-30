import React from "react";
import { Header } from "semantic-ui-react";
import { motion } from "framer-motion/dist/framer-motion";

const Expiriance = () => {
  return(
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.8 }}
    >
    <Header as='h1'>Expiriance page</Header>
    </motion.div>
  )
}

export default Expiriance