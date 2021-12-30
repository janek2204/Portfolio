import React from "react";
import { Container, Segment } from "semantic-ui-react";
import Typical from "react-typical";


const Home = () => {
  return (
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
  );
};

export default Home;
