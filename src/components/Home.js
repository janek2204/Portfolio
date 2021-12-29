import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const Home = () => {
  return (
    <Container>
    <Segment textAlign="center" raised inverted>
      <Header as="h1">Hello there!</Header>
      <Segment raised>
        <Header as='h2'>Thank you for visiting my site!</Header>
        <Header as='h4'>As you can see, I am still in progress!<br/>Catch you later!<br/>Regards, Piotr!</Header>
      </Segment>
    </Segment>
    </Container>
  );
};

export default Home
