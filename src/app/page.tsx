import HeroSection from "@/components/HeroSection";
import DestinationCards from "@/components/DestinationCards";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-anthracite">
      <HeroSection />
      <DestinationCards />
      
      {/* Bento-grid Footer & Request a Quote System */}
      <footer className="w-full bg-[#151518] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Start Your Journey</h2>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-8 max-w-md">
              We do not offer instant booking. We craft specialized tours based on your exact interests and demand density. Submit a request and let us organize the perfect boutique experience.
            </p>
            <form className="flex flex-col gap-4 max-w-md">
              <input type="email" placeholder="Your Email Address" className="bg-white/5 border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-turquoise transition-colors" />
              <button type="button" className="bg-brand-turquoise text-brand-anthracite font-sans text-xs tracking-[0.2em] font-bold py-4 hover:bg-white transition-colors">
                REQUEST A QUOTE
              </button>
            </form>
          </div>

          <div className="md:col-span-2 hidden md:block"></div>

          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="mb-12">
              <div className="w-10 h-10 border border-brand-turquoise rotate-45 mb-6" />
              <h3 className="font-serif text-2xl text-white mb-2">Seyyah Travel</h3>
              <p className="font-sans text-xs tracking-widest text-brand-turquoise uppercase">Authentic yet Modern</p>
            </div>
            
            <div>
              <p className="font-sans text-xs text-white/40 mb-2 uppercase tracking-widest">Verified Address</p>
              <address className="font-sans text-sm text-white/70 not-italic leading-relaxed">
                Atatürk Mahallesi, Estergon Caddesi no:24<br />
                Suryap Exen Kule Rezidans F Blok, Daire:18<br />
                Ümraniye / İstanbul
              </address>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] tracking-widest text-white/40 uppercase">
            © 2026 Seyyah Travel & Organisation. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-[10px] tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-brand-turquoise transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-turquoise transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
