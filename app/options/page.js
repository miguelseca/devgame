"use client";
import React from "react";
import Link from "next/link";

export default function Options() {
  return (
    <>
      <div className="container mx-auto p-6 bg-slate-200">
        <h1>OPTIONS </h1>

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
