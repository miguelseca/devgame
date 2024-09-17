"use client";
import Link from "next/link";
import React from "react";
import { useReducer } from "react";
import styles from "./_reaction.module.css";
import reducer, { initialState } from "../../state/reducer";

export default function Reaction() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  return (
    <>
      <div className="p-5 bg-gray-400 rounded shadow-md">
        <h1 className={styles.joke}>REACTIONS</h1>
        
        <button
          // onClick={doCenas}
          className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
        >
          Cenas
        </button>
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
