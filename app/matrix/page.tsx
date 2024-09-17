"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import MATRIX from "../../data/matrix";
import styles from "./_matrix.module.css";
import { useDynamicTransition } from "../hooks";

const DEFAULT_DELAY = 10;
const MIN_DELAY = 10;
const MIN_INCREMENT = 1;

export default function Gallery() {
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [increment, setIncrement] = useState(MIN_INCREMENT);

  const index = useDynamicTransition({
    delay: delay,
    increment: increment,
    length: MATRIX.length,
  });

  const updateDelay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const delay = Number(event.target.value) * DEFAULT_DELAY;

    setDelay(delay < MIN_DELAY ? MIN_DELAY : delay);
  };

  const updateIncrement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const increment = Number(event.target.value);
    setIncrement(increment < MIN_INCREMENT ? MIN_INCREMENT : increment);
  };
  

  return (
    <>
      <div className={styles.matrix}>
        <img src={MATRIX[index].src} alt="matrix-animation" />
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
