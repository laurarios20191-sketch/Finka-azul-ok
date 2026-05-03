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
    <div className="min-h-screen bg-[#f7f3e8]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-[#4ECDC4] shadow-sm' 
          : 'bg-black/20 backdrop-blur-sm border-b border-[#4ECDC4]'
      }`}>
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20 py-5 flex items-center justify-between">
          {/* Logo - SOLO en header */}
          <div className="transition-transform duration-300 hover:scale-105">
            <img 
              src={imgLogo} 
              alt="Finka Azul" 
              className={`h-[50px] w-auto transition-all duration-500 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
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
                className={`font-['DM_Sans',sans-serif] text-[15px] transition-all duration-300 hover:translate-y-[-2px] ${
                  isScrolled
                    ? activeSection === item.id 
                      ? 'text-[#f4d03f] font-medium' 
                      : 'text-black font-normal hover:text-[#3795b4]'
                    : activeSection === item.id 
                      ? 'text-[#f4d03f] font-medium' 
                      : 'text-white font-normal hover:text-[#f4d03f]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reserva')}
              className="px-6 py-2.5 bg-[#f4d03f] rounded-full font-['DM_Sans',sans-serif] text-[15px] text-black font-medium transition-all duration-300 hover:bg-[#e5c236] hover:shadow-md hover:scale-105"
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
              <X className={`size-6 transition-colors duration-300 ${isScrolled ? 'text-[#3795b4]' : 'text-white'}`} />
            ) : (
              <Menu className={`size-6 transition-colors duration-300 ${isScrolled ? 'text-[#3795b4]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t animate-in slide-in-from-top duration-300 ${
            isScrolled 
              ? 'border-[#3795b4]/20 bg-white/95 backdrop-blur-sm' 
              : 'border-white/20 bg-black/40 backdrop-blur-sm'
          }`}>
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
                  className={`font-['DM_Sans',sans-serif] text-[15px] transition-all duration-300 hover:translate-x-2 block w-full text-left ${
                    isScrolled
                      ? activeSection === item.id 
                        ? 'text-[#f4d03f] font-medium' 
                        : 'text-black font-normal hover:text-[#3795b4]'
                      : activeSection === item.id 
                        ? 'text-[#f4d03f] font-medium' 
                        : 'text-white font-normal hover:text-[#f4d03f]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('reserva')}
                className="w-full px-6 py-2.5 bg-[#f4d03f] rounded-full font-['DM_Sans',sans-serif] text-[15px] text-black font-medium transition-all duration-300 hover:bg-[#e5c236] text-center hover:scale-105"
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
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-8 lg:px-20 xl:px-28 text-left pt-24 lg:pt-32">
            <div className="max-w-[650px] flex flex-col">
              <h1 className="font-['Fraunces',serif] font-normal italic text-white text-[48px] lg:text-[72px] xl:text-[80px] leading-[1.1] drop-shadow-lg">
                Un refugio rural en el corazón del <span className="text-[#F5C842]">Caribe</span>
              </h1>
              <p className="font-['Lora',serif] font-light text-[15px] lg:text-[17px] text-white/80 leading-[1.7] drop-shadow-md max-w-[500px] mt-6 pl-5 border-l-[3px] border-[#4ECDC4]">
                Reconecta con la tierra, respira aire puro y vive el ritmo pausado de la naturaleza en nuestro espacio eco-rural en Patillas, Puerto Rico.
              </p>
              <button
                onClick={() => scrollToSection('reserva')}
                className="inline-block px-8 py-3 bg-[#f4d03f] rounded-full font-['DM_Sans',sans-serif] font-medium text-[16px] text-black transition-all duration-300 hover:bg-[#e5c236] hover:scale-105 hover:-translate-y-1 mt-10 w-fit shadow-[0_4px_20px_rgba(245,200,66,0.4)] hover:shadow-[0_6px_25px_rgba(245,200,66,0.6)]"
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
        <section id="amor" className="relative py-20 lg:py-28 bg-[#a8d8d8] overflow-hidden">
          {/* Clear vertical line texture - like stripes, won't interfere with text */}
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              {/* Vertical stripes */}
              {Array.from({ length: 50 }).map((_, i) => (
                <line
                  key={`vert-${i}`}
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="100%"
                  stroke="#3795b4"
                  strokeWidth="20"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="font-['Fraunces',serif] font-normal text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.15] transition-all duration-300 hover:text-[#2e7a91]">
                  Hecho con amor
                </h2>
                <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Finka Azul nació del deseo profundo de Don Antonio y Elba de crear un lugar que reflejara su filosofía de vida: una forma de habitar el mundo con calma y respeto por la naturaleza. Cada rincón de la finca fue pensado para que quienes la visitan puedan conectar con esa esencia, vivir experiencias auténticas y sentir la serenidad que ellos han cultivado.
                </p>
              </div>

              {/* Image */}
              <div className="relative group">
                {/* Editorial frame - MORE VISIBLE, THICKER */}
                <div className="absolute -inset-4 border-[5px] border-[#f4d03f] rounded-lg transition-all duration-500 group-hover:scale-[1.02]" style={{
                  transform: 'rotate(1deg)'
                }} />
                
                <div className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src={imgRectangle7}
                    alt="Don Antonio y Elba en la finca"
                    className="w-full h-[400px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wavy Separator */}
        <div className="relative bg-[#a8d8d8]">
          <svg className="w-full h-16 lg:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C320,100 420,100 720,50 C1020,0 1120,0 1440,100 L1440,100 L0,100 Z" fill="#f7f3e8" />
          </svg>
        </div>

        {/* La Experiencia Section */}
        <section id="experiencia" className="relative py-20 lg:py-28 bg-[#f7f3e8] overflow-hidden">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            {/* Header */}
            <div className="text-center mb-16 space-y-6 max-w-[900px] mx-auto">
              <h2 className="font-['Fraunces',serif] font-normal text-[40px] lg:text-[52px] text-black leading-[1.15] transition-all duration-300 hover:text-[#3795b4]">
                La experiencia
              </h2>
              <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                En la costa rural de Patillas, entre jardines vivos, palmas y el murmullo constante del agua, descubrirás un espacio para pausar y reconectar con lo esencial. La experiencia en Finka Azul es íntima, auténtica y profundamente natural.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
              {/* Desconexión real - Turquesa pastel */}
              <div className="relative p-8 rounded-2xl bg-[#d4eeeb] transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group overflow-hidden border border-[#b8ddd8]">
                {/* Decorative palm leaf pattern */}
                <div className="absolute -right-8 -top-8 w-32 h-32 opacity-[0.08]">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2d5a52]">
                    <path d="M50,10 Q30,30 20,60 Q40,50 50,50 Q60,50 80,60 Q70,30 50,10 Z" />
                  </svg>
                </div>
                {/* Icon - Palm tree for disconnection */}
                <div className="w-14 h-14 rounded-full bg-[#a8d5cf] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8ec5bd]">
                  <svg className="w-7 h-7 text-[#2d5a52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2-3 4-3 6s1.5 3 3 3 3-1 3-3-1.5-4-3-6zM12 12v9M8 21h8M6 8c-2 0-4 1-4 3s2 2 4 1M18 8c2 0 4 1 4 3s-2 2-4 1M4 5c1 1 3 2 5 1M20 5c-1 1-3 2-5 1" />
                  </svg>
                </div>
                <h3 className="font-['Fraunces',serif] font-normal text-[28px] text-[#2d3a38] leading-[1.2] mb-4 transition-colors duration-300">
                  Desconexión real
                </h3>
                <p className="font-['Lora',serif] font-normal text-[16px] text-[#3d4a47] leading-[1.6]">
                  Privacidad total, cero tráfico y sonidos completamente naturales.
                  <br /><br />
                  Un descanso que no se encuentra en hoteles ni zonas turísticas.
                </p>
              </div>

              {/* Agricultura sostenible - Verde salvia suave */}
              <div className="relative p-8 rounded-2xl bg-[#dce8dc] transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group overflow-hidden border border-[#c5d9c5]">
                {/* Decorative leaf pattern */}
                <div className="absolute -right-8 -top-8 w-32 h-32 opacity-[0.08]">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#3d5a3d]">
                    <path d="M50,10 Q30,30 20,60 Q40,50 50,50 Q60,50 80,60 Q70,30 50,10 Z" />
                  </svg>
                </div>
                {/* Icon - Leaf/Plant for agriculture */}
                <div className="w-14 h-14 rounded-full bg-[#b8d4b8] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#a3c9a3]">
                  <svg className="w-7 h-7 text-[#3d5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-6 4-10 9-10-5 0-9-4-9-10 0 6-4 10-9 10 5 0 9 4 9 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11" />
                  </svg>
                </div>
                <h3 className="font-['Fraunces',serif] font-normal text-[28px] text-[#2d3a2d] leading-[1.2] mb-4 transition-colors duration-300">
                  Agricultura sostenible
                </h3>
                <p className="font-['Lora',serif] font-normal text-[16px] text-[#3d4a3d] leading-[1.6]">
                  Más de 12 jardines ornamentales, áreas agrícolas y un cultivo responsable que revive el suelo y atrae vida.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* El agua como recurso sagrado - Azul cielo claro */}
              <div className="relative p-8 rounded-2xl bg-[#dbe9f4] transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group overflow-hidden border border-[#c4d9eb]">
                {/* Decorative wave pattern */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-[0.08]">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2d4a5a]">
                    <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" />
                  </svg>
                </div>
                {/* Icon - Water droplet */}
                <div className="w-14 h-14 rounded-full bg-[#b5d4e8] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#9cc5de]">
                  <svg className="w-7 h-7 text-[#2d4a5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4 0-7-3-7-7 0-5 7-11 7-11s7 6 7 11c0 4-3 7-7 7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18c-2 0-4-1.5-4-4" />
                  </svg>
                </div>
                <h3 className="font-['Fraunces',serif] font-normal text-[28px] text-[#2d3a40] leading-[1.2] mb-4 transition-colors duration-300">
                  El agua como recurso sagrado
                </h3>
                <p className="font-['Lora',serif] font-normal text-[16px] text-[#3d4a50] leading-[1.6]">
                  Dos quebradas bordean la finca y crean un ambiente fresco; el agua que utilizamos proviene del manantial y de la lluvia recolectada, cada gota se valora.
                </p>
              </div>

              {/* Comida típica - Amarillo arena cálido */}
              <div className="relative p-8 rounded-2xl bg-[#f5edd8] transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group overflow-hidden border border-[#e8dfc5]">
                {/* Decorative fruit pattern */}
                <div className="absolute -right-8 -top-8 w-32 h-32 opacity-[0.08]">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#6b5a3d]">
                    <circle cx="50" cy="50" r="30" />
                  </svg>
                </div>
                {/* Icon - Tropical fruit/food */}
                <div className="w-14 h-14 rounded-full bg-[#e8dbb8] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#dccfa3]">
                  <svg className="w-7 h-7 text-[#6b5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6c3 0 5 2 5 5 0 4-2 8-5 10-3-2-5-6-5-10 0-3 2-5 5-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3M10 4c1-1 3-1 4 0" />
                  </svg>
                </div>
                <h3 className="font-['Fraunces',serif] font-normal text-[28px] text-[#3d3a2d] leading-[1.2] mb-4 transition-colors duration-300">
                  Comida típica
                </h3>
                <p className="font-['Lora',serif] font-normal text-[16px] text-[#4a473d] leading-[1.6]">
                  Con ingredientes cosechados en la finca, la Chef Elba transforma lo simple en platos llenos de sabor puertorriqueño, tradición y cariño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kabaña Azul Section */}
        <section id="kabana" className="relative py-20 lg:py-28 bg-[#a8d8d8] overflow-hidden">
          {/* Wave pattern background */}
          <div className="absolute bottom-0 left-0 w-full h-48 opacity-[0.06] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,80 Q150,60 300,80 T600,80 T900,80 T1200,80 T1500,80" stroke="#3795b4" strokeWidth="2" fill="none"/>
              <path d="M0,100 Q150,80 300,100 T600,100 T900,100 T1200,100 T1500,100" stroke="#3795b4" strokeWidth="2" fill="none" opacity="0.5"/>
              <path d="M0,120 Q150,100 300,120 T600,120 T900,120 T1200,120 T1500,120" stroke="#3795b4" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>
          </div>

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-['Fraunces',serif] font-semibold text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.2] transition-all duration-300 hover:text-[#2e7a91]">
                    Kabaña Azul
                  </h2>
                  <div className="bg-black h-[3px] w-[70px] mt-4 mb-6 transition-all duration-500 hover:w-[90px]" />
                </div>

                <p className="font-['Fraunces',serif] font-normal italic text-[20px] text-black leading-[1.4] transition-opacity duration-300 hover:opacity-80">
                  Tu pequeña casa cerca del mar.
                </p>

                <p className="font-['Lora',serif] font-normal text-[16px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Una acogedora cabaña de madera rodeada de palmas, flores y el canto del coquí.
                </p>

                <p className="font-['Lora',serif] font-normal text-[16px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Sencilla, auténtica y perfecta para quienes buscan descansar en medio de la naturaleza.
                </p>

                {/* Amenities */}
                <div className="pt-4">
                  <h3 className="font-['Fraunces',serif] font-semibold text-[20px] text-black mb-5">
                    Incluye
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d="M2.37284 4.74587V23.7285" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p29f99380} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M2.37284 20.1688H26.1011" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M7.11838 9.49106V20.1688" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Cama doble'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p219c3380} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M5.9323 11.8644H22.5421" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M17.7963 8.30511V15.4236" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Mini nevera'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p31325c80} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d="M14.2369 14.2372V14.2488" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Ventiladores de techo'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d={svgPaths.p17528500} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p23240300} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'TV / DVD'
                      },
                      {
                        icon: (
                          <svg className="size-[24px]" fill="none" viewBox="0 0 28.4739 28.4739">
                            <path d="M14.2369 23.7282H14.2485" stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p17a27400} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p5301fa8} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                            <path d={svgPaths.p11364e80} stroke="#556B2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.37283" />
                          </svg>
                        ),
                        text: 'Internet limitado'
                      }
                    ].map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/70 hover:scale-105 hover:shadow-md"
                      >
                        <div className="shrink-0 transition-transform duration-300 hover:scale-110">{amenity.icon}</div>
                        <p className="font-['Lora',serif] font-medium text-[#556b2f] text-[15px]">
                          {amenity.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-['Lora',serif] font-normal italic text-[15px] text-black leading-[1.6] pt-2 transition-opacity duration-300 hover:opacity-80">
                  Un espacio privado y tranquilo donde el ritmo de la naturaleza se convierte en parte de tu estancia.
                </p>
              </div>

              {/* Image */}
              <div className="relative lg:mt-8 group">
                {/* Hand-drawn frame effect - THICKER, MORE VISIBLE */}
                <div className="absolute -inset-4 border-[5px] border-[#3795b4] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]" style={{
                  transform: 'rotate(-0.5deg)'
                }} />
                
                <div className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src={imgRectangle5}
                    alt="Interior Kabaña Azul"
                    className="w-full h-[400px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Decorative sun stamp - top right - BIGGER */}
                <SunStamp 
                  className="absolute -top-14 -right-14 transition-all duration-500 hover:rotate-[25deg] hover:scale-110" 
                  rotation={15}
                />
                
                {/* Additional circle decoration */}
                <div className="absolute bottom-10 -left-8 size-[50px] rounded-full border-[3px] border-[#a8d8d8] opacity-70 transition-all duration-700 group-hover:scale-125" />
              </div>
            </div>
          </div>
        </section>

        {/* Patillas Location Section */}
        <section className="relative py-20 lg:py-28 bg-[#c7e0e5] overflow-hidden">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                {/* Heading */}
                <div>
                  <h2 className="font-['Fraunces',serif] font-semibold text-[36px] lg:text-[44px] text-[#3795b4] leading-[1.2] max-w-[600px] transition-all duration-300 hover:text-[#2e7a91]">
                    Un paisaje donde se encuentran el mar y la montaña
                  </h2>
                  <div className="bg-[#3795b4] h-[4px] w-[100px] mt-6 rounded-full transition-all duration-500 hover:w-[120px]" />
                </div>

                {/* Description paragraphs */}
                <div className="space-y-6">
                  <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                    Patillas es uno de los tesoros naturales de Puerto Rico, un lugar donde el mar Caribe, los ríos, las montañas y los bosques tropicales conviven en un mismo territorio.
                  </p>
                  <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                    Un destino perfecto para quienes disfrutan la naturaleza, la fotografía y la vida tranquila.
                  </p>
                </div>

                {/* Cercano a ti section */}
                <div className="pt-4 space-y-6">
                  <h3 className="font-['Fraunces',serif] font-semibold text-[#3795b4] text-[28px] leading-[1.2]">
                    Cercano a ti
                  </h3>

                  {/* Location items */}
                  <div className="space-y-4">
                    {/* Beaches */}
                    <div className="bg-[rgba(168,216,216,0.15)] border border-[rgba(168,216,216,0.3)] rounded-xl p-5 transition-all duration-300 hover:bg-[rgba(168,216,216,0.25)] hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p39496880} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p3e1e85a0} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p2e9bce00} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.5]">
                          Nueve playas a menos de 10 km
                        </p>
                      </div>
                    </div>

                    {/* Airport */}
                    <div className="bg-[rgba(168,216,216,0.15)] border border-[rgba(168,216,216,0.3)] rounded-xl p-5 transition-all duration-300 hover:bg-[rgba(168,216,216,0.25)] hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p132bb600} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path d={svgLocation.p18232e00} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.5]">
                          1 h 45 min del aeropuerto de San Juan
                        </p>
                      </div>
                    </div>

                    {/* Ferry */}
                    <div className="bg-[rgba(168,216,216,0.15)] border border-[rgba(168,216,216,0.3)] rounded-xl p-5 transition-all duration-300 hover:bg-[rgba(168,216,216,0.25)] hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.pf1aa180} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.5]">
                          45 min del ferry hacia Vieques y Culebra
                        </p>
                      </div>
                    </div>

                    {/* Hot springs */}
                    <div className="bg-[rgba(168,216,216,0.15)] border border-[rgba(168,216,216,0.3)] rounded-xl p-5 transition-all duration-300 hover:bg-[rgba(168,216,216,0.25)] hover:shadow-md hover:scale-[1.02] group">
                      <div className="flex items-center gap-5">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
                            <path d={svgLocation.p190eab00} stroke="#3795b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.5]">
                          45 min de las aguas termales de Coamo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                {/* Frame effect */}
                <div className="absolute -inset-4 border-[5px] border-[#3795b4] rounded-lg transition-all duration-500 group-hover:scale-[1.02]" style={{
                  transform: 'rotate(0.5deg)'
                }} />
                
                <div className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
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

        {/* CTA Section - CLEAN DESIGN INSPIRED BY FIGMA */}
        <section id="reserva" className="relative py-20 lg:py-32 bg-[#f7f3e8] overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-[1100px] mx-auto px-8 lg:px-20 relative">
            <div className="flex flex-col items-center text-center space-y-12">
              {/* Top tagline */}
              <h3 className="font-['Fraunces',serif] font-semibold text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.2] max-w-[900px] transition-all duration-300 hover:text-[#2e7a91]">
                Un lujo diferente, desconectar para conectar
              </h3>

              {/* Calendar Icon */}
              <CalendarIcon className="transition-all duration-500 hover:scale-110" />

              {/* Main Heading */}
              <h2 className="font-['Fraunces',serif] font-semibold text-[36px] lg:text-[44px] text-black leading-[1.2] max-w-[700px]">
                Planea tu estancia en Finka Azul
              </h2>

              {/* Description */}
              <p className="font-['Lora',serif] font-normal text-[17px] text-black leading-[1.6] max-w-[800px]">
                Elige tus fechas, confirma tu reserva y prepárate para una experiencia tranquila rodeada de naturaleza.
              </p>

              {/* CTA Button */}
              <button className="px-10 py-4 bg-[#a8d8d8] rounded-full font-['Fraunces',serif] font-normal text-[18px] text-black leading-[1.4] transition-all duration-300 hover:bg-[#98c8c8] hover:shadow-xl hover:scale-110 hover:-translate-y-1">
                Reserva ahora
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 bg-[#c7e0e5] border-t border-black/20">
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
                <p className="font-['Lora',serif] text-[15px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Un refugio rural en el corazón del Caribe. Reconecta con la naturaleza en Patillas, Puerto Rico.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h3 className="font-['Fraunces',serif] font-semibold text-[20px] text-black mb-4">
                  Contacto
                </h3>
                <ul className="space-y-2 font-['Lora',serif] text-[15px] text-black leading-[1.6]">
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">Patillas, Puerto Rico</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">info@finkaazul.com</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">(787) 555-1234</li>
                </ul>
              </div>

              {/* Enlaces */}
              <div>
                <h3 className="font-['Fraunces',serif] font-semibold text-[20px] text-black mb-4">
                  Enlaces
                </h3>
                <ul className="space-y-2 font-['Lora',serif] text-[15px]">
                  {['Inicio', 'Nosotros', 'Experiencia', 'Cabaña', 'Reservar'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-black hover:text-[#3795b4] transition-all duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-black/20 pt-8">
              <p className="font-['Lora',serif] text-[13px] text-black/80 text-center leading-[1.5] transition-opacity duration-300 hover:opacity-100">
                © 2024 Finka Azul. Todos los derechos reservados. | Política de privacidad | Términos y condiciones
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
