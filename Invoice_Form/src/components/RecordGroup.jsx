import React from "react";
import Record from "./Record";
import EmptyStage from "./EmptyStage";

const RecordGroup = ({ records }) => {
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record record={record} key={record.id} index={index} />
      ))}
    </>
  );
};

export default RecordGroup;
