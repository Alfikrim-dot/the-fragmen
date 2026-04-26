import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="max-w-2xl mx-auto px-6 py-24 fade-in">
        
        {/* TITLE */}
        <h1 className="text-4xl mb-10 leading-tight">
          About Me
        </h1>

        {/* OPENING QUOTE */}
        <p className="text-neutral-500 italic mb-12">
          “ Tidak semua yang ditulis berasal dari jawaban—
          sebagian besar adalah bentuk bertahan. ”
        </p>

        {/* CONTENT */}
        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
          
          <p>
            The Fragmen adalah ruang dari potongan pikiran—
            tempat di mana hal-hal yang tidak selesai tetap dibiarkan ada.
          </p>

          <p>
            Ini bukan tentang jawaban, melainkan tentang proses memahami.
            Tentang bagaimana seseorang mencoba merangkai ulang dirinya,
            setelah berkali-kali retak oleh hal yang tidak bisa dikendalikan.
          </p>

          <p>
            Ditulis oleh seseorang yang pernah hidup dalam standar,
            lalu perlahan belajar menerima bahwa tidak semua hal
            harus sempurna untuk tetap bermakna.
          </p>

        </div>

        {/* AUTHOR */}
        <div className="mt-16 pt-10 border-t border-neutral-800">
          
          <h2 className="text-xl mb-2">Alfikria Ramdhan</h2>

          <p className="text-neutral-500 text-sm">
            Penulis, Pengamat diri, dan Seseorang yang masih belajar memahami hidup
          </p>

        </div>

      </section>
    </main>
  );
}