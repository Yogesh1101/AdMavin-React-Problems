import React, { useEffect, useState } from "react";
import "./hitGame.css";

function HitGame() {
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(60);
  const [random, setRandom] = useState(Math.floor(Math.random() * 9));

  const gameStyle = {
    display: start ? "block" : "none",
  };

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        const newRandom = Math.floor(Math.random() * 9);
        setRandom(newRandom);
        setTimeout(() => setRandom(null), 1000);
        setScore(score - 2.5);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start, score]);

  const handleGameStart = () => {
    setScore(0);
    setStart(true);
    let timeCounter = 60;
    const timeInterval = setInterval(timeCount, 1000);
    function timeCount() {
      timeCounter--;
      setTime(timeCounter);
      if (timeCounter === 0) {
        setStart(false);
        clearInterval(timeInterval);
      }
    }
  };

  const handleClicked = (id) => {
    if (id === random) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  function Square({ id, random }) {
    return id === random ? (
      <button onClick={() => handleClicked(id)} className="square-btn">
        HIT!
      </button>
    ) : (
      <button className="square-btn">{""}</button>
    );
  }

  return (
    <div>
      <h1>Hit Game</h1>
      <p className="score-text">Score : {score}</p>
      <button
        className="start-btn"
        onClick={() => {
          handleGameStart();
        }}
      >
        Start
      </button>
      <div style={gameStyle} className="game-div">
        <p>Time left : {time}</p>
        <div className="square-main">
          <div className="square-row">
            <Square id={0} random={random} />
            <Square id={1} random={random} />
            <Square id={2} random={random} />
          </div>
          <div className="square-row">
            <Square id={3} random={random} />
            <Square id={4} random={random} />
            <Square id={5} random={random} />
          </div>
          <div className="square-row">
            <Square id={6} random={random} />
            <Square id={7} random={random} />
            <Square id={8} random={random} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HitGame;
