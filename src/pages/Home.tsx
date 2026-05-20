import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Flower2, Sprout, TreePine, Sun,
  FlaskConical, Leaf, Hammer, Package, Star,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Flower2, Sprout, TreePine, Sun, Sun];
const CATEGORY_TABS = [
  { key: 'core' as const, label: 'Core Range', icon: Star },
  { key: 'pro' as const, label: 'Pro Range', icon: FlaskConical },
  { key: 'tool' as const, label: 'Tools', icon: Hammer },
  { key: 'refill' as const, label: 'Refills', icon: Package },
  { key: 'limited' as const, label: 'Limited Drops', icon: Leaf },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const aftermathRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          x: -60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      const sections = [aftermathRef, scienceRef, productRef, lineupRef, gameRef, portfolioRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
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

  const filteredProducts = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-mono bg-[#fefce8]">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-[#fefce8]/80 backdrop-blur-sm border-b border-[#22c55e]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#22c55e] flex items-center justify-center">
              <span className="text-sm">{config.icon}</span>
            </div>
            <span className="font-mono text-sm md:text-base tracking-widest text-[#22c55e] uppercase">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#16a34a] transition-colors"
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
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#22c55e]/30 text-[#22c55e] bg-[#22c55e]/5">
                The Verdant Wilds
              </span>
            </div>

            <h1 className="font-mono text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-6"
              style={{
                color: '#22c55e',
              }}>
              GARDEN
              <br />
              <span style={{ color: '#16a34a' }}>GHOUL</span>
            </h1>

            <p className="text-[#78716c] text-base md:text-lg max-w-md mb-8 leading-relaxed">
              From seed to sanctuary. Our formulations bring the wild into your world —
              nurturing soil, protecting growth, and celebrating every bloom.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#aftermath"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
                }}
              >
                Explore the Wild
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#78716c]/50 text-xs tracking-wider">
                Click the ghoul to grow!
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[60vh] relative">
            <div
              className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)' }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #84cc16, transparent 70%)', animation: 'float-around 8s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ===== THE AFTERMATH ===== */}
      <section id="aftermath" ref={aftermathRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 md:mb-24">
            <h2 className="font-mono text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ color: '#292524' }}>
              THE GARDEN SLEEPS.
              <br />
              <span className="text-[#22c55e]">
                THE SOIL AWAKENS.
              </span>
            </h2>
            <p className="text-[#78716c] text-lg max-w-xl">
              Compacted clay that chokes roots. Aphid invasions at dawn. Weeds that
              laugh at your trowel. The wild doesn't rest — and neither do we.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Flower2, value: '∞', label: 'Seeds Planted', color: '#22c55e' },
              { icon: Sprout, value: '0', label: 'Weeds Survived', color: '#16a34a' },
              { icon: TreePine, value: '100%', label: 'Growth Rate', color: '#84cc16' },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal relative p-6 md:p-8 border-2 border-dashed"
                style={{
                  borderColor: `${stat.color}30`,
                  background: 'rgba(255, 255, 240, 0.8)',
                }}
              >
                <div className="absolute -top-3 left-4 px-2 text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: stat.color, background: '#fefce8' }}>
                  Verified
                </div>
                <stat.icon className="w-6 h-6 mb-4" style={{ color: stat.color }} />
                <div className="font-mono text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#22c55e]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#22c55e]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e]">
                Proprietary Technology
              </span>
            </div>
            <h2 className="font-mono text-4xl md:text-6xl text-[#292524] mb-4">
              {config.science.title}
            </h2>
            <p className="text-[#22c55e] text-xl md:text-2xl font-mono mb-6">
              {config.science.subtitle}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="text-[#78716c] text-base leading-relaxed">
              {config.science.description}
            </p>
            <p className="text-[#78716c]/70 text-sm leading-relaxed">
              {config.science.adaptation}
            </p>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-5 border-2 border-dashed text-center"
                style={{ borderColor: '#22c55e30', background: 'rgba(255,255,240,0.8)' }}>
                <div className="font-mono text-2xl md:text-3xl text-[#22c55e] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-[10px] tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS - TABBED BROWSER ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 md:mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">
              Product Architecture
            </span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-4">
              THE GREENHOUSE
            </h2>
            <p className="text-[#78716c] max-w-md">
              Five product lines. Nine formulations. One mission: grow wild, grow free.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,240,0.8)',
                    color: isActive ? '#fff' : '#78716c',
                    border: isActive ? 'none' : '2px dashed #22c55e30',
                    boxShadow: isActive ? '0 4px 15px rgba(34,197,94,0.2)' : 'none',
                  }}
                >
                  <tab.icon className="w-3 h-3" />
                  {tab.label}
                  <span className="text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#22c55e', '#16a34a', '#84cc16', '#22c55e', '#16a34a'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 border-2 border-dashed transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${color}30`,
                    background: 'rgba(255,255,240,0.9)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Torn edge effect */}
                  <div className="absolute -top-2 left-0 right-0 h-2 opacity-30"
                    style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 3px, ${color}20 3px, ${color}20 6px)` }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: `${color}40` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 border"
                      style={{ color, borderColor: `${color}30` }}>
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-mono text-lg text-[#292524] mb-1 tracking-wide uppercase">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-[#22c55e] text-xs font-bold mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-[#78716c] text-xs leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {product.heroIngredient && (
                    <div className="mb-3">
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/50">
                        Powered by
                      </span>
                      <span className="text-[10px] font-bold ml-2" style={{ color }}>
                        {product.heroIngredient}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-1 mb-4">
                    {product.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-[10px] text-[#78716c]/70">
                        <span className="w-1 h-1 rounded-full" style={{ background: color }} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: `${color}15` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/50">
                      {product.volume}
                    </span>
                    <span className="text-sm font-bold font-mono" style={{ color }}>
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LINEUP (UNIVERSE) ===== */}
      <section ref={lineupRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#16a34a] mb-4 block">
              The Wild Bunch
            </span>
            <h2 className="font-mono text-4xl md:text-6xl text-[#292524] mb-4">
              THE GHOULVERSE
            </h2>
            <p className="text-[#78716c] max-w-lg mx-auto">
              Eight legendary spirits. One wild universe. Discover them all.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isHeadliner = ['goo', 'garden'].includes(g.id);
              const isSpecial = ['beauty', 'zen'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-4 md:p-6 border-2 border-dashed transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    borderColor: isHeadliner ? `${g.color}50` : `${g.color}20`,
                    background: isHeadliner
                      ? `linear-gradient(135deg, ${g.color}10, transparent)`
                      : 'rgba(255,255,240,0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.color;
                    e.currentTarget.style.boxShadow = `0 8px 25px ${g.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHeadliner ? `${g.color}50` : `${g.color}20`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isHeadliner && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}50` }}>
                      Headliner
                    </div>
                  )}
                  {isSpecial && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}40` }}>
                      Special
                    </div>
                  )}

                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {g.icon}
                  </div>

                  <h3 className="font-mono text-xs md:text-sm text-[#292524] tracking-wider mb-0.5 uppercase">
                    {g.name}
                  </h3>
                  <p className="text-[#78716c]/60 text-[10px] uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#78716c]/40 uppercase tracking-wider block mt-1">
                      TBA
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
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                boxShadow: '0 4px 30px rgba(34,197,94,0.3)',
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
        <div className="max-w-5xl mx-auto">
          <div
            className="reveal relative p-8 md:p-16 text-center overflow-hidden border-2 border-dashed"
            style={{
              borderColor: '#22c55e30',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(22,163,74,0.05))',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 opacity-30"
              style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #22c55e20 3px, #22c55e20 6px)' }} />

            <Gamepad2 className="reveal w-12 h-12 text-[#22c55e] mx-auto mb-6" />

            <h2 className="reveal font-mono text-4xl md:text-6xl text-[#292524] mb-4">
              PLAY GHOULVERSE
            </h2>

            <p className="reveal text-[#78716c] max-w-xl mx-auto mb-8 text-sm md:text-base">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-4 font-mono text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                boxShadow: '0 4px 30px rgba(34,197,94,0.3)',
              }}
            >
              <Gamepad2 className="w-5 h-5" />
              PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO STRIP ===== */}
      <section ref={portfolioRef} className="relative py-16 md:py-24 px-4 md:px-8 border-t border-[#22c55e]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78716c]/50 mb-2 block">
              The House of GHOUL
            </span>
            <h3 className="font-mono text-2xl md:text-3xl text-[#292524]">
              THE GHOULVERSE PORTFOLIO
            </h3>
          </div>

          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              const productCount = g.id === config.id ? config.products.length : '-';

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center p-3 md:p-4 transition-all duration-300"
                  style={{
                    background: isActive ? `${g.color}10` : 'rgba(255,255,240,0.5)',
                    border: isActive ? `2px solid ${g.color}` : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = `${g.color}30`;
                      e.currentTarget.style.background = `${g.color}05`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.background = 'rgba(255,255,240,0.5)';
                    }
                  }}
                >
                  <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <p className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-[#292524] mb-0.5">
                    {g.name.replace(' GHOUL', '')}
                  </p>
                  <p className="text-[8px] text-[#78716c]/40 uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {isActive && (
                    <span className="text-[8px] mt-1 inline-block px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}30` }}>
                      {productCount} Products
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">
              {config.id === 'party' ? 'Guest List' : 'Investor Relations'}
            </span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#78716c]">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-mono text-sm text-[#292524] placeholder:text-[#78716c]/40 outline-none transition-all bg-transparent border-2 border-dashed"
              style={{ borderColor: '#22c55e30' }}
            />
            <button
              className="px-8 py-4 font-mono text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#22c55e', '#16a34a', '#84cc16'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border-2 border-dashed"
                  style={{
                    borderColor: `${colors[i]}30`,
                    background: 'rgba(255,255,240,0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors[i];
                    e.currentTarget.style.boxShadow = `0 4px 15px ${colors[i]}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#22c55e] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#78716c]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#16a34a] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#78716c]/30 text-xs tracking-wider font-mono">
            &copy; 2025 <span className="font-mono text-[#22c55e]/60">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#78716c]/20 text-[10px] mt-2 tracking-wider font-mono">
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
