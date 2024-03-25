import React, { useState } from "react";
import "./bucketList.css";

function BucketList() {
  const [bucketList1, setBucketList1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [bucketList2, setBucketList2] = useState(["Item 6", "Item 7"]);

  const [selectedList1, setSelectedList1] = useState([]);
  const [selectedList2, setSelectedList2] = useState([]);

  const handleCheckboxChange1 = (list) => {
    if (selectedList1.includes(list)) {
      setSelectedList1(selectedList1.filter((i) => i !== list));
    } else {
      setSelectedList1([...selectedList1, list]);
    }
  };

  const handleCheckboxChange2 = (list) => {
    if (selectedList2.includes(list)) {
      setSelectedList2(selectedList2.filter((i) => i !== list));
    } else {
      setSelectedList2([...selectedList2, list]);
    }
  };

  const handleAddSelectedItems = () => {
    setBucketList1(bucketList1.filter((list) => !selectedList1.includes(list)));
    setBucketList2([...bucketList2, ...selectedList1]);
    setSelectedList1([]);
  };

  const handleRemoveSelectedItems = () => {
    setBucketList2(bucketList2.filter((list) => !selectedList2.includes(list)));
    setBucketList1([...bucketList1, ...selectedList2]);
    setSelectedList2([]);
  };

  const handleAddAll = () => {
    setBucketList2([...bucketList2, ...bucketList1]);
    setBucketList1([]);
    setSelectedList1([]);
  };

  const handleRemoveAll = () => {
    setBucketList1([...bucketList1, ...bucketList2]);
    setBucketList2([]);
    setSelectedList2([]);
  };

  return (
    <div className="bucket-main-div">
      <div className="list-headings">
        <div className="bucket-title">Bucket 1</div>
        <div></div>
        <div className="bucket-title">Bucket 2</div>
      </div>
      <div className="list-buckets">
        <div className="bucket1-div">
          {bucketList1.map((list, index) => {
            return (
              <div key={index} className="inner-list">
                <label htmlFor={index}>{list}</label>
                <input
                  id={index}
                  type="checkbox"
                  checked={selectedList1.includes(list)}
                  onClick={() => handleCheckboxChange1(list)}
                />
              </div>
            );
          })}
        </div>
        <div className="bucket-btns">
          <button onClick={handleAddSelectedItems}>Add</button>
          <button onClick={handleRemoveSelectedItems}>Remove</button>
          <button onClick={handleAddAll}>Add All</button>
          <button onClick={handleRemoveAll}>Remove All</button>
        </div>
        <div className="bucket2-div">
          {bucketList2.map((list, index) => {
            return (
              <div key={index} className="inner-list">
                <label htmlFor={index}>{list}</label>
                <input
                  id={index}
                  type="checkbox"
                  checked={selectedList2.includes(list)}
                  onClick={() => handleCheckboxChange2(list)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BucketList;
