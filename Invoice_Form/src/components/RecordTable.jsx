import React from "react";
import RecordGroup from "./RecordGroup";

const RecordTable = ({ records, quantity }) => {
  return (
    <div className="relative overflow-hidden px-20 sm:rounded-lg mt-20">
      <table
        id=""
        className=" w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-title">
            <th scope="col" className="px-6 py-3">
              ID
            </th>

            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 ">
              Price
            </th>
            <th scope="col" className="px-6 py-3 ">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 ">
              Cost
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody id="rowGroup">
          <RecordGroup records={records} quantity={quantity} />
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
