import React from "react";
import Image from "next/image";

import Navigation from "../Layouts/Navigation";

import { Header, HeroSection__Columns } from "../styles/Homepage";
import { MaxWidthComponent } from "../styles/constants/helpers";

const HeroSection = () => {
  return (
    <>
      <Header>
        <Navigation />
        <MaxWidthComponent>
          <HeroSection__Columns>
            <div className="text">
              <h1>0% interest loans</h1>
              <p>
                Borrow LUSD against ETH rem, ipsum dolor sit amet consectetur
                adipisicing elit. Laudantium, minima. Eum, rem! Consectetur,
                porro dolore. Animi, vitae! Maiores sunt quia nam. Ab, ipsa.
                Porro, quaerat enim itaque sed dolorum facilis.
              </p>
              <button>Get Started</button>
            </div>

            <div className="text">
              <Image
                src="/dvdfv14.png"
                height="900"
                width="1000"
                alt="banner"
              />
            </div>
          </HeroSection__Columns>
        </MaxWidthComponent>
      </Header>
    </>
  );
};

export default HeroSection;
