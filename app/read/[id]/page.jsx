import Navbar from "../../components/Navbar";
import { tulisan } from "../../data/tulisan";
import { notFound } from "next/navigation";

export default async function ReadPage({ params }) {
  const { id } = await params;
  const post = tulisan.find((item) => item.id === Number(id));
  if (!post) return notFound();

  return (
    <main>
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-24 fade-in">
        {/* HEADER BUKU */}
        <div className="relative mb-30 text-center overflow-hidden rounded-xl">
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-50 scale-110"
            style={{ backgroundImage: `url(${post.cover})` }}
          />

          {/* OVERLAY (biar readable) */}
          <div className="absolute inset-0 bg-black/70" />

          {/* CONTENT */}
          <div className="relative z-10 py-20 px-6">

            <h1 className="text-5xl font-bold leading-tight">{post.title}</h1>

            <p className="text-sm text-neutral-400 mb-2">By</p>

            <p className="text-neutral-400 mt-4">Alfikria Ramdhan</p>
          </div>
        </div>

        {/* ISI */}
        <div className="text-neutral-300 text-lg leading-relaxed space-y-6">
          {post.content.split("\n").map((para, i) => (
            <p key={i} className="italic text-neutral-500 mb-10 text-center">
              {para}
            </p>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-15 border-t border-neutral-800 pt-10 text-center">
          <p className="text-neutral-500 text-sm mb-6">
            Ingin membaca versi lengkap?
          </p>

          <a
            href={post.pdf}
            target="_blank"
            className="inline-block px-6 py-3 border border-neutral-700 rounded-full hover:bg-white hover:text-black"
          >
            Baca Full Buku
          </a>
        </div>
      </article>
    </main>
  );
}
