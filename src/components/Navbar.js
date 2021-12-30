import React from "react";
import { Menu, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ContactMe from "./ContactMe";
import me from "../assets/me.png";
import { motion } from "framer-motion/dist/framer-motion";

const Navbar = () => {
  return (
    <Menu size="tiny">
      <motion.circle animate={{ x: [0, 200, 0] }} transition={{  type: "spring", stiffness: 200, damping: 5, mass: 1.2, velocity: 12 }} whileTap={{ scale: 0.7 }}>
        <Menu.Item>
          <Header as={("h4", Link)} to="/" className="myname">
            <Image src={me} size="tiny"></Image>
            Piotr Jankowski
          </Header>
        </Menu.Item>
      </motion.circle>
      <Menu.Menu className="buttonsMotion" position="right">
      <motion.circle className='motion' animate={{ x: [0, -200, 0] }} transition={{ ease: "easeIn" }}>
        <motion.div whileHover={{ scale: 1.6 }} transition={{  type: "spring", stiffness: 200 }}  whileTap={{ scale: 0.9 }}>
          <Menu.Item as={Link} to="/expiriance">
            Expiriance
          </Menu.Item>
        </motion.div>
        <motion.div whileHover={{ scale: 1.6 }} transition={{  type: "spring", stiffness: 200 }}  whileTap={{ scale: 0.9 }}>
          <Menu.Item as={Link} to="/portfolio">
            Portfolio
          </Menu.Item>
        </motion.div>
        <motion.div whileHover={{ scale: 1.6 }} transition={{  type: "spring", stiffness: 200 }}  whileTap={{ scale: 0.9 }}>
          <ContactMe />
        </motion.div>
        </motion.circle>
      </Menu.Menu>
    </Menu>
  );
};
export default Navbar;
