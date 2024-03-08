"use client";
import { useState, useEffect } from "react";

export default function TimerDisplay({ count, countSet, playAudio, startTimer }) {
  const [min_1, min_1Set] = useState(0);
  const [min_2, min_2Set] = useState(1);
  const [sec_1, sec_1Set] = useState(2);
  const [sec_2, sec_2Set] = useState(0);

  function controlDigit(digit, digitString, direction) {
    if (direction === "up") {
      if (digit === 9) {
        eval(`${digitString}Set(0)`);
      } else {
        let evalString = `${digitString}Set(${digit} + 1)`;
        eval(evalString);
      }
    } else {
      if (digit === 0) {
        eval(`${digitString}Set(9)`);
      } else {
        let evalString = `${digitString}Set(${digit} - 1)`;
        eval(evalString);
      }
    }
  }

  useEffect(() => {
    if (sec_1 === 0 && count === 0 && min_1 === 0 && min_2 === 0) {
      console.log("BEEP BEEP MOTHERFUCKER");
      startTimer();
      playAudio();
    }
    {
      if (count < 0) {
        countSet(9);
        sec_1Set(sec_1 - 1);
      }

      if (sec_1 < 0) {
        sec_1Set(5);
        min_2Set(min_2 - 1);
      }
      if (min_2 < 0) {
        min_2Set(9);
        min_1Set(min_1 - 1);
      }
    }
  }, [count, sec_2, sec_1, min_2, min_1]);

  return (
    <div id="timer">
      <div className="digit">
        <button className="digitBtn" onClick={() => controlDigit(min_1, "min_1", "up")}>
          ⬆
        </button>
        <span>{min_1}</span>
        <button className="digitBtn" onClick={() => controlDigit(min_1, "min_1", "down")}>
          ⬇
        </button>
      </div>
      <div className="digit">
        <button className="digitBtn" onClick={() => controlDigit(min_2, "min_2", "up")}>
          ⬆
        </button>
        <span>{min_2}</span>
        <button className="digitBtn" onClick={() => controlDigit(min_2, "min_2", "down")}>
          ⬇
        </button>
      </div>
      <span>:</span>
      <div className="digit">
        <button className="digitBtn" onClick={() => controlDigit(sec_1, "sec_1", "up")}>
          ⬆
        </button>
        <span>{sec_1}</span>
        <button className="digitBtn" onClick={() => controlDigit(sec_1, "sec_1", "down")}>
          ⬇
        </button>
      </div>
      <div className="digit">
        <button className="digitBtn" onClick={() => controlDigit(count, "countSet", "up")}>
          ⬆
        </button>
        <span>{count}</span>
        <button className="digitBtn">⬇</button>
      </div>
      <p>{count}</p>
    </div>
  );
}
