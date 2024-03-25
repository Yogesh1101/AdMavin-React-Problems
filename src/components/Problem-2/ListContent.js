import React from "react";
import MacFolder from "./macFolder.png";

function ListContent({ list }) {
  return (
    <div className="list-div">
      <div className="list-left">
        <img src={MacFolder} alt="mac-icon"></img>
        <p>{list.title}</p>
      </div>
      <p>&#11166;</p>
    </div>
  );
}

export default ListContent;
