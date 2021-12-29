import React from "react";
import { Menu, Header, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ContactMe from "./ContactMe";
import me from '../assets/me.png'

const Navbar = () => {

  return (
    <Menu size="tiny">
      <Menu.Item>
        <Header as={('h4', Link)} to='/' className="myname">
        <Image src={me} size="tiny"></Image>
          Piotr Jankowski
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/expiriance">
          Expiriance
        </Menu.Item>
        <Menu.Item as={Link} to="/portfolio">
          Portfolio
        </Menu.Item>
        <ContactMe/>
      </Menu.Menu>
    </Menu>
  );
};
export default Navbar;
