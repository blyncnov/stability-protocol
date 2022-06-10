import React from "react";
import Image from "next/image";

import { FaBriefcase } from "react-icons/fa";

import { MaxWidthComponent } from "../styles/constants/helpers";
import {
  Partner__Container,
  Partner__Columns,
  Partner__Grid,
} from "../styles/Homepage/Partner";

const Partners = () => {
  return (
    <Partner__Container>
      <MaxWidthComponent>
        <Partner__Columns>
          <div className="Partners__Header">
            <h1>OUR PARTNER</h1>
            <p>
              Companies and funds that believe in our mission and claimed a
              stake in Point Network success
            </p>
          </div>
          <Partner__Grid>
            <div className="Partner__box">
              <h1>
                <Image
                  src="/partners/crypty.svg"
                  height="100"
                  width="200"
                  alt="loner"
                />
              </h1>
            </div>
            <div className="Partner__box">
              <h1>
                <Image
                  src="/partners/zoomer.svg"
                  height="100"
                  width="200"
                  alt="loner"
                />
              </h1>
            </div>
            <div className="Partner__box">
              <h1>
                <Image
                  src="/partners/xko.svg"
                  height="100"
                  width="200"
                  alt="loner"
                />
              </h1>
            </div>
            <div className="Partner__box">
              <h1>
                <Image
                  src="/partners/pryco.svg"
                  height="100"
                  width="200"
                  alt="loner"
                />
              </h1>
            </div>
          </Partner__Grid>
        </Partner__Columns>
      </MaxWidthComponent>
    </Partner__Container>
  );
};

export default Partners;
