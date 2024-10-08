"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import PICTURES from "../../data/pictures";
import styles from "./_gallery.module.css";
import { useDynamicTransition } from "../hooks";

const DEFAULT_DELAY = 1000;
const MIN_DELAY = 1 * DEFAULT_DELAY;
const MIN_INCREMENT = 1;

export default function Gallery() {
  const [delay, setDelay] = useState(3 * DEFAULT_DELAY);
  const [increment, setIncrement] = useState(MIN_INCREMENT);

  const index = useDynamicTransition({
    delay: delay,
    increment: increment,
    length: PICTURES.length,
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
      <div className={styles.multiform}>
        <img src={PICTURES[index].image.src} alt="gallery" />
        <div className={styles.multiform}>
          <div>
            Gallery transition delay (Seconds):
            <input type="number" onChange={updateDelay} />
          </div>
          <div>
            Gallery increment:
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
