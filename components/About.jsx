import React from "react";
import Image from "next/image";

import { MaxWidthComponent } from "../styles/constants/helpers";
import {
  AboutProject__Container,
  AboutProject__Columns,
  AboutProject__Grid,
  AboutProject__Box,
} from "../styles/Homepage/AboutProject";

const AboutProject = () => {
  return (
    <AboutProject__Container>
      <MaxWidthComponent>
        <AboutProject__Columns>
          <div className="aboutProject__header">
            <h1>Our Products</h1>
            <p>
              The first multilcollateral interest-free loan on Metis Andromeda.
            </p>
          </div>
          <AboutProject__Grid>
            <AboutProject__Box>
              <div className="vision__image">
                <Image
                  src="/icons/announce.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>Nfts collateral system</h2>
              <p>
                Portfolio collateral: Supply one token or use total portfolio as
                collateral to borrow for more prevention from liquidation.
              </p>
            </AboutProject__Box>
            <AboutProject__Box>
              <div className="vision__image">
                <Image
                  src="/icons/win.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>Multiple rewards for liquidity providers</h2>
              <p>
                Best capital efficiency: The Stabiltiy Protocol efficient
                liquidation mechanism allows users to get the best liquidity in
                all defi for their collaterals.{" "}
              </p>
            </AboutProject__Box>
            <AboutProject__Box>
              <div className="vision__image">
                <Image
                  src="/icons/group.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>Multicolleteral</h2>
              <p>
                NFTs collateral: Leverage on Stabilty Protocol and get funds for
                usage while holding your favorite NFTs.
              </p>
            </AboutProject__Box>
          </AboutProject__Grid>
        </AboutProject__Columns>
      </MaxWidthComponent>
    </AboutProject__Container>
  );
};

export default AboutProject;
