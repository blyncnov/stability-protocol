import React from "react";
import Image from "next/image";

import { MaxWidthComponent } from "../styles/constants/helpers";
import {
  Vision__Container,
  Vision__Columns,
  Vision__Grid,
  Vision__Box,
} from "../styles/Homepage/Vision";

const Vision = () => {
  return (
    <Vision__Container>
      <MaxWidthComponent>
        <Vision__Columns>
          <div className="vision__header">
            <h1>Our Vision</h1>
            <p>
              The Stabiltiy Protocol efficient liquidation mechanism allows
              users to get the best liquidity in all defi for their collaterals.{" "}
            </p>
          </div>
          <Vision__Grid>
            <Vision__Box>
              <div className="vision__image">
                <Image
                  src="/icons/chart.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>110% Collateral Ratio*</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi totam hic quae dolor, asperiores voluptatum repellendus
                recusandae quaerat fuga ducimus facere dolorem quidem ut quod
                laborum voluptates! Culpa, aliquam!
              </p>
            </Vision__Box>
            <Vision__Box>
              <div className="vision__image">
                <Image
                  src="/icons/calender.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>0% Interest Rate</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi totam hic quae dolor, asperiores voluptatum repellendus
                recusandae quaerat fuga ducimus facere dolorem quidem ut quod
                laborum voluptates! Culpa, aliquam!
              </p>
            </Vision__Box>
            <Vision__Box>
              <div className="vision__image">
                <Image
                  src="/icons/wallet.png"
                  alt="chart"
                  height="50px"
                  width="50px"
                />
              </div>
              <h2>1 LUSD ≈ 1 USD</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi totam hic quae dolor, asperiores voluptatum repellendus
                recusandae quaerat fuga ducimus facere dolorem quidem ut quod
                laborum voluptates! Culpa, aliquam!
              </p>
            </Vision__Box>
          </Vision__Grid>
        </Vision__Columns>
      </MaxWidthComponent>
    </Vision__Container>
  );
};

export default Vision;
