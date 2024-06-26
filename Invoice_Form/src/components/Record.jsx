import React from "react";
import { useRef } from "react";

const Record = ({
  record: { id, name, price, quantity, cost },
  index,
  deleteRecord,
  addQuantity,
  subQuantity,
}) => {
  const delBtnHandler = (e) => {
    e.preventDefault();

    deleteRecord(id);
  };
  const addQuantityBtnHandler = (e) => {
    e.preventDefault();
    addQuantity(id);
  };
  const subQuantityBtnHandler = (e) => {
    e.preventDefault();
    subQuantity(id);
  };
  return (
    <tr className="row group odd:bg-header odd:dark:bg-gray-900 even:bg-sideColor even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="row-no px-6 py-4">{index + 1}</td>
      <th
        scope="row"
        className="row-product-name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className=" px-6 py-4">
        $ <span className="row-product-price text-end"> {price}</span>
      </td>

      <td className=" px-6 py-4 ">
        <button
          onClick={subQuantityBtnHandler}
          className="sub-quantity-btn  font-medium text-gray-600 dark:text-blue-500 opacity-0  duration-300 -translate-x-10 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto print:hidden hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <span className="row-quantity">{quantity}</span>
        <button
          onClick={addQuantityBtnHandler}
          className="add-quantity-btn font-medium text-gray-600 dark:text-blue-500 opacity-0  duration-300 translate-x-10 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto print:hidden hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </td>

      <td className=" px-6 py-4">
        $ <span className="row-product-cost text-end">{cost}</span>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={delBtnHandler}
          className="row-del-btn  font-medium text-gray-600 dark:text-blue-500 opacity-0  duration-300 translate-x-10 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto print:hidden hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Record;
