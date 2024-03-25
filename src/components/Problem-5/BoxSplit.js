import React, { useState } from "react";
import "./boxSplit.css";

function BoxSplit() {
  const [active, setActive] = useState(false);
  const [innerActive1, setInnerActive1] = useState(false);
  const [innerActive2, setInnerActive2] = useState(false);
  const [innerActive3, setInnerActive3] = useState(false);
  const [innerActive4, setInnerActive4] = useState(false);
  const mainBox = {
    width: 300,
    height: 300,
  };
  const handleCreate = () => {
    setActive(true);
  };
  const handleInnerSub1 = () => {
    setInnerActive1(true);
  };
  const handleInnerSub2 = () => {
    setInnerActive2(true);
  };
  const handleInnerSub3 = () => {
    setInnerActive3(true);
  };
  const handleInnerSub4 = () => {
    setInnerActive4(true);
  };

  function InnerSubBox({ newWidth, newHeight }) {
    return (
      <div className="sub">
        <div className="sub-inner">
          <div
            className="sub-box"
            style={{ width: newWidth, height: newHeight }}
          ></div>
          <div
            className="sub-box"
            style={{ width: newWidth, height: newHeight }}
          ></div>
        </div>
        <div className="sub-inner">
          <div
            className="sub-box"
            style={{ width: newWidth, height: newHeight }}
          ></div>
          <div
            className="sub-box"
            style={{ width: newWidth, height: newHeight }}
          ></div>
        </div>
      </div>
    );
  }

  function SubBox({ newWidth, newHeight }) {
    return (
      <div className="sub">
        <div className="sub-inner">
          <div
            className="sub-box"
            onClick={handleInnerSub1}
            style={{ width: newWidth, height: newHeight }}
          >
            {innerActive1 ? (
              <InnerSubBox
                newWidth={newWidth / 2 - 5}
                newHeight={newHeight / 2 - 5}
              />
            ) : null}
          </div>
          <div
            className="sub-box"
            onClick={handleInnerSub2}
            style={{ width: newWidth, height: newHeight }}
          >
            {innerActive2 ? (
              <InnerSubBox
                newWidth={newWidth / 2 - 5}
                newHeight={newHeight / 2 - 5}
              />
            ) : null}
          </div>
        </div>
        <div className="sub-inner">
          <div
            className="sub-box"
            onClick={handleInnerSub3}
            style={{ width: newWidth, height: newHeight }}
          >
            {innerActive3 ? (
              <InnerSubBox
                newWidth={newWidth / 2 - 5}
                newHeight={newHeight / 2 - 5}
              />
            ) : null}
          </div>
          <div
            className="sub-box"
            onClick={handleInnerSub4}
            style={{ width: newWidth, height: newHeight }}
          >
            {innerActive4 ? (
              <InnerSubBox
                newWidth={newWidth / 2 - 5}
                newHeight={newHeight / 2 - 5}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Box Split</h1>
      <button style={mainBox} className="main-box" onClick={handleCreate}>
        {active ? (
          <SubBox
            newWidth={mainBox.width / 2 - 5}
            newHeight={mainBox.height / 2 - 5}
          />
        ) : null}
      </button>
    </div>
  );
}

export default BoxSplit;
