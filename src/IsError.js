import React from "react";

function IsError() {
  return (
    <div
      className="section"
      style={{
        textAlign: "center",
        color: "red",
      }}
    >
      <h3 className="error">error in loading data from api</h3>
    </div>
  );
}

export default IsError;
