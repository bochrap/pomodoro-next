"use client";

import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);
  const [btnLabel, setBtnLabel] = useState("START");

  function resetTimer() {
    setCount(0);
  }
  function startTimer() {
    if (run === 0) {
      setRun(1);
      setBtnLabel("PAUSE");
    } else {
      setRun(0);
      setBtnLabel("START");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + run);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [run, btnLabel]);

  return (
    <div id="pomodoro">
      <div className="controls">
        <button className="controlBtn" onClick={startTimer}>
          {btnLabel}
        </button>
        <button className="controlBtn" onClick={resetTimer}>
          RESET
        </button>
      </div>
      <TimerDisplay count={count} setCount={setCount} />
    </div>
  );
}
