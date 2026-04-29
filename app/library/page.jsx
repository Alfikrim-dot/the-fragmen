"use client";

import Navbar from "../components/Navbar";
import { tulisan } from "../data/tulisan";
import Link from "next/link";
import { useState } from "react";

export default function Library() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // FILTER LOGIC
  const filtered = tulisan.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <main>
      <Navbar />

      <div className="container px-6 py-20 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          
          <h1 className="text-3xl">Library</h1>

          <input
            type="text"
            placeholder="Cari buku..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-full text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white w-full md:w-52"
          />

        </div>

        {/* FILTER STATUS */}
        <div className="flex gap-4 mb-14 text-sm">

          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-1 rounded-full border transition ${
              statusFilter === "all"
                ? "bg-white text-black"
                : "border-neutral-700 text-neutral-400 hover:text-white"
            }`}
          >
            Semua
          </button>

          <button
            onClick={() => setStatusFilter("ready")}
            className={`px-4 py-1 rounded-full border transition ${
              statusFilter === "ready"
                ? "bg-green-400 text-black"
                : "border-neutral-700 text-neutral-400 hover:text-white"
            }`}
          >
            Ready
          </button>

          <button
            onClick={() => setStatusFilter("ongoing")}
            className={`px-4 py-1 rounded-full border transition ${
              statusFilter === "ongoing"
                ? "bg-yellow-400 text-black"
                : "border-neutral-700 text-neutral-400 hover:text-white"
            }`}
          >
            On Going
          </button>

        </div>

        {/* LIST */}
        <div className="space-y-16 transition-all duration-300">

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link href={`/read/${item.id}`} key={item.id}>

                <div className="flex gap-6 items-start group cursor-pointer">

                  {/* COVER */}
                  <div className="w-24 h-32 overflow-hidden rounded-md border border-neutral-800">
                    <img 
                      src={item.cover} 
                      alt={item.title}
                      className="w-full h-full object-cover transition group-hover:scale-105"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">

                    <h2 className="text-2xl group-hover:text-white transition">
                      {item.title}
                    </h2>

                    <p className="text-neutral-500 mt-3 max-w-xl group-hover:text-neutral-300 transition">
                      {item.excerpt}
                    </p>

                    {/* STATUS */}
                    <p
                      className={`text-xs mt-3 ${
                        item.status === "ready"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {item.status === "ready" ? "Ready" : "On Going"}
                    </p>

                  </div>

                </div>

              </Link>
            ))
          ) : (
            <p className="text-neutral-500 text-sm">
              Buku tidak ditemukan.
            </p>
          )}

        </div>

      </div>
    </main>
  );
}
