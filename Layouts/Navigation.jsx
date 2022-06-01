import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavigationItems } from "../data/NavigationData";
import { MaxWidthComponent } from "../styles/constants/helpers";

import {
  Navigation__Container,
  Navigation__StickToTop,
  Navigation__Row,
  Navigation__Logo,
  Navigation__Left,
  Navigation__Lists,
  Navigation__Mobile,
} from "../styles/Homepage/Navigation";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const HandleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Navigation__Container>
        <MaxWidthComponent>
          <Navigation__StickToTop>
            <Navigation__Row>
              <Navigation__Logo>
                {/* <Image src="/phaxsam.png" height="100" width="100" alt="logo" /> */}
                <h2>StabPro</h2>
              </Navigation__Logo>
              <Navigation__Left>
                <Navigation__Lists isOpen={isClicked} onClick={HandleIsClicked}>
                  {NavigationItems.map((list) => {
                    return (
                      <li onClick={HandleIsClicked} key={list.id}>
                        <Link href={list.url}>
                          <a>{list.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </Navigation__Lists>
                <Navigation__Mobile>
                  <button className="Navigation__Button">Join Now</button>
                  <div className="Navigation__bar" onClick={HandleIsClicked}>
                    <FaBars style={{ fontSize: "1.5em", cursor: "pointer" }} />
                  </div>
                </Navigation__Mobile>
              </Navigation__Left>
            </Navigation__Row>
          </Navigation__StickToTop>
        </MaxWidthComponent>
      </Navigation__Container>
    </>
  );
};

export default Navigation;
