"use client";

import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";

export default function Timer() {
  const [count, countSet] = useState(0);
  const [run, setRun] = useState(0);
  const [btnLabel, setBtnLabel] = useState("START");
  const soundfile = "/sound.wav";

  const playAudio = () => {
    const audio = new Audio(soundfile);
    audio.play();
  };

  function resetTimer() {
    countSet(0);
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
      countSet((currentCount) => currentCount - run);
    }, 10);

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
      <TimerDisplay count={count} countSet={countSet} playAudio={playAudio} startTimer={startTimer} />
    </div>
  );
}
