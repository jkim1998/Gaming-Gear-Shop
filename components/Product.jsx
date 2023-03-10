import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div className="image_container">
            <img src={urlFor(image && image[0])} className="product-image" />
          </div>
          <div className="product_container">
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
