import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Leaf, Sun, Droplets, Wind, Sprout,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Leaf, Sun, Droplets, Wind, Sprout];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      const sections = [philosophyRef, productRef, ecosystemRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative font-inter">
      {/* Subtle organic overlay */}
      <div className="organic-overlay" />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8"
        style={{ background: 'linear-gradient(180deg, rgba(15,31,15,0.9), transparent)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{config.icon}</span>
            <span className="font-caveat text-xl text-[#22c55e]">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#22c55e] transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden"
      >
        {/* Organic blob decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)' }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] uppercase text-[#22c55e] border border-[#22c55e]/30 rounded-full">
                The Verdant Wilds
              </span>
            </div>

            <h1 className="font-caveat text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6"
              style={{ color: '#f0fdf4' }}>
              Garden
              <br />
              <span className="text-[#22c55e]">Ghoul</span>
            </h1>

            <p className="text-[#94a3b8] text-base md:text-lg max-w-md mb-8 leading-relaxed">
              {config.tagline}. Where every mess is just compost waiting to happen.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-6 py-3 font-caveat text-lg tracking-wider transition-all hover:scale-105 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: '#0f1f0f',
                  boxShadow: '0 4px 20px rgba(34,197,94,0.25)',
                }}
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#94a3b8]/50 text-xs tracking-wider">
                Click the ghoul to grow!
              </span>
            </div>
          </div>

          {/* Right side - empty for mascot */}
          <div className="hidden md:flex items-center justify-center h-[50vh] relative">
            <div className="absolute w-56 h-56 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)' }} />
            <div className="font-caveat text-[14rem] text-[#22c55e] opacity-[0.03] select-none">
              G
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section id="philosophy" ref={philosophyRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1 hidden md:flex justify-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#22c55e]/30 to-transparent" />
            </div>

            <div className="md:col-span-10">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#22c55e] mb-6 block">
                Our Roots
              </span>
              <h2 className="font-caveat text-4xl md:text-6xl leading-tight mb-8"
                style={{ color: '#f0fdf4' }}>
                From soil
                <span className="text-[#22c55e]"> to soul</span>.
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mb-6">
                Nature doesn't rush, yet everything is accomplished. We believe the same
                about cleaning — gentle, organic, and deeply rooted in respect for the earth.
              </p>
              <p className="text-[#94a3b8]/70 leading-relaxed max-w-lg text-sm">
                Every product is formulated with botanical extracts and biodegradable ingredients.
                Because the cleanest home is one that honors the planet it sits on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE SEED BANK (PRODUCTS) ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 md:mb-16 text-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">
              The Seed Bank
            </span>
            <h2 className="font-caveat text-4xl md:text-6xl mb-4" style={{ color: '#f0fdf4' }}>
              Coming This Season
            </h2>
            <p className="text-[#94a3b8] max-w-md mx-auto text-sm">
              Cultivated with care. Harvested for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {config.products.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#22c55e', '#16a34a', '#4ade80', '#fbbf24', '#84cc16'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{
                    background: 'rgba(15, 31, 15, 0.6)',
                    border: '1px solid rgba(34, 197, 94, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}30`;
                    e.currentTarget.style.boxShadow = `0 8px 40px ${color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Seed packet top */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }} />

                  {product.comingSoon && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase"
                      style={{ color: '#0f1f0f', background: color }}>
                      Sprouting
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `${color}15` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="font-caveat text-2xl opacity-20" style={{ color }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>

                  <h3 className="font-caveat text-xl mb-2" style={{ color: '#f0fdf4' }}>
                    {product.name}
                  </h3>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">
                    {product.description || 'Organic formulation. Earth-safe. Home-happy.'}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#22c55e]/10 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#94a3b8]/40">
                      Botanical Blend
                    </span>
                    <Leaf className="w-3 h-3" style={{ color: `${color}60` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THE ECOSYSTEM (UNIVERSE) ===== */}
      <section ref={ecosystemRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">
              The Ecosystem
            </span>
            <h2 className="font-caveat text-4xl md:text-6xl mb-4" style={{ color: '#f0fdf4' }}>
              The GHOULVERSE
            </h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto text-sm">
              Eight species. One thriving ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isNative = ['garden', 'goo'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-5 md:p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: isNative
                      ? `linear-gradient(135deg, ${g.color}08, transparent)`
                      : 'rgba(15, 31, 15, 0.4)',
                    border: `1px solid ${isNative ? g.color + '20' : 'rgba(34, 197, 94, 0.06)'}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${g.color}30`;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${g.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isNative ? `${g.color}20` : 'rgba(34, 197, 94, 0.06)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isNative && (
                    <span className="absolute top-2 right-2 text-[8px] font-medium tracking-wider uppercase px-1.5 py-0.5 rounded-full"
                      style={{ color: g.color, background: `${g.color}10` }}>
                      Native
                    </span>
                  )}

                  <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-500">
                    {g.icon}
                  </div>

                  <h3 className="font-caveat text-sm mb-0.5" style={{ color: '#f0fdf4' }}>
                    {g.name}
                  </h3>
                  <p className="text-[#94a3b8]/60 text-[10px] uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#94a3b8]/30 uppercase tracking-wider block mt-1">
                      Dormant
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="reveal text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-caveat text-lg tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: '#0f1f0f',
                boxShadow: '0 4px 24px rgba(34,197,94,0.2)',
              }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal relative p-10 md:p-16 text-center overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(251,191,36,0.03))',
              border: '1px solid rgba(34, 197, 94, 0.1)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg, #22c55e, #fbbf24)' }} />

            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#22c55e' }} />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
              style={{ background: '#fbbf24' }} />

            <Gamepad2 className="reveal w-10 h-10 text-[#22c55e] mx-auto mb-6" />

            <h2 className="reveal font-caveat text-4xl md:text-6xl mb-4 relative z-10" style={{ color: '#f0fdf4' }}>
              Play GHOULVERSE
            </h2>

            <p className="reveal text-[#94a3b8] max-w-lg mx-auto mb-8 relative z-10 text-sm">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-3.5 font-caveat text-lg tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: '#0f1f0f',
                boxShadow: '0 4px 24px rgba(34,197,94,0.25)',
              }}
            >
              <Gamepad2 className="w-4 h-4" />
              Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">
              Join the Garden Club
            </span>
            <h2 className="font-caveat text-4xl md:text-6xl mb-4" style={{ color: '#f0fdf4' }}>
              {config.cta.headline}
            </h2>
            <p className="text-[#94a3b8] text-sm">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-3.5 text-sm outline-none transition-all bg-[#0f1f0f]/60 rounded-full border border-[#22c55e]/20 focus:border-[#22c55e]/40"
              style={{ color: '#f0fdf4' }}
            />
            <button
              className="px-8 py-3.5 font-caveat text-lg tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: '#0f1f0f',
                boxShadow: '0 4px 20px rgba(34,197,94,0.2)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#22c55e', '#16a34a', '#fbbf24'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(15, 31, 15, 0.6)',
                    border: `1px solid ${colors[i]}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}20`;
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#22c55e] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#94a3b8]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#fbbf24] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#94a3b8]/30 text-xs tracking-wider">
            &copy; 2025 <span className="font-caveat text-[#22c55e]/50">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#94a3b8]/20 text-[10px] mt-2 tracking-wider">
            {config.name} is part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'} target="_blank" rel="noopener noreferrer"
              className="hover:text-[#22c55e] transition-colors">
              GHOULVERSE
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
