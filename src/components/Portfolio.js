import React from "react";
import { Link } from "react-router-dom";
import {
  CardGroup,
  Container,
  Divider,
  Header,
  Card,
  Image,
  CardContent,
  CardHeader,
} from "semantic-ui-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { motion } from "framer-motion/dist/framer-motion";

const Portfolio = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.8 }}
    >
    <Container>
      <Header as="h1" className="titles">
        Check out my projects!
      </Header>
      <Divider className="divider" />
      <Header as="h4" className="description">
        Here you can find projects which I was worked on recently
      </Header>

      <CardGroup itemsPerRow={2} stackable>
          <Card className="card" as={Link} to="/projectOne">
            <Image src={project1} />
            <CardContent className="cardContent">
              <CardHeader className="cardHeader" textAlign="center">
                Virus Invaders
              </CardHeader>
            </CardContent>
          </Card>

        <Card as={Link} to="/projectTwo">
          <Image src={project2} />
          <CardContent className="cardContent">
            <CardHeader className="cardHeader" textAlign="center">
              BreweryApp
            </CardHeader>
          </CardContent>
        </Card>

        <Card as={Link} to="/projectThree">
          <Image src={project3} />
          <CardContent className="cardContent">
            <CardHeader className="cardHeader" textAlign="center">
              Best London Parks
            </CardHeader>
          </CardContent>
        </Card>

        <Card as={Link} to="/projectFour">
          <Image src={project4} />
          <CardContent className="cardContent">
            <CardHeader className="cardHeader" textAlign="center">
              E@syShopp
            </CardHeader>
          </CardContent>
        </Card>

      </CardGroup>
    </Container>
    </motion.div>
  );
};

export default Portfolio;
