"use client";
import { useState, useEffect } from "react";

export default function TimerDisplay({ count, setCount }) {
  const [mt, mtSet] = useState(0);
  const [ms, msSet] = useState(0);
  const [st, stSet] = useState(0);
  const [ss, ssSet] = useState(0);

  useEffect(() => {
    if (count > 9) {
      stSet(st + 1);
      setCount(0);
    }
    if (st > 5) {
      stSet(0);
      msSet(ms + 1);
    }

    if (ms > 9) {
      msSet(0);
      mtSet(mt + 1);
    }
  }, [count, ss, st, ms, mt]);

  return (
    <div id="timer">
      <span>{mt}</span>
      <span>{ms}</span>
      <span>:</span>
      <span>{st}</span>
      <span>{count}</span>
    </div>
  );
}
