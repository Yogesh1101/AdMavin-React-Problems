import React, { useEffect, useState } from "react";
import "./infiniteScroll.css";

function InfiniteScroll() {
  const [list, setList] = useState(20);
  const [loading, setLoading] = useState(false);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setList(list + 20);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [list]);
  return (
    <div className="infinite-container">
      <h1 className="title">Infinite Scroll</h1>
      {Array.from({ length: list }, (_, index) => {
        return (
          <div key={index}   className="list-text">
            This is div with Index Number - {index + 1}
          </div>
        );
      })}
      {loading ? <p className="loading-text">Loading...</p> : null}
    </div>
  );
}

export default InfiniteScroll;
