"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Tasks() {
  const [userQuery, setUserQuery] = useState("");

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`);
    // , '_blank')
  };

  const handleKeyPressed = (event: { key: string }) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const updateUserQuery = (e: any) => {
    setUserQuery(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-slate-400">
        <h1>JOKES</h1>
        <h2>{userQuery}</h2>

        <div className="form border-gray-400">
          <input
            value={userQuery}
            onChange={updateUserQuery}
            onKeyDown={handleKeyPressed}
          ></input>

          <button onClick={searchQuery}>Search</button>
        </div>

        <Link
          className="p-2 rounded hover:bg-gray-700 transition-all duration-200"
          href="/"
          passHref
        >
          to HOME
        </Link>
      </div>
    </>
  );
}
