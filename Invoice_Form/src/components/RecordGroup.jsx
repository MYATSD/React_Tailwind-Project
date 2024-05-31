import React from "react";
import Record from "./Record";
import EmptyStage from "./EmptyStage";

const RecordGroup = ({ records, quantity }) => {
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record
          record={record}
          key={record.id}
          index={index}
          quantity={quantity}
        />
      ))}
    </>
  );
};

export default RecordGroup;
