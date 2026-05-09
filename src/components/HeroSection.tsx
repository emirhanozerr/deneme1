"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/app/home.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const destinations = [
  { id: 'egypt', name: 'Egypt', ghostText: 'Egypt', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/c34fba9c-e290-42d8-001f-4c097af0ee00/public' },
  { id: 'switzerland', name: 'Switzerland', ghostText: 'Swiss', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/d73b8bfa-b159-4eb4-d34d-8cd6e1791500/public' },
  { id: 'europe', name: 'Europe', ghostText: 'Europe', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/1afb262b-9d95-4bed-12b5-31d83a54d700/public' },
  { id: 'morocco', name: 'Morocco', ghostText: 'Morocco', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/d021f16a-8d45-434b-5e40-0e1fb5b74b00/public' },
  { id: 'tunisia', name: 'Tunisia', ghostText: 'Tunisia', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/3db16821-8274-422d-c4fc-f2854022ca00/public' },
  { id: 'algeria', name: 'Algeria', ghostText: 'Algeria', img: 'https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/f3e59801-d8f5-46f8-4890-361d0c370a00/public' }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostTextRef = useRef<HTMLDivElement>(null);
  const mobileGhostTextRef = useRef<HTMLDivElement>(null);

  const activeDest = destinations[activeIndex];

  // GSAP Scroll Parallax Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ghostTextRef.current) {
        gsap.to(ghostTextRef.current, {
          x: "-15vw",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (mobileGhostTextRef.current) {
        gsap.to(mobileGhostTextRef.current, {
          x: "-30vw",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]); 

  return (
    <section ref={containerRef} className={`${styles.heroContainer} isolate flex flex-col justify-between`}>
      {/* Background Image / Overlay - Crossfade Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-anthracite">
        {destinations.map((dest, idx) => (
          <div 
            key={dest.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={dest.img}
              alt={dest.name}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
              unoptimized={true}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-brand-anthracite/60 mix-blend-multiply z-10 pointer-events-none"></div>
        <div className={`${styles.cinematicOverlay} z-10 pointer-events-none`}></div>
      </div>

      {/* --- DESKTOP GHOST HEADLINE --- */}
      <div 
        ref={ghostTextRef}
        key={`desktop-ghost-${activeIndex}`} // force re-render for smooth text change
        className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 z-0 w-full whitespace-nowrap pointer-events-none select-none animate-fade-in"
      >
        <h1 className="font-serif text-[22vw] leading-none text-white/5 tracking-widest uppercase">
          {activeDest.ghostText}
        </h1>
      </div>

      {/* --- MOBILE GHOST HEADLINE --- */}
      <div 
        ref={mobileGhostTextRef}
        key={`mobile-ghost-${activeIndex}`}
        className="block md:hidden absolute top-1/2 left-0 -translate-y-1/2 z-0 w-full whitespace-nowrap pointer-events-none select-none animate-fade-in"
      >
        <h1 className="font-serif text-[40vw] leading-none text-white/10 tracking-wider uppercase ml-4">
          {activeDest.ghostText.substring(0, 4)}
        </h1>
      </div>

      {/* Top Navigation */}
      <nav className="relative z-20 flex justify-between items-start md:items-center px-6 md:px-12 py-6 md:py-8 w-full bg-transparent">
        {/* Logo Left */}
        <div className="flex flex-col items-center cursor-pointer mt-2 md:mt-0">
          <Image 
            src="https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/767458e5-267e-4998-890c-1de5a6a75c00/public"
            alt="Seyyah Travel Logo"
            width={120}
            height={60}
            className="w-24 md:w-32 h-auto object-contain"
            unoptimized={true}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Minimalist Menu (Desktop) */}
        <div className="hidden md:flex gap-10 font-sans text-[10px] tracking-[0.25em] font-medium text-white/90">
          <a href="#destinations" className="hover:text-brand-turquoise transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-turquoise hover:after:w-full after:transition-all">DESTINATIONS</a>
          <a href="/gallery" className="hover:text-brand-turquoise transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-turquoise hover:after:w-full after:transition-all">GALLERY</a>
          <a href="/tours" className="hover:text-brand-turquoise transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-turquoise hover:after:w-full after:transition-all">TOURS</a>
          <a href="/stories" className="hover:text-brand-turquoise transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-turquoise hover:after:w-full after:transition-all">STORIES</a>
        </div>

        {/* Right Localized Navigation (Desktop) */}
        <div className="hidden md:flex gap-4 md:gap-8 font-sans text-[10px] md:text-xs tracking-wider text-white/90 font-medium items-center">
          <button className="flex items-center gap-2 hover:text-brand-turquoise transition-colors">
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]"><span className="w-1.5 h-1.5 bg-current rounded-full" /></span> EN
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex flex-col gap-1.5 mt-2 cursor-pointer p-2 group">
          <div className="w-6 h-[1px] bg-white group-hover:bg-brand-turquoise transition-colors"></div>
          <div className="w-6 h-[1px] bg-white group-hover:bg-brand-turquoise transition-colors"></div>
          <div className="w-6 h-[1px] bg-white group-hover:bg-brand-turquoise transition-colors"></div>
        </div>
      </nav>

      {/* --- MOBILE ONLY: Top Content --- */}
      <div className="md:hidden relative z-10 w-full flex flex-col items-center pt-8">
        <h2 className="font-serif text-3xl text-white tracking-widest mb-2 text-center">SEYYAH<br/><span className="text-xl text-brand-turquoise">TRAVEL</span></h2>
      </div>

      {/* --- DESKTOP ONLY: Foreground Content --- */}
      <div className="hidden md:flex relative z-10 px-6 md:px-12 flex-col md:flex-row h-full pb-32 pointer-events-none">
        {/* Left Vertical Accents */}
        <div className="flex flex-col items-center justify-center w-16 h-full absolute left-12 top-0">
          <span className="font-sans text-[10px] tracking-[0.3em] -rotate-90 whitespace-nowrap uppercase mb-32 text-brand-turquoise/80">
            Explore
          </span>
          <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-turquoise animate-bounce" />
          </div>
        </div>

        {/* Main Centered Headline */}
        <div className="flex-1 flex flex-col justify-center pl-0 md:pl-32 max-w-3xl pointer-events-auto">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white mb-8 tracking-wide">
            Authentic<br /><span className="italic font-light text-brand-turquoise">yet</span> Modern
          </h2>
          <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed font-light max-w-md">
            We organize specialized boutique tours crafted around your true interests. Discover the world through the Seyyah lens.
          </p>
        </div>
      </div>

      {/* --- MOBILE ONLY: Bottom Content --- */}
      <div className="md:hidden relative z-20 w-full flex flex-col items-center justify-end pb-16 h-full">
        {/* Carousel Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-6 flex justify-between pointer-events-none">
          <svg 
            onClick={() => setActiveIndex(prev => prev === 0 ? destinations.length - 1 : prev - 1)}
            className="w-8 h-8 text-white pointer-events-auto cursor-pointer hover:text-brand-turquoise transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          <svg 
            onClick={() => setActiveIndex(prev => prev === destinations.length - 1 ? 0 : prev + 1)}
            className="w-8 h-8 text-white pointer-events-auto cursor-pointer hover:text-brand-turquoise transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>

        <h3 className="font-serif text-4xl text-[#C9A84C] mb-2 tracking-wide transition-all duration-500">{activeDest.name}</h3>
        <span className="font-sans text-xs text-white/70 mb-6 tracking-widest">Boutique Tours</span>
        <button className="font-sans text-[11px] tracking-[0.2em] text-brand-turquoise uppercase font-bold border border-brand-turquoise px-6 py-3 hover:bg-brand-turquoise hover:text-brand-anthracite transition-colors">REQUEST QUOTE</button>
      </div>

      {/* --- DESKTOP ONLY: Bottom Global Navigation --- */}
      <div className="hidden md:block relative z-20 w-full px-6 md:px-12 pb-12">
        <div className="flex justify-between items-end border-t border-white/10 pt-10">
          
          {destinations.map((dest, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={dest.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center relative cursor-pointer transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              >
                {/* Active Indicator & Name */}
                <span className={`font-serif tracking-wide transition-all duration-500 ${isActive ? 'text-xl md:text-2xl text-[#C9A84C]' : 'text-lg md:text-xl text-white hover:text-brand-turquoise'}`}>
                  {dest.name}
                </span>
                
                {/* Status text */}
                <span className={`font-sans text-[9px] md:text-[10px] tracking-[0.2em] mt-2 transition-all duration-500 ${isActive ? 'text-white/60' : 'text-white/50'}`}>
                  {isActive ? 'Upcoming' : 'Boutique'}
                </span>
                
                {/* Active accent items */}
                {isActive && (
                  <>
                    <span className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase font-bold mt-4 animate-fade-in">Discover</span>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-[#C9A84C] animate-fade-in" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
