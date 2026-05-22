import { useEffect, useRef, useState, useCallback } from 'react';
import { useGardenCursor } from '@/hooks/useGardenCursor';

interface Leaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface MiniGardenGhoul {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
}

interface PollenPuff {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const LEAF_COLORS = ['#22c55e', '#16a34a', '#4ade80', '#fbbf24', '#84cc16', '#15803d'];
const SPEECH_LINES = [
  "Bloom beautifully!",
  "Let's get growing!",
  "Nature always wins!",
  "Plant the seed!",
  "Green thumbs up!",
  "Time to flourish!",
];

export function GardenGhostSVG({ expression, isHovered }: {
  expression: number;
  isHovered: boolean;
}) {
  const hoverScale = isHovered ? 1.05 : 1;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 ${isHovered ? 20 : 12}px rgba(34,197,94,${isHovered ? 0.4 : 0.25})) drop-shadow(0 0 ${isHovered ? 40 : 25}px rgba(251,191,36,${isHovered ? 0.2 : 0.15}))`,
        transform: `scale(${hoverScale})`,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <defs>
        <linearGradient id="gardenBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#15803d" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="pollenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ghost body */}
      <path
        d="M100 12 C142 12 174 44 174 88 C174 114 168 136 162 152 C159 160 152 156 148 164 C144 172 137 168 132 176 C127 184 121 180 116 188 C111 196 105 192 100 200 C95 192 89 196 84 188 C79 180 73 184 68 176 C63 168 56 172 52 164 C48 156 41 160 38 152 C32 134 26 112 26 88 C26 44 58 12 100 12Z"
        fill="url(#gardenBody)"
        stroke="rgba(34,197,94,0.3)"
        strokeWidth="1"
      />

      {/* Leaf texture on body */}
      <path d="M50 60 Q60 50 70 60 Q60 70 50 60" fill="#16a34a" opacity="0.3" />
      <path d="M140 50 Q150 40 160 50 Q150 60 140 50" fill="#16a34a" opacity="0.25" />
      <path d="M45 100 Q55 90 65 100 Q55 110 45 100" fill="#15803d" opacity="0.2" />
      <path d="M130 110 Q140 100 150 110 Q140 120 130 110" fill="#15803d" opacity="0.2" />

      {expression === 0 && (
        <>
          {/* Bloom - Flower crown, gentle smile, trowel */}
          {/* Flower crown */}
          <circle cx="75" cy="22" r="8" fill="#f472b6" />
          <circle cx="75" cy="22" r="3" fill="#fef08a" />
          <circle cx="100" cy="14" r="9" fill="#fb7185" />
          <circle cx="100" cy="14" r="3.5" fill="#fef08a" />
          <circle cx="125" cy="22" r="7" fill="#f472b6" />
          <circle cx="125" cy="22" r="2.5" fill="#fef08a" />
          {/* Crown base */}
          <path d="M65 28 Q100 18 135 28" fill="none" stroke="#16a34a" strokeWidth="2.5" />
          <ellipse cx="85" cy="24" rx="4" ry="3" fill="#22c55e" transform="rotate(-20 85 24)" />
          <ellipse cx="115" cy="24" rx="4" ry="3" fill="#22c55e" transform="rotate(20 115 24)" />

          {/* Gentle eyes */}
          <ellipse cx="68" cy="78" rx="12" ry="10" fill="#fff" />
          <circle cx="68" cy="78" r="5.5" fill="#166534" />
          <circle cx="69" cy="76" r="2" fill="#fff" />
          <ellipse cx="132" cy="78" rx="12" ry="10" fill="#fff" />
          <circle cx="132" cy="78" r="5.5" fill="#166534" />
          <circle cx="133" cy="76" r="2" fill="#fff" />

          {/* Gentle smile */}
          <path d="M88 112 Q100 122 112 112" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          <path d="M90 113 Q100 120 110 113" fill="#fb7185" opacity="0.4" />

          {/* Rosy cheeks */}
          <ellipse cx="55" cy="95" rx="10" ry="7" fill="#fb7185" opacity="0.25" />
          <ellipse cx="145" cy="95" rx="10" ry="7" fill="#fb7185" opacity="0.25" />

          {/* Trowel in hand */}
          <rect x="158" y="100" width="5" height="35" rx="2" fill="#92400e" transform="rotate(25 160 117)" />
          <path d="M168 95 L175 108 L162 108 Z" fill="#a16207" transform="rotate(25 168 101)" />
        </>
      )}

      {expression === 1 && (
        <>
          {/* Sprout - Excited, seeds flying, big eyes */}
          {/* Leaf hair instead of flower crown */}
          <ellipse cx="70" cy="18" rx="10" ry="6" fill="#22c55e" transform="rotate(-30 70 18)" />
          <ellipse cx="100" cy="10" rx="12" ry="7" fill="#4ade80" />
          <ellipse cx="130" cy="18" rx="10" ry="6" fill="#22c55e" transform="rotate(30 130 18)" />
          <ellipse cx="85" cy="14" rx="7" ry="4" fill="#16a34a" transform="rotate(-15 85 14)" />
          <ellipse cx="115" cy="14" rx="7" ry="4" fill="#16a34a" transform="rotate(15 115 14)" />

          {/* Big excited eyes */}
          <ellipse cx="68" cy="75" rx="15" ry="13" fill="#fff" />
          <circle cx="68" cy="75" r="7" fill="#166534" />
          <circle cx="69" cy="73" r="3" fill="#fff" />
          <ellipse cx="132" cy="75" rx="15" ry="13" fill="#fff" />
          <circle cx="132" cy="75" r="7" fill="#166534" />
          <circle cx="133" cy="73" r="3" fill="#fff" />

          {/* Open happy mouth */}
          <ellipse cx="100" cy="115" rx="14" ry="16" fill="#fef08a" opacity="0.3" />
          <path d="M88 110 Q100 105 112 110 Q100 130 88 110" fill="#fb7185" opacity="0.5" />

          {/* Seeds flying from hands */}
          <ellipse cx="25" cy="90" rx="4" ry="6" fill="#92400e" transform="rotate(-20 25 90)" />
          <ellipse cx="20" cy="80" rx="3" ry="5" fill="#a16207" transform="rotate(15 20 80)" />
          <ellipse cx="175" cy="85" rx="4" ry="6" fill="#92400e" transform="rotate(20 175 85)" />
          <ellipse cx="180" cy="95" rx="3" ry="5" fill="#a16207" transform="rotate(-10 180 95)" />
          <circle cx="30" cy="100" r="2.5" fill="#fbbf24" />
          <circle cx="170" cy="105" r="2.5" fill="#fbbf24" />

          {/* Pollen around */}
          <circle cx="50" cy="50" r="3" fill="#fef08a" opacity="0.5" />
          <circle cx="150" cy="45" r="2.5" fill="#fef08a" opacity="0.4" />
          <circle cx="45" cy="130" r="2" fill="#fef08a" opacity="0.3" />
        </>
      )}

      {expression === 2 && (
        <>
          {/* Overgrowth - Vines, wild growth, aggressive */}
          {/* Vines wrapping around */}
          <path d="M20 60 Q40 50 35 80 Q30 110 50 130" fill="none" stroke="#16a34a" strokeWidth="3" />
          <path d="M25 70 Q35 65 32 85" fill="none" stroke="#15803d" strokeWidth="1.5" />
          <ellipse cx="30" cy="75" rx="5" ry="3" fill="#22c55e" transform="rotate(-20 30 75)" />
          <ellipse cx="42" cy="110" rx="6" ry="4" fill="#4ade80" transform="rotate(30 42 110)" />

          <path d="M180 55 Q160 45 165 75 Q170 105 150 125" fill="none" stroke="#16a34a" strokeWidth="3" />
          <path d="M175 65 Q165 60 168 80" fill="none" stroke="#15803d" strokeWidth="1.5" />
          <ellipse cx="170" cy="70" rx="5" ry="3" fill="#22c55e" transform="rotate(20 170 70)" />
          <ellipse cx="158" cy="105" rx="6" ry="4" fill="#4ade80" transform="rotate(-30 158 105)" />

          {/* Vine across forehead */}
          <path d="M60 35 Q100 25 140 38" fill="none" stroke="#16a34a" strokeWidth="2" />
          <ellipse cx="80" cy="30" rx="4" ry="3" fill="#22c55e" transform="rotate(-15 80 30)" />
          <ellipse cx="110" cy="32" rx="4" ry="3" fill="#22c55e" transform="rotate(10 110 32)" />
          <ellipse cx="130" cy="36" rx="4" ry="3" fill="#4ade80" transform="rotate(20 130 36)" />

          {/* Wild intense eyes */}
          <ellipse cx="68" cy="78" rx="14" ry="12" fill="#fff" />
          <circle cx="68" cy="78" r="6" fill="#166534" />
          <circle cx="69" cy="76" r="2.5" fill="#fff" />
          {/* Eye veins */}
          <path d="M56 72 L52 68" stroke="#16a34a" strokeWidth="1" opacity="0.5" />
          <path d="M80 72 L84 68" stroke="#16a34a" strokeWidth="1" opacity="0.5" />

          <ellipse cx="132" cy="78" rx="14" ry="12" fill="#fff" />
          <circle cx="132" cy="78" r="6" fill="#166534" />
          <circle cx="133" cy="76" r="2.5" fill="#fff" />
          <path d="M120 72 L116 68" stroke="#16a34a" strokeWidth="1" opacity="0.5" />
          <path d="M144 72 L148 68" stroke="#16a34a" strokeWidth="1" opacity="0.5" />

          {/* Determined mouth */}
          <path d="M88 118 Q100 122 112 118" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />

          {/* Extra leaves on body */}
          <ellipse cx="55" cy="140" rx="8" ry="5" fill="#22c55e" transform="rotate(-40 55 140)" />
          <ellipse cx="145" cy="145" rx="8" ry="5" fill="#4ade80" transform="rotate(40 145 145)" />
          <ellipse cx="100" cy="165" rx="10" ry="6" fill="#16a34a" />
        </>
      )}

      {/* Root tendrils at bottom (all expressions) */}
      <path d="M70 192 Q65 205 60 200" fill="none" stroke="#16a34a" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <path d="M100 196 Q100 210 95 205" fill="none" stroke="#15803d" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M130 192 Q135 205 140 200" fill="none" stroke="#16a34a" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export default function GardenMascot() {
  const { x, y, isMoving, velocity } = useGardenCursor();
  const [_expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [overgrowthMode, setOvergrowthMode] = useState(false);

  const leavesRef = useRef<Leaf[]>([]);
  const puffsRef = useRef<PollenPuff[]>([]);
  const miniGhoulsRef = useRef<MiniGardenGhoul[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const typedRef = useRef('');

  const mascotSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 140;

  const spawnLeaves = useCallback((cx: number, cy: number, count = 25) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = Math.random() * 5 + 2;
      leavesRef.current.push({
        x: cx + mascotSize / 2,
        y: cy + mascotSize / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        size: Math.random() * 8 + 4,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 70 + 50,
      });
    }
  }, [mascotSize]);

  const addPollenPuff = useCallback((px: number, py: number) => {
    for (let i = 0; i < 8; i++) {
      puffsRef.current.push({
        x: px + mascotSize / 2 + (Math.random() - 0.5) * 30,
        y: py + mascotSize / 2 + (Math.random() - 0.5) * 30,
        size: Math.random() * 15 + 8,
        opacity: 0.5,
        color: ['#fef08a', '#fbbf24', '#fde047'][Math.floor(Math.random() * 3)],
      });
    }
  }, [mascotSize]);

  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);
    spawnLeaves(x, y, newExpr === 2 ? 60 : 25);
    addPollenPuff(x, y);

    const line = SPEECH_LINES[newExpr] || SPEECH_LINES[0];
    setSpeechBubble(line);
    setTimeout(() => setSpeechBubble(''), 2500);
  }, [x, y, spawnLeaves, addPollenPuff]);

  const handleDoubleClick = useCallback(() => {
    if (miniGhoulsRef.current.length >= 5) return;
    for (let i = 0; i < 2; i++) {
      miniGhoulsRef.current.push({
        x: x + mascotSize / 2 + (Math.random() - 0.5) * 50,
        y: y + mascotSize,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        opacity: 1,
        scale: 0.25 + Math.random() * 0.2,
        rotation: Math.random() * 360,
      });
    }
  }, [x, y, mascotSize]);

  // Easter egg: type "grow"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        spawnLeaves(x, y, 12);
        addPollenPuff(x, y);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 10) typedRef.current = typedRef.current.slice(-10);

      if (typedRef.current.includes('grow')) {
        typedRef.current = '';
        setExpression(2);
        setOvergrowthMode(true);
        setSpeechBubble('OVERGROWTH!');
        spawnLeaves(x, y, 100);
        for (let i = 0; i < 5; i++) addPollenPuff(x + (Math.random() - 0.5) * 80, y + (Math.random() - 0.5) * 80);
        setTimeout(() => {
          setExpression(0);
          setOvergrowthMode(false);
          setSpeechBubble('');
          clickCountRef.current = 0;
        }, 4000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, spawnLeaves, addPollenPuff]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let leafTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Trail leaves on movement
      if (isMoving && velocity > 1.5) {
        leafTimer++;
        if (leafTimer > 10) {
          leafTimer = 0;
          const cx = x + mascotSize / 2;
          const cy = y + mascotSize / 2;
          leavesRef.current.push({
            x: cx + (Math.random() - 0.5) * 20,
            y: cy + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 1 + 0.5,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 6,
            size: Math.random() * 6 + 3,
            color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
            opacity: 0.7,
            life: 0,
            maxLife: Math.random() * 50 + 30,
          });
        }
      }

      // Leaves
      leavesRef.current = leavesRef.current.filter((l) => {
        l.x += l.vx;
        l.y += l.vy;
        l.vy += 0.04;
        l.rotation += l.rotSpeed;
        l.life++;
        const lifeRatio = l.life / l.maxLife;
        l.opacity = Math.max(0, 1 - lifeRatio);

        if (l.opacity <= 0) return false;

        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate((l.rotation * Math.PI) / 180);
        ctx.globalAlpha = l.opacity;
        ctx.fillStyle = l.color;

        // Leaf shape
        ctx.beginPath();
        ctx.ellipse(0, 0, l.size, l.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        // Leaf vein
        ctx.beginPath();
        ctx.moveTo(-l.size * 0.5, 0);
        ctx.lineTo(l.size * 0.5, 0);
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
        return true;
      });

      // Pollen puffs
      puffsRef.current = puffsRef.current.filter((p) => {
        p.size += 0.3;
        p.opacity -= 0.015;
        if (p.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * 0.15;
        ctx.fill();

        return true;
      });

      // Mini garden ghouls
      miniGhoulsRef.current = miniGhoulsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.012;
        mg.vx *= 0.995;
        mg.opacity -= 0.0025;
        mg.rotation += 0.8;

        if (mg.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = mg.opacity;
        ctx.translate(mg.x, mg.y);
        ctx.rotate((mg.rotation * Math.PI) / 180);
        ctx.scale(mg.scale, mg.scale);

        // Mini ghost
        ctx.beginPath();
        ctx.arc(0, -8, 18, Math.PI, 0);
        ctx.bezierCurveTo(18, 8, 14, 26, 10, 22);
        ctx.bezierCurveTo(5, 28, 0, 24, -5, 26);
        ctx.bezierCurveTo(-10, 28, -14, 24, -18, 22);
        ctx.bezierCurveTo(-22, 18, -18, 8, -18, -8);
        ctx.fillStyle = '#4ade80';
        ctx.fill();

        {/* Mini watering can */}
        ctx.fillStyle = '#92400e';
        ctx.fillRect(15, -2, 8, 12);
        ctx.fillRect(18, -8, 2, 8);

        // Mini eyes
        ctx.fillStyle = '#166534';
        ctx.beginPath();
        ctx.arc(-6, -8, 2.5, 0, Math.PI * 2);
        ctx.arc(6, -8, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      // Overgrowth mode vine overlay
      if (overgrowthMode) {
        ctx.strokeStyle = '#16a34a';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.08;
        for (let i = 0; i < 5; i++) {
          const sx = Math.random() * canvas.width;
          const sy = Math.random() * canvas.height;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.bezierCurveTo(sx + 50, sy - 30, sx + 80, sy + 30, sx + 120, sy);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [x, y, isMoving, velocity, mascotSize, overgrowthMode]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: mascotSize,
          height: mascotSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl whitespace-nowrap font-caveat text-lg pointer-events-none"
            style={{
              background: 'rgba(15, 31, 15, 0.95)',
              border: '1.5px solid #22c55e',
              color: '#fbbf24',
              boxShadow: '0 4px 20px rgba(34,197,94,0.2)',
              animation: 'bounce-subtle 0.5s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #22c55e',
              }}
            />
          </div>
        )}

        <div
          className="relative pointer-events-auto cursor-pointer"
          style={{
            width: mascotSize,
            height: mascotSize,
            animation: !isMoving ? `ghost-bob 3s ease-in-out infinite, ghost-sway 4s ease-in-out infinite` : undefined,
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/ghoul_logo.png"
            alt="GARDEN GHOUL"
            className="w-full h-full object-contain"
            draggable={false}
            style={{
              filter: isHovered
                ? 'brightness(1.15) drop-shadow(0 0 20px rgba(34,197,94,0.5)) drop-shadow(0 0 40px rgba(251,191,36,0.3))'
                : undefined,
              transition: 'filter 0.3s ease',
            }}
          />
        </div>
      </div>
    </>
  );
}
