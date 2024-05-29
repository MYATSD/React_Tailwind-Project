import React from "react";

const EmptyStage = () => {
  return (
    <tr className="bg-sideColor border-b hidden last:table-row dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        colSpan="6"
        className="px-6 py-3 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
      >
        There is no list
      </th>
    </tr>
  );
};

export default EmptyStage;
