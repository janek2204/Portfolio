import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Container, Divider, Header, Card, Image, CardContent, CardHeader } from "semantic-ui-react";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
const Portfolio = () => {
  return (
    <Container>
      <Header as='h1' className="titles" >Check out my projects!</Header>
      <Divider className="divider"/>
      <Header  as='h4' className="description">Here you can find projects which I was worked on recently</Header>
      <CardGroup itemsPerRow={2}>
        <Card as={Link} to='/'>
          <Image src={project1}/>
          <CardContent>
            <CardHeader textAlign="center">Virus Invaders</CardHeader>
          </CardContent>
        </Card>
        <Card as={Link} to='/' image={project2}></Card>
        <Card as={Link} to='/' image={project3}></Card>
        <Card as={Link} to='/' image={project4}></Card>
      </CardGroup>

    </Container>
  );
};

export default Portfolio;
