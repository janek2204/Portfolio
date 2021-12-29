import React from "react";
import { Menu, Modal, Icon, Container } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function ContactMe() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <>
      <Menu.Item
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
      >
        Contact Me!
      </Menu.Item>

      <Modal
        size="tiny"
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Content >
          <Container textAlign="center" >
            <a href="https://github.com/janek2204" target="_blank" rel="noopener noreferrer"><Icon name="github" color="black" size="massive" /></a>
            <a href="https://www.linkedin.com/in/piotr-jankowski2204/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" color="blue" size="massive" /></a>
            <a href={'mailto:piotr.jankowski2204@gmail.com?subject=Hi! I seen your portfolio!'}><Icon name="mail" color="red" size="massive" /></a>
          </Container>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ContactMe;
