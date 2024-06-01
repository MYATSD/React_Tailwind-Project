import React, { useRef } from "react";

const CreateForm = ({
  products,
  addRecord,
  records,
  addQuantity,
  quantity,
}) => {
  const idRef = useRef("");
  const quantityRef = useRef("");

  const createFormHandler = (e) => {
    e.preventDefault();
    const currentProduct = products.find(
      (p) => p.id === parseInt(idRef.current.value)
    );
    const currentQuantity = parseInt(quantityRef.current.value);

    // const existedProduct = records.filter(
    //   (record) => record.name != currentProduct.name
    // );
    // console.log(existedProduct);
    // existedProduct && addRecord(newRecord);
    const existedProduct = records.find(
      (record) => record.name === currentProduct.name
    );
    if (existedProduct) {
      const updateQuantity = existedProduct.quantity + currentQuantity;
      existedProduct.quantity = updateQuantity;

      existedProduct.cost = (updateQuantity * existedProduct.price).toFixed(2);
      addQuantity(updateQuantity);
    } else {
      addQuantity(currentQuantity);
      const newRecord = {
        id: Date.now(),
        name: currentProduct.name,
        price: currentProduct.price,
        quantity: currentQuantity,
        cost: (currentProduct.price * currentQuantity).toFixed(2),
      };
      addRecord(newRecord);
    }

    idRef.current.value = "";
    quantityRef.current.value = "";
  };
  return (
    <section className="mt-10 px-20 print:hidden">
      <form id="createForm" onSubmit={createFormHandler}>
        <div className="flex gap-3 border rounded-lg p-5">
          <div className="basis-5/12">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a Product
            </label>
            <select
              id="productSelect"
              name="productSelect"
              ref={idRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {products.map(({ id, name }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="basis-5/12">
            <label
              htmlFor="inputQuantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              name="inputQuantity"
              id="inputQuantity"
              ref={quantityRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            onClick={createFormHandler}
            className=" bg-header basis-2/12 hover:bg-sideColor focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Buy
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateForm;
