import React from "react";

const DrawerBtn = () => {
  return (
    <section className="flex justify-end gap-2 mt-20 px-20 print:hidden">
      <button
        id="manageInventoryBtn"
        type="button"
        data-drawer-target="drawer-form"
        data-drawer-show="drawer-form"
        aria-controls="drawer-form"
        className="py-2.5 px-5 me-2 mb-2 text-sm  font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-gray-200 border hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Manage Inventory
      </button>
      <button
        type="button"
        id="printBtn"
        className="text-black bg-title hover:bg-header focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Print
      </button>
    </section>
  );
};

export default DrawerBtn;
