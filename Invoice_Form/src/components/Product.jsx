import React, { useState } from "react";
import ProductGroup from "./ProductGroup";

const Product = ({ name, price }) => {
  return (
    <div className="border flex p-5 mb-3 rounded justify-between items-center">
      <p className="product-name text-gray-600">{name}</p>
      <p className="text-gray-400">
        $ <span className="product-price">{price}</span>
      </p>
    </div>
  );
};

export default Product;
