"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import { tulisan } from "../../data/tulisan";
import { notFound } from "next/navigation";

export default function ReadPage() {
  const [focus, setFocus] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const params = useParams();

  const id = Number(params.id);
  const post = tulisan.find((item) => item.id === id);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;
      const progress = (scroll / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) return notFound();

  return (
    <main className={`${focus ? "bg-black" : ""}`}>
      {/* PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-white z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR (hilang saat fokus) */}
      {!focus && <Navbar />}

      {/* MODE FOCUS BUTTON */}
      <div className="max-w-5xl mx-auto px-6 mt-10 flex justify-end">
        <button
          onClick={() => setFocus(!focus)}
          className={`
          flex items-center gap-2 px-4 py-2 rounded-full text-sm
          border border-neutral-700
          transition-all duration-200
          ${
            focus
              ? "bg-white text-black shadow-lg"
              : "text-neutral-400 hover:text-white hover:border-neutral-500"
          }
        `}
        >
          <span className="text-xs">{focus ? "Keluar" : "Mode Baca"}</span>
        </button>
      </div>

      {/* ARTICLE */}
      <article
        className={`
          mx-auto px-6 py-16 transition-all duration-300
          ${focus ? "max-w-2xl text-lg leading-loose" : "max-w-3xl"}
        `}
      >
        {/* HEADER (hilang saat fokus biar clean) */}
        {!focus && (
          <div className="relative mb-20 text-center overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-center bg-cover opacity-40 scale-110"
              style={{ backgroundImage: `url(${post.cover})` }}
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 py-20 px-6">
              <h1 className="text-5xl font-bold leading-tight">{post.title}</h1>

              <p className="text-sm text-neutral-400 mt-4">
                oleh Alfikria Ramdhan
              </p>

              <p
                className={`mt-2 text-xs ${
                  post.status === "ready" ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {post.status === "ready" ? "Ready" : "On Going"}
              </p>
            </div>
          </div>
        )}

        {/* ISI */}
        <div className="text-neutral-300 space-y-6">
          {post.content.split("\n").map((para, i) => (
            <p key={i} className="leading-[1.9] tracking-[0.3px]">
              {para}
            </p>
          ))}
        </div>

        {/* FOOTER (hilang saat fokus) */}
        {!focus && (
          <div className="mt-20 border-t border-neutral-800 pt-10 text-center">
            <p className="text-neutral-500 text-sm mb-6">
              Ingin membaca versi lengkap?
            </p>

            {post.status === "ready" ? (
              <a
                href={post.pdf}
                target="_blank"
                className="inline-block px-6 py-3 border border-neutral-700 rounded-full hover:bg-white hover:text-black"
              >
                Baca Full Buku
              </a>
            ) : (
              <button
                disabled
                className="inline-block px-6 py-3 border border-neutral-700 rounded-full text-neutral-500 cursor-not-allowed"
              >
                Masih Dalam Penulisan
              </button>
            )}
          </div>
        )}
      </article>
    </main>
  );
}
