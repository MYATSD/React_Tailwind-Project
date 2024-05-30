import React from "react";
import { useRef } from "react";
import ProductGroup from "./ProductGroup";

const Drawer = ({ drawerOpen, drawerUpdate, products, updateProducts }) => {
  const nameRef = useRef(" ");
  const priceRef = useRef();
  const newProductFormHandler = (e) => {
    e.preventDefault();
    const newProductName = nameRef.current.value;
    const newProductPrice = priceRef.current.value;

    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: newProductPrice,
    };
    updateProducts(newProduct);
  };
  const closeBtnHandler = () => {
    drawerUpdate();
  };
  return (
    <section className="">
      <div className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto  transition-transform translate-x-0  bg-white w-80 dark:bg-gray-800">
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Your Products
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          aria-controls="drawer-form"
          onClick={closeBtnHandler}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div id="productGroup" className="sheetBody">
          <ProductGroup products={products} />
        </div>

        <form
          id="newProductCreateForm"
          className="bg-white "
          onSubmit={newProductFormHandler}
        >
          <div className="grid grid-cols-3  gap-3">
            <div className="col-span-3">
              <label
                htmlFor="new_product_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="new_product_name"
                name="new_product_name"
                ref={nameRef}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eg. Apple"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="new_product_price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Product Price
              </label>
              <input
                type="number"
                id="new_product_price"
                name="new_product_price"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eg. $5"
                ref={priceRef}
                required
              />
            </div>
            <div className="col-span-1">
              <button
                onClick={newProductFormHandler}
                type="submit"
                className="text-black bg-header hover:bg-sidecolor focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Drawer;
