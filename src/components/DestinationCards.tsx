"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const destinations = [
  { id: 1, name: "Morocco", desc: "Colors of the Sahara", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop", style: "md:col-span-8 md:row-span-2 h-[60vh]" },
  { id: 2, name: "Tunisia", desc: "Mediterranean Charm", img: "https://images.unsplash.com/photo-1542051812871-757500850028?q=80&w=800&auto=format&fit=crop", style: "md:col-span-4 md:row-span-1 h-[30vh]" },
  { id: 3, name: "Algeria", desc: "Hidden Wonders", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop", style: "md:col-span-4 md:row-span-1 h-[30vh]" },
  { id: 4, name: "Egypt", desc: "Timeless Legacy", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop", style: "md:col-span-4 md:row-span-2 h-[60vh] md:-mt-10" },
  { id: 5, name: "Switzerland", desc: "Alpine Prestige", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop", style: "md:col-span-8 md:row-span-1 h-[40vh]" },
];

export default function DestinationCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".dest-card");
      
      cards.forEach((card, i) => {
        const img = card.querySelector(".dest-img");
        
        // Vertical Staggered Reveal
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );

        // Scale-down effect on images
        if (img) {
          gsap.fromTo(img,
            { scale: 1.3 },
            {
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 1,
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="destinations" className="w-full bg-brand-anthracite py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="font-sans text-[10px] tracking-[0.3em] text-brand-turquoise uppercase mb-4">Curated Experiences</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">Our Destinations</h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-min">
          {destinations.map((dest) => (
            <div key={dest.id} className={`dest-card relative overflow-hidden group cursor-pointer ${dest.style}`}>
              <div className="absolute inset-0 bg-brand-anthracite/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-anthracite/90 via-transparent to-transparent z-10" />
              
              <div 
                className="dest-img w-full h-full bg-cover bg-center origin-center"
                style={{ backgroundImage: `url(${dest.img})` }}
              />

              <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">{dest.name}</h3>
                  <p className="font-sans text-xs tracking-widest text-white/70 uppercase">{dest.desc}</p>
                </div>
                <button className="font-sans text-[10px] tracking-[0.2em] text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-brand-anthracite transition-all whitespace-nowrap self-start md:self-auto backdrop-blur-sm">
                  EXPRESS INTEREST
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
