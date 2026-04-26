export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 backdrop-blur-md bg-black/40 sticky top-0 z-50">
      <div className="container flex justify-between items-center py-5 px-6">
        
        <h1 className="text-lg tracking-wide font-semibold">
          The Fragmen
        </h1>

        <div className="flex gap-8 text-sm text-neutral-500">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/library" className="hover:text-white">Library</a>
          <a href="/about" className="hover:text-white">About</a>
        </div>

      </div>
    </nav>
  );
}