import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from '../imports/svg-ssgfwff678';
import svgCalendar from '../imports/svg-6e85aeeqqj';
import svgLocation from '../imports/svg-udeo9mqpxt';
import imgRectangle5 from 'figma:asset/88a02300164699ed81e632c94decfc916be70eae.png';
import imgRectangle7 from 'figma:asset/9e87b0d8f41124b8641f6bfdea91f7c0c8c031c3.png';
import imgLogo from 'figma:asset/159e29de760a199ad669cbe1519f0f2994c70f32.png';
import imgPatillasLandscape from 'figma:asset/a38e400a8ff7ae5134712d60f89826d93ce849c8.png';
import imgPatillasBeach from 'figma:asset/9dc0a442573987ea11b90262f30eaf12e41d4e15.png';

// Calendar Icon Component
const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="96" height="96" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vertical lines at top (calendar rings) */}
      <line x1="26.67" y1="10" x2="26.67" y2="26" stroke="#a8d8d8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="53.33" y1="10" x2="53.33" y2="26" stroke="#a8d8d8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Calendar body (rounded rectangle) */}
      <path d={svgCalendar.p1a1d8280} stroke="#a8d8d8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 3)" />
      {/* Horizontal line inside */}
      <line x1="13" y1="38" x2="67" y2="38" stroke="#a8d8d8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// Hand-drawn stamp component - POSTAL STYLE
const HandDrawnStamp = ({ className = "", rotation = 0, color = "#3795b4" }: { className?: string, rotation?: number, color?: string }) => (
  <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Perforated edges - postal stamp style */}
      <rect x="10" y="10" width="100" height="100" stroke={color} strokeWidth="2" strokeDasharray="3 2" opacity="0.9" />
      <rect x="15" y="15" width="90" height="90" stroke={color} strokeWidth="1.5" opacity="0.7" />
      
      {/* Inner decorative circle */}
      <circle cx="60" cy="60" r="35" stroke={color} strokeWidth="2" opacity="0.8" />
      
      {/* Wave lines - postal cancellation mark style */}
      <path d="M30 50 Q40 45 50 50 T70 50 T90 50" stroke={color} strokeWidth="2.5" fill="none" opacity="0.85" />
      <path d="M30 60 Q40 55 50 60 T70 60 T90 60" stroke={color} strokeWidth="2.5" fill="none" opacity="0.85" />
      <path d="M30 70 Q40 65 50 70 T70 70 T90 70" stroke={color} strokeWidth="2.5" fill="none" opacity="0.85" />
      
      {/* Text "FINKA AZUL" style element */}
      <text x="60" y="35" fontFamily="serif" fontSize="8" fill={color} textAnchor="middle" opacity="0.7">PATILLAS</text>
      <text x="60" y="90" fontFamily="serif" fontSize="7" fill={color} textAnchor="middle" opacity="0.7">PUERTO RICO</text>
    </svg>
  </div>
);

// Coastal leaf stamp - CHANGED TO PALETTE COLORS
const LeafStamp = ({ className = "", rotation = 0 }: { className?: string, rotation?: number }) => (
  <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
    <svg width="130" height="130" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Perforated postal border */}
      <rect x="8" y="8" width="84" height="84" stroke="#f4d03f" strokeWidth="2" strokeDasharray="2 2" opacity="0.9" />
      
      {/* Leaf design with palette color */}
      <path d="M50 25 Q60 35 60 50 Q60 65 50 75 Q40 65 40 50 Q40 35 50 25 Z" stroke="#3795b4" strokeWidth="3" fill="none" opacity="0.85" />
      <path d="M50 30 L50 70" stroke="#3795b4" strokeWidth="2" opacity="0.75" />
      <path d="M50 40 Q55 45 60 45" stroke="#3795b4" strokeWidth="2" opacity="0.75" />
      <path d="M50 50 Q45 55 40 55" stroke="#3795b4" strokeWidth="2" opacity="0.75" />
      
      {/* Outer decorative circle */}
      <circle cx="50" cy="50" r="40" stroke="#f4d03f" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
      
      {/* Postal text */}
      <text x="50" y="15" fontFamily="serif" fontSize="7" fill="#3795b4" textAnchor="middle" opacity="0.7">ECO-RURAL</text>
    </svg>
  </div>
);

