"use client";

import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto"
          />

          <h1 className="text-2xl font-bold tracking-tight">
            PT. PRIMAJAYE ERATAMA
          </h1>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex relative w-full max-w-md">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Cari produk"
            className="w-full py-3 pl-12 pr-4 rounded-full outline-none border border-gray-200"
          />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Produk</a>
          <a href="#">Marketplace</a>
          <a href="#">Tools</a>
          <a href="#">Artikel</a>
        </div>

        {/* BUTTON */}
        <div className="flex gap-3">
          <button className="border border-black px-4 py-2 rounded-xl">
            Login
          </button>

          <button className="bg-yellow-400 px-4 py-2 rounded-xl font-semibold">
            Registrasi
          </button>
        </div>

      </div>
    </nav>
  );
}