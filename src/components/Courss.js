import React from "react";

function Courss({ img, status }) {
  return (
    <div className="course">
      {img && <img src={img}></img>}
      <hr></hr>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Courss;