// Sun/star stamp - POSTAL STYLE
const SunStamp = ({ className = "", rotation = 0 }: { className?: string, rotation?: number }) => (
  <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
    <svg width="130" height="130" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Postal stamp border with perforations */}
      <rect x="10" y="10" width="90" height="90" stroke="#f4d03f" strokeWidth="2" strokeDasharray="2.5 2" opacity="0.9" />
      <rect x="15" y="15" width="80" height="80" stroke="#f4d03f" strokeWidth="1" opacity="0.6" />
      
      {/* Sun design */}
      <circle cx="55" cy="55" r="15" stroke="#f4d03f" strokeWidth="3" opacity="0.9" fill="#f4d03f" fillOpacity="0.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="55"
          y1="55"
          x2={55 + Math.cos(angle * Math.PI / 180) * 28}
          y2={55 + Math.sin(angle * Math.PI / 180) * 28}
          stroke="#f4d03f"
          strokeWidth="3"
          opacity="0.85"
        />
      ))}
      
      {/* Postal text */}
      <text x="55" y="25" fontFamily="serif" fontSize="7" fill="#f4d03f" textAnchor="middle" opacity="0.8">CARIBE</text>
      <text x="55" y="90" fontFamily="serif" fontSize="6" fill="#f4d03f" textAnchor="middle" opacity="0.8">2024</text>
    </svg>
  </div>
);

