"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./_jokes.module.css";
import { useFetch } from "@/app/hooks";

export default function Joke() {
  // const [joke, setJoke] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);


  const result: any = useFetch("https://api.chucknorris.io/jokes/random");
  
  // useEffect(() => {
  //   fetchJoke();
  // }, []);

  // const fetchJoke = () => {
  //   setLoading(true);
  //   fetch("https://api.chucknorris.io/jokes/random")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJoke(data.value);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching joke:", error);
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <div className="p-5 bg-gray-100 rounded shadow-md">
        <h1 className={styles.joke}>MIGUEL</h1>
        <h2 className="text-xl font-bold mb-3">Chuck Norris Joke</h2>
        {result.loading ? (
          <p>Loading joke...</p>
        ) : (
          <p className="text-gray-800">{result.result.value}</p>
        )}

        <button
          // onClick={fetchJoke}
          className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
        >
          Fetch New Joke
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
