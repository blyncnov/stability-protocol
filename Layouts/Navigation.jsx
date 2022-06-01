import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import { NavigationItems } from "../data/NavigationData";
import { MaxWidthComponent } from "../styles/constants/helpers";

import {
  Navigation__Container,
  Navigation__Row,
  Navigation__Logo,
  Navigation__Lists,
  Navigation__Mobile,
} from "../styles/Homepage/Navigation";

const Navigation = () => {
  return (
    <>
      <Navigation__Container>
        <MaxWidthComponent>
          <Navigation__Row>
            <Navigation__Logo>
              {/* <Image src="/phaxsam.png" height="100" width="100" alt="logo" /> */}
              <h2>Stability-Protocols</h2>
            </Navigation__Logo>
            <Navigation__Lists>
              {NavigationItems.map((list) => {
                return (
                  <li key={list.id}>
                    <Link href={list.url}>
                      <a>{list.name}</a>
                    </Link>
                  </li>
                );
              })}
              <Navigation__Mobile>
                <button className="Navigation__Button">Join Now</button>
                <div className="Navigation__bar">
                  <FaBars style={{ fontSize: "1.5em", cursor: "pointer" }} />
                </div>
              </Navigation__Mobile>
            </Navigation__Lists>
          </Navigation__Row>
        </MaxWidthComponent>
      </Navigation__Container>
    </>
  );
};

export default Navigation;
