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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['refugio', 'amor', 'experiencia', 'kabana'];
      const scrollPosition = window.scrollY + 100;

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f3e8]/95 backdrop-blur-sm border-b border-[#3795b4]/20 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20 py-5 flex items-center justify-between">
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
                className={`font-['Inter',sans-serif] text-[15px] transition-all duration-300 hover:text-[#3795b4] hover:translate-y-[-2px] ${
                  activeSection === item.id ? 'text-[#3795b4] font-medium' : 'text-black font-normal'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reserva')}
              className="px-6 py-2.5 bg-[#f4d03f] rounded-full font-['Inter',sans-serif] text-[15px] text-black font-medium transition-all duration-300 hover:bg-[#e5c236] hover:shadow-md hover:scale-105"
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
              <X className="size-6 text-[#3795b4]" />
            ) : (
              <Menu className="size-6 text-[#3795b4]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#3795b4]/20 bg-[#f7f3e8] animate-in slide-in-from-top duration-300">
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
                  className={`font-['Inter',sans-serif] text-[15px] transition-all duration-300 hover:text-[#3795b4] hover:translate-x-2 block w-full text-left ${
                    activeSection === item.id ? 'text-[#3795b4] font-medium' : 'text-black font-normal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('reserva')}
                className="w-full px-6 py-2.5 bg-[#f4d03f] rounded-full font-['Inter',sans-serif] text-[15px] text-black font-medium transition-all duration-300 hover:bg-[#e5c236] text-center hover:scale-105"
              >
                Reservar
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content - starts after header */}
      <main className="pt-[73px]">
        {/* Refugio Section - Hero */}
        <section id="refugio" className="relative py-20 lg:py-28 bg-[#f7f3e8] overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-[1280px] mx-auto px-8 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Video Container */}
              <div className="relative order-2 lg:order-1 group">
                {/* Hand-drawn frame effect - THICKER, MORE VISIBLE */}
                <div className="absolute -inset-4 border-[5px] border-[#a8d8d8] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]" style={{
                  transform: 'rotate(-1deg)'
                }} />

                <div className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl bg-[#3795b4]/10">
                  {/* Video Placeholder - Replace with actual video */}
                  <div className="w-full h-[400px] lg:h-[520px] flex items-center justify-center bg-gradient-to-br from-[#a8d8d8]/30 to-[#c7e0e5]/30 relative">
                    {/* Placeholder content */}
                    <div className="text-center space-y-4 z-10">
                      <svg className="mx-auto size-20 text-[#3795b4] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-['Inter',sans-serif] text-[15px] text-[#3795b4]/60 font-medium">
                        Video con dron de Finka Azul
                      </p>
                    </div>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%233795b4' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                    }} />
                  </div>

                  {/* Uncomment and replace with your video URL */}
                  {/* <video
                    className="w-full h-[400px] lg:h-[520px] object-cover"
                    controls
                    poster="/path/to/thumbnail.jpg"
                  >
                    <source src="/path/to/drone-video.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video> */}
                </div>

                {/* Decorative stamp - bottom right - BIGGER */}
                <HandDrawnStamp
                  className="absolute -bottom-14 -right-14 transition-all duration-500 hover:rotate-[20deg] hover:scale-110"
                  rotation={12}
                  color="#a8d8d8"
                />

                {/* Additional decorative element */}
                <div className="absolute top-8 -left-6 size-[60px] rounded-full border-[3px] border-[#f4d03f] opacity-60 transition-all duration-700 group-hover:scale-125" />
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h1 className="font-['Playfair_Display',serif] font-normal text-[#3795b4] text-[40px] lg:text-[52px] leading-[1.15] transition-all duration-300 hover:text-[#2e7a91]">
                  Un refugio rural en el corazón del Caribe
                </h1>
                <p className="font-['Jost',sans-serif] font-light text-[18px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Reconecta con la tierra, respira aire puro y vive el ritmo pausado de la naturaleza en nuestro espacio eco-rural en Patillas, Puerto Rico.
                </p>
                <button
                  onClick={() => scrollToSection('reserva')}
                  className="inline-block px-8 py-3 bg-[#f4d03f] rounded-full font-['Inter',sans-serif] font-medium text-[16px] text-black transition-all duration-300 hover:bg-[#e5c236] hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                >
                  Reserva ahora
                </button>
              </div>
            </div>
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
                <h2 className="font-['Playfair_Display',serif] font-normal text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.15] transition-all duration-300 hover:text-[#2e7a91]">
                  Hecho con amor
                </h2>
                <p className="font-['Jost',sans-serif] font-light text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
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
              <h2 className="font-['Playfair_Display',serif] font-normal text-[40px] lg:text-[52px] text-black leading-[1.15] transition-all duration-300 hover:text-[#3795b4]">
                La experiencia
              </h2>
              <p className="font-['Jost',sans-serif] font-light text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                En la costa rural de Patillas, entre jardines vivos, palmas y el murmullo constante del agua, descubrirás un espacio para pausar y reconectar con lo esencial. La experiencia en Finka Azul es íntima, auténtica y profundamente natural.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
              {/* Desconexión real */}
              <div className="relative border border-black p-8 rounded-lg bg-white/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:bg-white/70 mt-12 md:mt-0 group">
                <div className="absolute -top-12 left-8 size-[72px] rounded-full bg-[#8DC5C2] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-black leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-[#3795b4]">
                  Desconexión real
                </h3>
                <p className="font-['Jost',sans-serif] font-extralight text-[16px] text-black leading-[1.6]">
                  Privacidad total, cero tráfico y sonidos completamente naturales.
                  <br /><br />
                  Un descanso que no se encuentra en hoteles ni zonas turísticas.
                </p>
              </div>

              {/* Agricultura sostenible */}
              <div className="relative border border-black p-8 rounded-lg bg-white/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:bg-white/70 group">
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-black leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-[#3795b4]">
                  Agricultura sostenible
                </h3>
                <p className="font-['Jost',sans-serif] font-extralight text-[16px] text-black leading-[1.6]">
                  Más de 12 jardines ornamentales, áreas agrícolas y un cultivo responsable que revive el suelo y atrae vida.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* El agua como recurso sagrado */}
              <div className="relative border border-black p-8 rounded-lg bg-white/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:bg-white/70 group">
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-black leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-[#3795b4]">
                  El agua como recurso sagrado
                </h3>
                <p className="font-['Jost',sans-serif] font-extralight text-[16px] text-black leading-[1.6]">
                  Dos quebradas bordean la finca y crean un ambiente fresco; el agua que utilizamos proviene del manantial y de la lluvia recolectada, cada gota se valora.
                </p>
              </div>

              {/* Comida típica */}
              <div className="relative border border-black p-8 rounded-lg bg-white/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:bg-white/70 mb-12 md:mb-0 group">
                <div className="absolute -bottom-12 right-8 size-[72px] rounded-full bg-[#8DC5C2] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]" />
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-black leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-[#3795b4]">
                  Comida típica
                </h3>
                <p className="font-['Jost',sans-serif] font-extralight text-[16px] text-black leading-[1.6]">
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
                  <h2 className="font-['Playfair_Display',serif] font-semibold text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.2] transition-all duration-300 hover:text-[#2e7a91]">
                    Kabaña Azul
                  </h2>
                  <div className="bg-black h-[3px] w-[70px] mt-4 mb-6 transition-all duration-500 hover:w-[90px]" />
                </div>

                <p className="font-['Playfair_Display',serif] font-normal italic text-[20px] text-black leading-[1.4] transition-opacity duration-300 hover:opacity-80">
                  Tu pequeña casa cerca del mar.
                </p>

                <p className="font-['Inter',sans-serif] font-normal text-[16px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Una acogedora cabaña de madera rodeada de palmas, flores y el canto del coquí.
                </p>

                <p className="font-['Inter',sans-serif] font-normal text-[16px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Sencilla, auténtica y perfecta para quienes buscan descansar en medio de la naturaleza.
                </p>

                {/* Amenities */}
                <div className="pt-4">
                  <h3 className="font-['Playfair_Display',serif] font-semibold text-[20px] text-black mb-5">
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
                        <p className="font-['Inter',sans-serif] font-medium text-[#556b2f] text-[15px]">
                          {amenity.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-['Inter',sans-serif] font-normal italic text-[15px] text-black leading-[1.6] pt-2 transition-opacity duration-300 hover:opacity-80">
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
                  <h2 className="font-['Playfair_Display',serif] font-semibold text-[36px] lg:text-[44px] text-[#3795b4] leading-[1.2] max-w-[600px] transition-all duration-300 hover:text-[#2e7a91]">
                    Un paisaje donde se encuentran el mar y la montaña
                  </h2>
                  <div className="bg-[#3795b4] h-[4px] w-[100px] mt-6 rounded-full transition-all duration-500 hover:w-[120px]" />
                </div>

                {/* Description paragraphs */}
                <div className="space-y-6">
                  <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                    Patillas es uno de los tesoros naturales de Puerto Rico, un lugar donde el mar Caribe, los ríos, las montañas y los bosques tropicales conviven en un mismo territorio.
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                    Un destino perfecto para quienes disfrutan la naturaleza, la fotografía y la vida tranquila.
                  </p>
                </div>

                {/* Cercano a ti section */}
                <div className="pt-4 space-y-6">
                  <h3 className="font-['Playfair_Display',serif] font-semibold text-[#3795b4] text-[28px] leading-[1.2]">
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
                        <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.5]">
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
                        <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.5]">
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
                        <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.5]">
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
                        <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.5]">
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
              <h3 className="font-['Playfair_Display',serif] font-semibold text-[#3795b4] text-[36px] lg:text-[44px] leading-[1.2] max-w-[900px] transition-all duration-300 hover:text-[#2e7a91]">
                Un lujo diferente, desconectar para conectar
              </h3>

              {/* Calendar Icon */}
              <CalendarIcon className="transition-all duration-500 hover:scale-110" />

              {/* Main Heading */}
              <h2 className="font-['Playfair_Display',serif] font-semibold text-[36px] lg:text-[44px] text-black leading-[1.2] max-w-[700px]">
                Planea tu estancia en Finka Azul
              </h2>

              {/* Description */}
              <p className="font-['Inter',sans-serif] font-normal text-[17px] text-black leading-[1.6] max-w-[800px]">
                Elige tus fechas, confirma tu reserva y prepárate para una experiencia tranquila rodeada de naturaleza.
              </p>

              {/* CTA Button */}
              <button className="px-10 py-4 bg-[#a8d8d8] rounded-full font-['Playfair_Display',serif] font-normal text-[18px] text-black leading-[1.4] transition-all duration-300 hover:bg-[#98c8c8] hover:shadow-xl hover:scale-110 hover:-translate-y-1">
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
                <p className="font-['Inter',sans-serif] text-[15px] text-black leading-[1.6] transition-opacity duration-300 hover:opacity-80">
                  Un refugio rural en el corazón del Caribe. Reconecta con la naturaleza en Patillas, Puerto Rico.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-[20px] text-black mb-4">
                  Contacto
                </h3>
                <ul className="space-y-2 font-['Inter',sans-serif] text-[15px] text-black leading-[1.6]">
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">Patillas, Puerto Rico</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">info@finkaazul.com</li>
                  <li className="transition-all duration-300 hover:translate-x-1 hover:text-[#3795b4]">(787) 555-1234</li>
                </ul>
              </div>

              {/* Enlaces */}
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-[20px] text-black mb-4">
                  Enlaces
                </h3>
                <ul className="space-y-2 font-['Inter',sans-serif] text-[15px]">
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
              <p className="font-['Inter',sans-serif] text-[13px] text-black/80 text-center leading-[1.5] transition-opacity duration-300 hover:opacity-100">
                © 2024 Finka Azul. Todos los derechos reservados. | Política de privacidad | Términos y condiciones
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}