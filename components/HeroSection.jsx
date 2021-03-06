import React from "react";
import Image from "next/image";

import { MdOutlineForwardToInbox } from "react-icons/md";
import { ImRadioChecked } from "react-icons/im";

import Navigation from "../Layouts/Navigation";

import {
  Header,
  HeroSection__Columns,
  HeroSection__CTO,
} from "../styles/Homepage";
import { MaxWidthComponent } from "../styles/constants/helpers";

const HeroSection = () => {
  return (
    <>
      <Header>
        <Navigation />
        <MaxWidthComponent>
          <HeroSection__Columns>
            <HeroSection__CTO>
              <h1>0% interest loans</h1>
              <p>
                Borrow LUSD against ETH & Building a global financial platform
                for lending/borrowing crypto assests and real world assets as
                NFTS Consectetur, porro dolore. Animi, vitae! Maiores sunt quia
                nam. Ab, ipsa. Porro, quaerat enim itaque sed dolorum facilis.
              </p>
              <div className="CTO__button">
                <button className="HeroSection__Button">
                  <ImRadioChecked />
                  Get Started
                </button>
                <button className="HeroSection__Button waitlist">
                  <MdOutlineForwardToInbox style={{ color: "" }} />
                  Join Waitlist
                </button>
              </div>
            </HeroSection__CTO>

            <HeroSection__CTO>
              <Image
                src="/dvdfv14.png"
                height="900"
                width="1000"
                alt="banner"
              />
            </HeroSection__CTO>
          </HeroSection__Columns>
        </MaxWidthComponent>
      </Header>
    </>
  );
};

export default HeroSection;