// Wave decoration - POSTAL STYLE
const WaveDecoration = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="170" height="80" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Postal cancellation waves */}
      <path d="M10,20 Q25,10 40,20 T70,20 T100,20 T130,20" stroke="#3795b4" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M10,30 Q25,20 40,30 T70,30 T100,30 T130,30" stroke="#3795b4" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M10,40 Q25,30 40,40 T70,40 T100,40 T130,40" stroke="#3795b4" strokeWidth="3" fill="none" opacity="0.8" />
      
      {/* Small postal marks */}
      <circle cx="135" cy="25" r="3" fill="#3795b4" opacity="0.7" />
      <circle cx="135" cy="35" r="3" fill="#3795b4" opacity="0.7" />
    </svg>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['refugio', 'amor', 'experiencia', 'kabana'];
      const scrollPosition = window.scrollY + 100;

      // Check if scrolled past hero section
      setIsScrolled(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0E8]">
      {/* Header - always white */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#A8D8D8]/40 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo - SOLO en header */}
          <div className="transition-transform duration-300 hover:scale-105">
            <img 
              src={imgLogo} 
              alt="Finka Azul" 
              className="h-[50px] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'refugio', label: 'Inicio' },
              { id: 'amor', label: 'Nosotros' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'kabana', label: 'Cabaña' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Oswald',sans-serif] uppercase tracking-[0.12em] text-[14px] transition-all duration-300 hover:translate-y-[-2px] ${
                  activeSection === item.id 
                    ? 'text-[#5BAEAE] font-semibold' 
                    : 'text-[#2A2A2A] font-medium hover:text-[#5BAEAE]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reserva')}
              className="px-6 py-2.5 bg-[#A8D8D8] rounded-full font-['Oswald',sans-serif] uppercase tracking-[0.12em] text-[14px] text-[#1A1A1A] font-semibold transition-all duration-300 hover:bg-[#92cccc] hover:shadow-md hover:scale-105"
            >
              Reservar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-[#5BAEAE]" />
            ) : (
              <Menu className="size-6 text-[#5BAEAE]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#A8D8D8]/40 bg-white animate-in slide-in-from-top duration-300">
            <nav className="px-8 py-6 space-y-4 max-w-[1280px] mx-auto">
              {[
                { id: 'refugio', label: 'Inicio' },
                { id: 'amor', label: 'Nosotros' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'kabana', label: 'Cabaña' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-['Oswald',sans-serif] uppercase tracking-[0.12em] text-[15px] transition-all duration-300 hover:translate-x-2 block w-full text-left ${
                    activeSection === item.id 
                      ? 'text-[#5BAEAE] font-semibold' 
                      : 'text-[#2A2A2A] font-medium hover:text-[#5BAEAE]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('reserva')}
                className="w-full px-6 py-2.5 bg-[#A8D8D8] rounded-full font-['Oswald',sans-serif] uppercase tracking-[0.12em] text-[15px] text-[#1A1A1A] font-semibold transition-all duration-300 hover:bg-[#92cccc] text-center hover:scale-105"
              >
                Reservar
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Refugio Section - Hero with Full Screen Video Background */}
        <section id="refugio" className="relative h-screen w-full overflow-hidden">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%20hero-5Vzg9fNNMZFPJpaPETrN5zh6vWbigw.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Left-side Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content - Left Aligned */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 sm:px-12 lg:px-28 xl:px-40 text-left pt-28 pb-32 lg:pt-32 lg:pb-32">
            <div className="max-w-[640px] flex flex-col">
              <span className="font-['Oswald',sans-serif] uppercase tracking-[0.3em] text-[12px] lg:text-[13px] font-medium text-[#A8D8D8] mb-5 lg:mb-7 drop-shadow-md">
                Patillas · Puerto Rico
              </span>
              <h1 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.02em] text-white text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[74px] leading-[1.05] drop-shadow-lg text-balance">
                Un refugio rural en el corazón del <span className="text-[#F4D03F]">Caribe</span>
              </h1>
              <p className="font-['Lora',serif] font-light text-[16px] lg:text-[18px] text-white/85 leading-[1.7] drop-shadow-md max-w-[480px] mt-7 lg:mt-8 pl-5 border-l-[3px] border-[#A8D8D8]">
                Reconecta con la tierra, respira aire puro y vive el ritmo pausado de la naturaleza en nuestro espacio eco-rural en Patillas, Puerto Rico.
              </p>
              <button
                onClick={() => scrollToSection('reserva')}
                className="inline-block px-8 py-3.5 bg-[#A8D8D8] rounded-full font-['Oswald',sans-serif] uppercase tracking-[0.1em] font-semibold text-[15px] text-[#1A1A1A] transition-all duration-300 hover:bg-[#92cccc] hover:scale-105 hover:-translate-y-1 mt-10 lg:mt-12 w-fit shadow-[0_4px_20px_rgba(168,216,216,0.4)] hover:shadow-[0_6px_25px_rgba(168,216,216,0.6)]"
              >
                Reserva ahora
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Hecho con Amor Section */}
        <section id="amor" className="relative py-20 lg:py-28 bg-[#F3F0E8] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className="space-y-6 text-left">
                <span className="font-['Oswald',sans-serif] uppercase tracking-[0.2em] text-[13px] font-semibold text-[#5BAEAE]">
                  Nuestra historia
                </span>
                <h2 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.01em] text-[#FF9D25] text-[38px] lg:text-[54px] leading-[1.0]">
                  Hecho con amor
                </h2>
                <p className="font-['Lora',serif] font-normal text-[16px] lg:text-[17px] text-[#3A3A3A] leading-[1.8]">
                  Finka Azul nació del deseo profundo de Don Antonio y Elba de crear un lugar que reflejara su filosofía de vida: una forma de habitar el mundo con calma y respeto por la naturaleza. Cada rincón de la finca fue pensado para que quienes la visitan puedan conectar con esa esencia, vivir experiencias auténticas y sentir la serenidad que ellos han cultivado.
                </p>
              </div>

              {/* Image - larger with drop shadow instead of frame */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  <img
                    src={imgRectangle7}
                    alt="Don Antonio y Elba en la finca"
                    className="w-full h-[450px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Experiencia Section - Editorial Style */}
        <section id="experiencia" className="relative py-20 lg:py-28 bg-[#A8D8D8] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <span className="font-['Oswald',sans-serif] uppercase tracking-[0.2em] text-[13px] font-semibold text-[#2A6E6E]">
                Vivir Finka Azul
              </span>
              <h2 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.01em] text-[40px] lg:text-[56px] text-[#FF9D25] leading-[1.0] mt-3 mb-5">
                La Experiencia
              </h2>
              <p className="font-['Lora',serif] font-normal text-[16px] text-[#2A4A4A] leading-[1.7] max-w-[600px] mx-auto">
                En la costa rural de Patillas, entre jardines vivos, palmas y el murmullo constante del agua, descubrirás un espacio para pausar y reconectar con lo esencial.
              </p>
            </div>

            {/* 4 Pillars - Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 lg:gap-y-0">
              {/* Pillar 1 - Desconexión Real */}
              <div className="relative pb-8 px-5 lg:border-r lg:border-[#1A1A1A]/10">
                <div className="border-t border-[#1A1A1A]/15 pt-7">
                  {/* Hand-drawn leaf/branch icon */}
                  <svg className="w-7 h-7 mb-4 text-[#2A6E6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 21c3-3 7-5 12-5" />
                    <path d="M18 16c-3-8-10-11-16-10 2 5 6 10 16 10z" />
                    <path d="M12 12c-2 2-4 5-4 8" />
                  </svg>
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.02em] text-[1.05rem] text-[#366E6B] leading-[1.2] mb-3">
                    Desconexión Real
                  </h3>
                  <p className="font-['Lora',serif] font-normal text-[0.9rem] text-[#2A4A4A] leading-[1.7]">
                    Privacidad total, cero tráfico y sonidos completamente naturales. Un descanso que no se encuentra en hoteles ni zonas turísticas.
                  </p>
                </div>
              </div>

              {/* Pillar 2 - Agricultura Sostenible */}
              <div className="relative pb-8 px-5 lg:border-r lg:border-[#1A1A1A]/10">
                <div className="border-t border-[#1A1A1A]/15 pt-7">
                  {/* Hand-drawn sprout icon */}
                  <svg className="w-7 h-7 mb-4 text-[#2A6E6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V10" />
                    <path d="M12 13c-2.5-3-7-3.5-9-1 3-1 6 1 9 4" />
                    <path d="M12 10c2.5-3 7-3.5 9-1-3-1-6 1-9 4" />
                    <path d="M12 6c0-3 2-5 5-5-1 2-2 4-5 5" />
                  </svg>
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.02em] text-[1.05rem] text-[#366E6B] leading-[1.2] mb-3">
                    Agricultura Sostenible
                  </h3>
                  <p className="font-['Lora',serif] font-normal text-[0.9rem] text-[#2A4A4A] leading-[1.7]">
                    Más de 12 jardines ornamentales, áreas agrícolas y un cultivo responsable que revive el suelo y atrae vida.
                  </p>
                </div>
              </div>

              {/* Pillar 3 - El Agua como Recurso Sagrado */}
              <div className="relative pb-8 px-5 lg:border-r lg:border-[#1A1A1A]/10">
                <div className="border-t border-[#1A1A1A]/15 pt-7">
                  {/* Hand-drawn water drop icon */}
                  <svg className="w-7 h-7 mb-4 text-[#2A6E6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2c0 0-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12z" />
                    <path d="M9 15c0.5 1 1.5 2 3 2" />
                  </svg>
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.02em] text-[1.05rem] text-[#366E6B] leading-[1.2] mb-3">
                    El Agua como Recurso Sagrado
                  </h3>
                  <p className="font-['Lora',serif] font-normal text-[0.9rem] text-[#2A4A4A] leading-[1.7]">
                    Dos quebradas bordean la finca. Agua de manantial y lluvia recolectada. Cada gota se valora, se respeta y se honra.
                  </p>
                </div>
              </div>

              {/* Pillar 4 - Anfitriones que Hacen la Diferencia */}
              <div className="relative pb-8 px-5">
                <div className="border-t border-[#1A1A1A]/15 pt-7">
                  {/* Hand-drawn people silhouettes icon */}
                  <svg className="w-7 h-7 mb-4 text-[#2A6E6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="7" r="3" />
                    <circle cx="17" cy="7" r="2.5" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    <path d="M17 14c2 0 4 1.5 4 4v3" />
                  </svg>
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.02em] text-[1.05rem] text-[#366E6B] leading-[1.2] mb-3">
                    Anfitriones que Hacen la Diferencia
                  </h3>
                  <p className="font-['Lora',serif] font-normal text-[0.9rem] text-[#2A4A4A] leading-[1.7]">
                    Antonio conoce cada planta, cada rincón. Chef Elba transforma ingredientes de la finca en platos llenos de sabor puertorriqueño y cariño.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="text-center mt-12 lg:mt-16">
              <p className="font-['Lora',serif] italic text-[1.25rem] lg:text-[1.5rem] text-[#1A1A1A]/55 leading-[1.5] max-w-[600px] mx-auto">
                "El lujo aquí no es material: es calma, silencio, naturaleza."
              </p>
            </div>
          </div>
        </section>

        {/* Kabaña Azul Section */}
        <section id="kabana" className="relative py-20 lg:py-28 bg-[#F3F0E8] overflow-hidden">

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="font-['Oswald',sans-serif] uppercase tracking-[0.2em] text-[13px] font-semibold text-[#5BAEAE]">
                    El alojamiento
                  </span>
                  <h2 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.01em] text-[#FF9D25] text-[38px] lg:text-[54px] leading-[1.0] mt-3 transition-all duration-300">
                    Kabaña Azul
                  </h2>
                  <div className="bg-[#A8D8D8] h-[3px] w-[70px] mt-4 mb-6 transition-all duration-500 hover:w-[90px]" />
                </div>

                <p className="font-['Lora',serif] font-medium italic text-[20px] text-[#1A1A1A] leading-[1.4] transition-opacity duration-300 hover:opacity-80">
                  Tu pequeña casa cerca del mar.
                </p>

                <p className="font-['Lora',serif] font-normal text-[16px] text-[#3A3A3A] leading-[1.7] transition-opacity duration-300 hover:opacity-80">
                  Una acogedora cabaña de madera rodeada de palmas, flores y el canto del coquí.
                </p>

                <p className="font-['Lora',serif] font-normal text-[16px] text-[#3A3A3A] leading-[1.7] transition-opacity duration-300 hover:opacity-80">
                  Sencilla, auténtica y perfecta para quienes buscan descansar en medio de la naturaleza.
                </p>

                {/* Amenities */}
                <div className="pt-4">
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.08em] text-[18px] text-[#FF9D25] mb-5">
                    Incluye
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d="M2.37284 4.74587V23.7285" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p29f99380} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M2.37284 20.1688H26.1011" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M7.11838 9.49106V20.1688" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Cama doble'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p219c3380} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M5.9323 11.8644H22.5421" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M17.7963 8.30511V15.4236" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Mini nevera'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p31325c80} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M14.2369 14.2372V14.2488" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Ventiladores de techo'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p17528500} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p23240300} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'TV / DVD'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d="M14.2369 23.7282H14.2485" stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p17a27400} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p5301fa8} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p11364e80} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Internet limitado'
                      }
                    ].map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-[#A8D8D8]/40 transition-all duration-300 hover:bg-[#A8D8D8]/15 hover:scale-105 hover:shadow-md"
                      >
                        <div className="shrink-0 transition-transform duration-300 hover:scale-110">{amenity.icon}</div>
                        <p className="font-['Lora',serif] font-medium text-[#2A4A4A] text-[15px]">
                          {amenity.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-['Lora',serif] font-normal italic text-[15px] text-[#3A3A3A] leading-[1.6] pt-2 transition-opacity duration-300 hover:opacity-80">
                  Un espacio privado y tranquilo donde el ritmo de la naturaleza se convierte en parte de tu estancia.
                </p>
              </div>

              {/* Image */}
              <div className="relative lg:mt-8 group">
                <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                  <img
                    src="/images/cabana-azul.jpg"
                    alt="Kabaña Azul rodeada de vegetación tropical en Patillas"
                    className="w-full h-[400px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patillas Location Section */}
        <section className="relative py-20 lg:py-28 bg-[#A8D8D8] overflow-hidden">

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                {/* Heading */}
                <div>
                  <span className="font-['Oswald',sans-serif] uppercase tracking-[0.2em] text-[13px] font-semibold text-[#2A6E6E]">
                    Patillas, Puerto Rico
                  </span>
                  <h2 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.01em] text-[34px] lg:text-[48px] text-[#FF9D25] leading-[1.0] mt-3 transition-all duration-300">
                    Donde el mar y la montaña se encuentran
                  </h2>
                  <div className="bg-[#2A6E6E] h-[3px] w-[80px] mt-5 rounded-full" />
                </div>

                {/* Description paragraphs */}
                <div className="space-y-6">
                  <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.7] transition-opacity duration-300 hover:opacity-80">
                    Patillas es uno de los tesoros naturales de Puerto Rico, un lugar donde el mar Caribe, los ríos, las montañas y los bosques tropicales conviven en un mismo territorio.
                  </p>
                  <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.7] transition-opacity duration-300 hover:opacity-80">
                    Un destino perfecto para quienes disfrutan la naturaleza, la fotografía y la vida tranquila.
                  </p>
                </div>

                {/* Cercano a ti section */}
                <div className="pt-4 space-y-6">
                  <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.08em] text-[#FF9D25] text-[22px] leading-[1.2]">
                    Cercano a ti
                  </h3>

                  {/* Location items */}
                  <div className="space-y-4">
                    {/* Beaches */}
                    <div className="bg-white border border-white/60 rounded-xl p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p39496880} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p3e1e85a0} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p2e9bce00} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.5]">
                          Nueve playas a menos de 10 km
                        </p>
                      </div>
                    </div>

                    {/* Airport */}
                    <div className="bg-white border border-white/60 rounded-xl p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p132bb600} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p18232e00} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.5]">
                          1 h 45 min del aeropuerto de San Juan
                        </p>
                      </div>
                    </div>

                    {/* Ferry */}
                    <div className="bg-white border border-white/60 rounded-xl p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.pf1aa180} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.5]">
                          45 min del ferry hacia Vieques y Culebra
                        </p>
                      </div>
                    </div>

                    {/* Hot springs */}
                    <div className="bg-white border border-white/60 rounded-xl p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p190eab00} stroke="#2A6E6E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-[#2A4A4A] leading-[1.5]">
                          45 min de las aguas termales de Coamo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                  <img
                    src={imgPatillasBeach}
                    alt="Paisaje costero de Patillas"
                    className="w-full h-[400px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - CLEAN DESIGN */}
        <section id="reserva" className="relative py-20 lg:py-28 bg-[#F3F0E8] overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-8 lg:px-20 relative">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Top tagline */}
              <span className="font-['Oswald',sans-serif] uppercase tracking-[0.2em] text-[13px] font-semibold text-[#5BAEAE]">
                Reserva tu estancia
              </span>

              {/* Main Heading */}
              <h2 className="font-['Oswald',sans-serif] font-bold uppercase tracking-[0.01em] text-[40px] lg:text-[58px] text-[#FF9D25] leading-[0.98] max-w-[760px]">
                Planea tu estancia en Finka Azul
              </h2>

              {/* Horizontal line divider */}
              <div className="w-24 h-[2px] bg-[#A8D8D8]" />

              {/* Description */}
              <p className="font-['Lora',serif] font-normal text-[17px] text-[#3A3A3A] leading-[1.7] max-w-[700px]">
                Un lujo diferente: desconectar para conectar. Elige tus fechas, confirma tu reserva y prepárate para una experiencia tranquila rodeada de naturaleza.
              </p>

              {/* CTA Button */}
              <button className="mt-2 px-10 py-4 bg-[#A8D8D8] rounded-full font-['Oswald',sans-serif] uppercase tracking-[0.1em] font-semibold text-[16px] text-[#1A1A1A] leading-[1.4] transition-all duration-300 hover:bg-[#92cccc] hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                Reserva ahora
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 bg-[#A8D8D8] border-t border-[#2A6E6E]/20">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="mb-4 transition-transform duration-300 hover:scale-105">
                  <img 
                    src={imgLogo} 
                    alt="Finka Azul" 
                    className="h-[56px] w-auto"
                  />
                </div>
                <p className="font-['Lora',serif] text-[15px] text-[#2A4A4A] leading-[1.7] transition-opacity duration-300 hover:opacity-80">
                  Un refugio rural en el corazón del Caribe. Reconecta con la naturaleza en Patillas, Puerto Rico.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.08em] text-[18px] text-[#FF9D25] mb-4">
                  Contacto
                </h3>
                <ul className="space-y-2 font-['Lora',serif] text-[15px] text-[#2A4A4A] leading-[1.6]">
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#2A6E6E]">Patillas, Puerto Rico</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#2A6E6E]">info@finkaazul.com</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#2A6E6E]">(787) 555-1234</li>
                </ul>
              </div>

              {/* Enlaces */}
              <div>
                <h3 className="font-['Oswald',sans-serif] font-semibold uppercase tracking-[0.08em] text-[18px] text-[#FF9D25] mb-4">
                  Enlaces
                </h3>
                <ul className="space-y-2 font-['Lora',serif] text-[15px]">
                  {['Inicio', 'Nosotros', 'Experiencia', 'Cabaña', 'Reservar'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#2A4A4A] hover:text-[#2A6E6E] transition-all duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#2A6E6E]/20 pt-8">
              <p className="font-['Lora',serif] text-[13px] text-[#2A4A4A] text-center leading-[1.5] transition-opacity duration-300 hover:opacity-100">
                © 2024 Finka Azul. Todos los derechos reservados. | Política de privacidad | Términos y condiciones
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
