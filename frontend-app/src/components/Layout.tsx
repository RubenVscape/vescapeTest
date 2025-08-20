"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Minimize2 } from "lucide-react";


export default function Layout({ children }: { children: React.ReactNode }) {


  const [isOpen, setIsOpen] = useState(false);
  const [minimize, setMinimize] = useState(true);
  

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`fixed md:static z-50 h-full 
        ${minimize ? "w-12" : "w-64"} 
        bg-gray-900 text-white p-6 
        transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div
          className={`flex items-center ${
            minimize ? "justify-center" : "justify-between"
          } mb-8`}
        >
          {!minimize && <span className="text-xl font-bold">Menu</span>}
          <button
            onClick={() => setMinimize(!minimize)}
            className="text-gray-400 hover:text-white cursor-pointer hidden md:block"
          >
            <Minimize2 size={20} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-400 hover:text-white cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {!minimize && (
          <nav className="space-y-4">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Users
            </Link>
            <Link
              href="/locations"
              className="block px-3 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>
          </nav>
        )}
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6">
          <button
            onClick={() => {
              setIsOpen(true);
              setMinimize(false);
            }}
            className="md:hidden text-gray-600 hover:text-black"
          >
            <Menu size={24} />
          </button>
          <h1 className='text-lg font-semibold  text-black'>Interview Test</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{'Hi user' + ""}</span>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}