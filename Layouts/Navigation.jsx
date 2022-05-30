import React from "react";
import Image from "next/image";

import { MaxWidthComponent } from "../styles/constants/helpers";

import {
  Navigation__Container,
  Navigation__Row,
  Navigation__Logo,
  Navigation__Lists,
} from "../styles/Homepage/Navigation";

const Navigation = () => {
  return (
    <>
      <Navigation__Container>
        <MaxWidthComponent>
          <Navigation__Row>
            <Navigation__Logo>
              <Image src="/phaxsam.png" height="100" width="100" alt="logo" />
              <h3></h3>
            </Navigation__Logo>
            <Navigation__Lists>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dapps</a>
              </li>
              <li>
                <a href="#">Our Partner</a>
              </li>
              <li>
                <a href="#">Roadmaps</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </Navigation__Lists>
          </Navigation__Row>
        </MaxWidthComponent>
      </Navigation__Container>
    </>
  );
};

export default Navigation;
