import GardenMascot from '@/components/GardenMascot';
import GardenParticles from '@/components/GardenParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      {/* Organic texture overlay */}
      <div className="organic-overlay" />

      {/* Ambient garden particles (leaves, pollen, seeds, petals) */}
      <GardenParticles />

      {/* The interactive garden mascot */}
      <GardenMascot />

      {/* Page content */}
      <Home />
    </>
  );
}
