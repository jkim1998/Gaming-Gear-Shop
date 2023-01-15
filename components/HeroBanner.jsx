import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero_banner_left">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Link href={`/product/${heroBanner.product}`} className="banner_button">
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>
      <div className="hero_banner_right">
        <div className="banner_image_container">
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="banner_image"
          />
        </div>

        <div className="hero_banner_desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
