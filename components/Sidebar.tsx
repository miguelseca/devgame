"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-300">
      <div
        className={`bg-gray-300 text-red h-screen p-5 ${
          isOpen ? "w-64" : "w-20"
        } transition-all duration-300 relative`}
      >
        {/* Hamburger Icon */}
        <button
          className="absolute top-5 right-5 text-red"
          onClick={toggleSidebar}
        >
          {isOpen ? "Close" : "Open"}
        </button>

        <div className="flex flex-col space-y-4 mt-10">
          {/* Navigation Links */}
          <Link
            className="p-2 rounded hover:bg-gray-400 transition-all duration-1700"
            href="/jokes"
            passHref
          >
            {isOpen ? "🏠 Jokes" : "🏠"}
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-400 transition-all duration-400"
            href="/tasks"
            passHref
          >
            {isOpen ? "💼 Tasks" : "💼"}
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-400 transition-all duration-400"
            href="/gallery"
            passHref
          >
            {isOpen ? "💼 Gallery" : "💼"}
          </Link>

          <Link
            className="p-2 rounded hover:bg-gray-400 transition-all duration-400"
            href="/matrix"
            passHref
          >
            {isOpen ? "💼 Matrix" : "💼"}
          </Link>

          <Link
            className="p-2 rounded hover:bg-gray-400 transition-all duration-400"
            href="/reaction"
            passHref
          >
            {isOpen ? "💼 Reactions" : "💼"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
