import React from "react";

const ProductGroup = ({ id, name, price }) => {
  return (
    <div className=" flex p-4 odd:bg-header even:bg-sideColor hover:bg-white mb-3 rounded justify-between items-center border">
      <p className="product-name text-gray-600">{name}</p>
      <p className="text-gray-400">
        $ <span className="product-price">{price}</span>
      </p>
    </div>
  );
};

export default ProductGroup;
