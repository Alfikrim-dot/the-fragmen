"use client";

import Navbar from "../components/Navbar";
import { tulisan } from "../data/tulisan";
import Link from "next/link";
import { useState } from "react";

export default function Library() {
  const [search, setSearch] = useState("");

  const filtered = tulisan.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Navbar />

      <div className="container px-6 py-20 max-w-5xl mx-auto">

        {/* HEADER + SEARCH */}
        <div className="flex items-center justify-between mb-16">
          
          <h1 className="text-3xl">Library</h1>

          <input
            type="text"
            placeholder="Cari buku..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-full text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white w-52"
          />

        </div>

        {/* LIST */}
        <div className="space-y-16">

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link href={`/read/${item.id}`} key={item.id}>

                <div className="flex gap-6 items-start group cursor-pointer">

                  {/* COVER */}
                  <div className="w-24 h-32 overflow-hidden rounded-md border border-neutral-800">
                    <img 
                      src={item.cover} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">

                    <h2 className="text-2xl group-hover:text-white">
                      {item.title}
                    </h2>

                    <p className="text-neutral-500 mt-3 max-w-xl group-hover:text-neutral-300">
                      {item.excerpt}
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