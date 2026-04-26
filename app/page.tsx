import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="container grid md:grid-cols-2 items-center h-[90vh] px-6 gap-10">
        {/* KIRI */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            The Fragmen
          </h1>

          <p className="mt-6 text-neutral-500 max-w-md text-lg leading-relaxed">
            Serpihan jiwa dalam sebuah ruang aksara
          </p>
          <p className="mt-6 text-neutral-500 max-w-md text-lg leading-relaxed">
            Tempat yang tidak selalu utuh, tapi tetap bermakna
          </p>

          <a
            href="/library"
            className="mt-10 inline-block px-6 py-3 border border-neutral-700 rounded-full text-sm hover:bg-white hover:text-black"
          >
            Masuk ke Pustaka
          </a>
        </div>

        {/* KANAN */}
        <div className="relative hidden md:block">
          <img src="/images/logoWeb.png" alt="visual" className="opacity-70 " />

          {/* efek glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </section>
    </main>
  );
}
