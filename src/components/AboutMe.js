import React, { useState } from "react";
import { Header, Menu, Modal } from "semantic-ui-react";
const AboutMe = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Menu.Item>About Me</Menu.Item>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header as="h1" textAlign="center" className="modalTitle">
        About me!
      </Header>
      <Modal.Content>
        <Header className="modalText">
          Graduated from the General Assembly full time Software Engineering
          Immersive course. I’m looking to apply my new programming skillset to
          better customer experience through reliable, effective and bug free
          code whilst solving customer problems and meeting their needs. I’m
          looking to contribute to the business success by supporting the build
          of systems and customer experiences to ensure business delivers on its
          value proposition.
        </Header>

        <Header className="modalText">
          I love gadgets and technology - innovative everyday gadgets, finding
          new ways to automate tasks and new technology trends. I like to spend
          my free time exercising, running and cooking. One of my biggest
          passion are escape rooms - offline and online problem solving and
          travelling (not much recently, unfortunately).
        </Header>
      </Modal.Content>
    </Modal>
  );
};

export default AboutMe;
