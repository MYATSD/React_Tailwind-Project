import React from "react";
import Product from "./Product";

const ProductGroup = ({ products }) => {
  return (
    <>
      {products.map(({ id, name, price }) => (
        <Product name={name} price={price} key={id} />
      ))}
    </>
  );
};

export default ProductGroup;
