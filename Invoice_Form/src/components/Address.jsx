import React from "react";

const Address = () => {
  return (
    <section className="px-20 mt-10">
      <div className="flex justify-between">
        <div className="text-sm">
          <p>Invoice to : Ms.Bella</p>
          <p>Address :</p>
          <p>Email : Xxx@gmail.com</p>
          <p>Phone Number: 09xxxxxx</p>
        </div>
        <div className="text-sm">
          <p>Invoice No: #12345</p>
          <p>Date :</p>
          <p>Due Date:</p>
        </div>
      </div>
    </section>
  );
};

export default Address;
