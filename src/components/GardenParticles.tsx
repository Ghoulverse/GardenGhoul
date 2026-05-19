import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'leaf' | 'pollen' | 'seed' | 'petal';
  rotation: number;
  rotSpeed: number;
}

export default function GardenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

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

    const colors = ['#22c55e', '#16a34a', '#4ade80', '#fbbf24', '#84cc16', '#fef08a', '#92400e'];

    const createParticle = (): Particle => {
      const typeRoll = Math.random();
      let type: Particle['type'];
      if (typeRoll < 0.35) type = 'leaf';
      else if (typeRoll < 0.55) type = 'pollen';
      else if (typeRoll < 0.75) type = 'seed';
      else type = 'petal';

      return {
        x: Math.random() * canvas.width,
        y: -Math.random() * 50,
        size: type === 'leaf' ? Math.random() * 6 + 3 : Math.random() * 4 + 2,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.35 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 1000 + 600,
        type,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 3,
      };
    };

    for (let i = 0; i < 55; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;
        p.rotation += p.rotSpeed;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 6, 1);
        const fadeOut = lifeRatio > 0.88 ? (1 - lifeRatio) / 0.12 : 1;
        const currentOpacity = p.opacity * fadeIn * fadeOut;

        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'leaf') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(-p.size * 0.5, 0);
          ctx.lineTo(p.size * 0.5, 0);
          ctx.strokeStyle = 'rgba(0,0,0,0.15)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === 'pollen') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity * 0.08;
          ctx.fill();
        } else if (p.type === 'seed') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size, 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // petal
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.7, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (p.life >= p.maxLife || p.y > canvas.height + 20) {
          particlesRef.current[i] = createParticle();
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
