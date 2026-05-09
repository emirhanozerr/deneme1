import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-anthracite flex flex-col items-center justify-center p-8">
      <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide">Gallery</h1>
      <p className="font-sans text-brand-turquoise mb-12 tracking-widest text-sm">COMING SOON</p>
      <Link href="/" className="font-sans text-[10px] tracking-[0.2em] text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-brand-anthracite transition-all">
        BACK TO HOME
      </Link>
    </div>
  );
}
