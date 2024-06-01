import React from "react";

const RecordTotal = ({ records }) => {
  const subTotal = records.reduce((pv, { cost }) => pv + parseFloat(cost), 0);
  const tax = (subTotal * 0.15).toFixed(2);
  const total = parseFloat(subTotal) + parseFloat(tax);
  return (
    <section className="mt-20 px-20 flex justify-between items-center">
      <div className="flex h-full gap-1 border ">
        <div>
          <h1 className="bg-header p-2">Payment Method</h1>
          <div className="p-2">
            <h1 className="font-semibold">PayPal</h1>
            <p>username@paypal.com</p>
            <h1 className="font-semibold">Card Payment</h1>
            <p>Visa Card,Master Card, Payoneer</p>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-title  rounded odd:bg-sideColor odd:dark:bg-gray-900 even:bg-title even:dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SubTotal
              </th>
              <td className="px-6 py-4 max-w-[150px]">
                $ <span className="subTotal">{subTotal}</span>
              </td>
            </tr>
            <tr className="bg-title rounded odd:bg-sideColor odd:dark:bg-gray-900 even:bg-title even:dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tax(15%)
              </th>
              <td className="px-6 py-4 max-w-[150px]">
                $ <span className="tax">{tax}</span>
              </td>
            </tr>
            <tr className="bg-title rounded odd:bg-sideColor odd:dark:bg-gray-900 even:bg-title even:dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-4 max-w-[150px]">
                $ <span className="total">{total.toFixed(2)}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecordTotal;
