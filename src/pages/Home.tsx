import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Flower2, Sprout, TreePine, Sun,
  Briefcase, Building2,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';
import GardenParticles from '@/components/GardenParticles';
import EcosystemMap from '@/components/EcosystemMap';
import MarketStats from '@/components/MarketStats';
import IPBadge from '@/components/IPBadge';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import InvestorCTA from '@/components/InvestorCTA';

gsap.registerPlugin(ScrollTrigger);

const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');

const PRODUCT_ICONS = [Flower2, Sprout, TreePine, Sun, Sun];
const TABS = [
  { key: 'core' as const, label: 'Core' },
  { key: 'pro' as const, label: 'Pro' },
  { key: 'tool' as const, label: 'Tools' },
  { key: 'refill' as const, label: 'Refills' },
  { key: 'limited' as const, label: 'Limited' },
];

function OrganicBlob({ className, color }: { className?: string; color: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] blur-3xl ${className || ''}`}
      style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }} />
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const wildRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const groveRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: elements grow in like plants
      gsap.from('.hero-grow', {
        scale: 0.8,
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Wind sway on headings
      gsap.to('.sway', {
        rotation: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Organic blob drift
      gsap.to('.blob-drift', {
        x: 30,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll reveals with gentle ease
      [wildRef, scienceRef, productRef, groveRef, gameRef, portfolioRef, ctaRef, ecosystemRef, marketRef, ipRef, roadmapRef].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-mono min-h-screen overflow-x-hidden" style={{ background: '#fefce8' }}>
      {/* Organic blobs */}
      <OrganicBlob className="blob-drift w-96 h-96 -top-20 -left-20" color="#22c55e" />
      <OrganicBlob className="blob-drift w-80 h-80 top-1/3 -right-20" color="#84cc16" />
      <OrganicBlob className="blob-drift w-72 h-72 bottom-20 left-1/4" color="#16a34a" />

      {/* Subtle grain texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <GardenParticles />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10"
        style={{ background: 'rgba(254,252,232,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px dashed rgba(34,197,94,0.15)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/ghoul_logo.png" alt={config.name} className="w-9 h-9 object-contain" draggable={false} />
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#22c55e]">{config.name}</span>
          </div>
          <a href="#ecosystem" className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#22c55e] transition-colors">
            <Briefcase className="w-3 h-3" /> Investors
          </a>
          <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#16a34a] transition-colors">
            GHOULVERSE <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          <div className="relative z-10">
            <div className="hero-grow mb-6 flex flex-wrap items-center gap-3">
              <a href="https://www.ghoulverse.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.4em] uppercase border-2 border-[#f59e0b]/40 text-[#f59e0b] hover:border-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Building2 className="w-3 h-3" />
                House of GHOUL
              </a>
              <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] px-3 py-1.5 border-2 border-dashed border-[#22c55e]/30">
                The Verdant Wilds
              </span>
            </div>

            <h1 className="hero-grow font-mono leading-[0.85] mb-8">
              <span className="sway block text-[14vw] lg:text-[9rem] text-[#22c55e] origin-bottom">GARDEN</span>
              <span className="sway block text-[14vw] lg:text-[9rem] text-[#16a34a] origin-bottom -mt-2">GHOUL</span>
            </h1>

            <p className="hero-grow text-[#78716c] text-base max-w-md mb-10 leading-relaxed">
              From seed to sanctuary. Our formulations bring the wild into your world — nurturing soil, protecting growth, celebrating every bloom.
            </p>

            <div className="hero-grow flex items-center gap-4">
              <a href="#greenhouse" className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-wider uppercase text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.25)' }}>
                Explore the Wild <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[#78716c]/40 text-xs tracking-wider">Click the ghoul to grow!</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square relative">
              {/* Concentric organic rings */}
              {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
                <div key={i} className="absolute inset-0 rounded-full border-2 border-dashed transition-all duration-1000"
                  style={{
                    borderColor: `rgba(34,197,94,${0.15 - i * 0.03})`,
                    transform: `scale(${scale})`,
                    animation: `spin ${20 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  }} />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/ghoul_mascot.png" alt="GardenGhoul mascot" className="w-full h-full object-contain" draggable={false} style={{ animation: 'ghost-bob 2.5s ease-in-out infinite, ghost-sway 3.5s ease-in-out infinite' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE WILD ===== */}
      <section ref={wildRef} className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-6 leading-tight">
              The garden sleeps.<br />
              <span className="text-[#22c55e]">The soil awakens.</span>
            </h2>
            <p className="text-[#78716c] text-base max-w-lg leading-relaxed">
              Compacted clay that chokes roots. Aphid invasions at dawn. Weeds that laugh at your trowel. The wild doesn't rest — and neither do we.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Flower2, value: '∞', label: 'Seeds Planted', color: '#22c55e' },
              { icon: Sprout, value: '0', label: 'Weeds Survived', color: '#16a34a' },
              { icon: TreePine, value: '100%', label: 'Growth Rate', color: '#84cc16' },
              { icon: Building2, value: '6', label: 'HOUSE OF GHOUL', color: '#f59e0b' },
            ].map((stat, i) => (
              <div key={i} className="reveal group relative p-8 border-2 border-dashed transition-all duration-500 hover:-translate-y-1"
                style={{ borderColor: `${stat.color}25`, background: 'rgba(255,255,240,0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = stat.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${stat.color}25`; }}>
                <div className="absolute -top-2 left-6 px-2 text-[9px] font-bold tracking-wider uppercase" style={{ color: stat.color, background: '#fefce8' }}>
                  Verified
                </div>
                <stat.icon className="w-7 h-7 mb-5" style={{ color: stat.color }} />
                <div className="font-mono text-4xl mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[#78716c] text-xs tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section ref={ecosystemRef} id="ecosystem" className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Ecosystem</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">The GHOULVERSE Map</h2>
            <p className="text-[#78716c] max-w-md mx-auto">Eight realms. One universe. Explore the full ecosystem.</p>
          </div>
          <div className="reveal">
            <EcosystemMap />
          </div>
        </div>
      </section>

      {/* ===== SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Proprietary Technology</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">The Science</h2>
            <p className="font-mono text-lg text-[#22c55e]">{config.science.subtitle}</p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border-2 border-dashed" style={{ borderColor: 'rgba(34,197,94,0.15)', background: 'rgba(255,255,240,0.5)' }}>
              <p className="text-[#78716c] leading-relaxed">{config.science.description}</p>
            </div>
            <div className="p-8 border-2 border-dashed" style={{ borderColor: 'rgba(22,163,74,0.1)', background: 'rgba(255,255,240,0.3)' }}>
              <p className="text-[#78716c]/70 text-sm leading-relaxed">{config.science.adaptation}</p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-6 text-center border-2 border-dashed" style={{ borderColor: 'rgba(34,197,94,0.15)', background: 'rgba(255,255,240,0.5)' }}>
                <div className="font-mono text-2xl text-[#22c55e] mb-1">{stat.value}</div>
                <div className="text-[#78716c] text-[10px] tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IP ===== */}
      <section ref={ipRef} className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Intellectual Property</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">Protected Assets</h2>
            <p className="text-[#78716c] max-w-md mx-auto">Trademarked, defended, and growing in value.</p>
          </div>
          <div className="reveal">
            <IPBadge />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productRef} id="greenhouse" className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Product Architecture</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">The Greenhouse</h2>
            <p className="text-[#78716c] max-w-md mx-auto">Five lines. Nine formulations. Grow wild, grow free.</p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className="px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all border-2 border-dashed min-h-11"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,240,0.6)',
                    color: isActive ? '#fff' : '#78716c',
                    borderColor: isActive ? 'transparent' : 'rgba(34,197,94,0.2)',
                    boxShadow: isActive ? '0 4px 15px rgba(34,197,94,0.2)' : 'none',
                  }}>
                  {tab.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Product Grid - Seed packet style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#22c55e', '#16a34a', '#84cc16', '#22c55e', '#16a34a'];
              const color = colors[i % colors.length];

              return (
                <div key={i} className="reveal group relative p-6 pt-8 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,240,0.9), rgba(255,255,240,0.6))',
                    border: `2px dashed ${color}20`,
                    borderTop: `4px solid ${color}`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 12px 30px ${color}10`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = 'none'; }}>

                  {/* Torn paper top edge */}
                  <div className="absolute -top-1 left-0 right-0 h-2 opacity-40"
                    style={{ backgroundImage: `repeating-linear-gradient(90deg, ${color}30, ${color}30 4px, transparent 4px, transparent 8px)` }} />

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center" style={{ borderColor: `${color}30` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 border-2 border-dashed" style={{ color, borderColor: `${color}25` }}>
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-mono text-base text-[#292524] mb-1 uppercase tracking-wide break-words">{product.name}</h3>
                  <p className="text-[#22c55e] text-xs font-bold mb-3">{product.tagline}</p>
                  <p className="text-[#78716c] text-xs leading-relaxed mb-4">{product.description}</p>

                  {product.heroIngredient && (
                    <div className="mb-3">
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/40">Powered by </span>
                      <span className="text-[10px] font-bold" style={{ color }}>{product.heroIngredient}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((feat, fi) => (
                      <span key={fi} className="text-[9px] px-2 py-0.5 border border-dashed" style={{ color: '#78716c', borderColor: `${color}20` }}>{feat}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t-2 border-dashed" style={{ borderColor: `${color}10` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/40">{product.volume}</span>
                    <span className="text-sm font-bold font-mono" style={{ color }}>{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MARKET ===== */}
      <section ref={marketRef} className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Market Intelligence</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">By The Numbers</h2>
            <p className="text-[#78716c] max-w-md mx-auto">Data-driven insights across the House of GHOUL.</p>
          </div>
          <div className="reveal">
            <MarketStats />
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section ref={roadmapRef} className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Roadmap</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">Where We're Growing</h2>
            <p className="text-[#78716c] max-w-md mx-auto">From seedling to canopy — our journey ahead.</p>
          </div>
          <div className="reveal">
            <RoadmapTimeline />
          </div>
        </div>
      </section>

      {/* ===== GROVE (LINEUP) ===== */}
      <section ref={groveRef} className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#16a34a] mb-4 block">The Wild Bunch</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-3">The Ghoulverse</h2>
            <p className="text-[#78716c] max-w-md mx-auto">Eight legendary spirits. One wild universe.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank" rel="noopener noreferrer"
                className="reveal group p-6 text-center transition-all duration-500 hover:-translate-y-2 border-2 border-dashed"
                style={{ borderColor: `${g.color}15`, background: 'rgba(255,255,240,0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = g.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${g.color}15`; }}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">{g.icon}</div>
                <h3 className="font-mono text-xs text-[#292524] tracking-wider uppercase">{g.name}</h3>
                <p className="text-[#78716c]/50 text-[10px] uppercase tracking-wider mt-1">{g.realm}</p>
                {!g.live && <span className="text-[9px] text-[#78716c]/30 mt-1 block">TBA</span>}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 font-mono text-xs tracking-wider uppercase text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.25)' }}>
              Enter the GHOULVERSE <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="reveal relative p-10 md:p-16 text-center overflow-hidden border-2 border-dashed"
            style={{ borderColor: 'rgba(34,197,94,0.15)', background: 'linear-gradient(135deg, rgba(34,197,94,0.03), rgba(22,163,74,0.03))' }}>
            <div className="absolute top-0 left-0 right-0 h-1.5 opacity-30"
              style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22c55e20, #22c55e20 4px, transparent 4px, transparent 8px)' }} />
            <Gamepad2 className="w-12 h-12 text-[#22c55e] mx-auto mb-6" />
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-4">Play GHOULVERSE</h2>
            <p className="text-[#78716c] max-w-lg mx-auto mb-8">Pilot {config.name} through the Void. Battle bacteria, unlock all 8 ghouls, claim the leaderboard.</p>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-mono text-xs tracking-wider uppercase text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.25)' }}>
              <Gamepad2 className="w-4 h-4" /> Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={portfolioRef} className="relative py-20 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78716c]/40 mb-2 block">The House of GHOUL</span>
            <h3 className="font-mono text-2xl text-[#292524]">The Portfolio</h3>
          </div>
          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              return (
                <a key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank" rel="noopener noreferrer"
                  className="group text-center p-3 transition-all duration-300 border-2 border-dashed"
                  style={{ background: isActive ? `${g.color}08` : 'rgba(255,255,240,0.4)', borderColor: isActive ? g.color : 'transparent' }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = `${g.color}25`; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'transparent'; }}>
                  <div className="text-2xl group-hover:scale-110 transition-transform">{g.icon}</div>
                  <p className="text-[9px] font-bold tracking-wider uppercase text-[#292524] mt-1">{g.name.replace(' GHOUL', '')}</p>
                  {isActive && <span className="text-[8px] mt-0.5 inline-block" style={{ color: g.color }}>{config.products.length} Products</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INVESTOR CTA ===== */}
      <section className="relative py-28 md:py-40 px-6 md:px-10" style={{ borderTop: '2px dashed rgba(34,197,94,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <InvestorCTA />
        </div>
      </section>

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#22c55e] mb-4 block">Stay in the Loop</span>
            <h2 className="font-mono text-4xl md:text-5xl text-[#292524] mb-4">{config.cta.headline}</h2>
            <p className="text-[#78716c]">{config.cta.subheadline}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input type="email" placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-mono text-sm text-[#292524] placeholder:text-[#78716c]/30 outline-none bg-transparent border-2 border-dashed transition-all focus:border-[#22c55e]"
              style={{ borderColor: 'rgba(34,197,94,0.15)' }} />
            <button className="px-8 py-4 font-mono text-xs tracking-wider uppercase text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.25)' }}>
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#22c55e', '#16a34a', '#84cc16'];
              return (
                <div key={i} className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border-2 border-dashed"
                  style={{ borderColor: `${colors[i]}20`, background: 'rgba(255,255,240,0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors[i]; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors[i]}20`; }}>
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </div>
              );
            })}
          </div>

          <div className="reveal mb-8 flex items-center justify-center gap-4 text-xs font-mono">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#22c55e] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Ghost className="w-3 h-3" /> Explore GHOULVERSE
            </a>
            <span className="text-[#78716c]/20">|</span>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#16a34a] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Gamepad2 className="w-3 h-3" /> Play GHOULVERSE
            </a>
            <span className="text-[#78716c]/20">|</span>
            <a href="#ecosystem"
              className="text-[#78716c] hover:text-[#f59e0b] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Briefcase className="w-3 h-3" /> Investors
            </a>
          </div>

          <div className="reveal mb-4 flex items-center justify-center gap-3 text-[10px] tracking-wider uppercase text-[#78716c]/30">
            <a href="/privacy.html" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms.html" className="hover:text-[#22c55e] transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="/cookies.html" className="hover:text-[#22c55e] transition-colors">Cookie Policy</a>
          </div>

          <p className="reveal text-[#78716c]/20 text-xs tracking-wider font-mono">
            &copy; 2025 <span className="font-mono text-[#22c55e]/40">{config.name}</span> — Part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
