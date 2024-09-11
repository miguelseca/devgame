"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import MATRIX from "../../data/matrix";
import styles from "./_matrix.module.css";

const DEFAULT_DELAY = 10;
const MIN_DELAY = 10;
const MIN_INCREMENT = 1;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [increment, setIncrement] = useState(MIN_INCREMENT);

  useEffect(() => {
    console.log("delay", delay);
    console.log("increment", increment);

    const intervalId = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % MATRIX.length; // Adjust index by increment value
      });
    }, delay);

    // isto corresponde a um unmount: return um a callback function
    return () => {
      console.log("remove interval");
      clearInterval(intervalId);
    };
  }, [delay, increment]);

  const updateDelay = (event) => {
    const delay = Number(event.target.value) * DEFAULT_DELAY;

    setDelay(delay < MIN_DELAY ? MIN_DELAY : delay);
  };

  const updateIncrement = (event) => {
    const increment = Number(event.target.value);
    setIncrement(increment < MIN_INCREMENT ? MIN_INCREMENT : increment);
  };

  return (
    <>
      <div className={styles.matrix}>
        <img src={MATRIX[index].src} alt='matrix-animation' />
        <div className={styles.multiform}>
          <div>
            Frame transition delay (Seconds):
            <input type="number" onChange={updateDelay} />
          </div>
          <div>
            Frame increment:
            <input type="number" onChange={updateIncrement} />
          </div>
        </div>
      </div>

      <Link
        className="p-2 rounded hover:bg-gray-700 transition-all duration-200"
        href="/"
        passHref
      >
        to HOME
      </Link>
    </>
  );
}
