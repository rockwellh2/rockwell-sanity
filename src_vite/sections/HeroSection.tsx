import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimating = useRef(false);

  const nextImage = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => { isAnimating.current = false; }, 1200);
  }, []);

  const prevImage = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => { isAnimating.current = false; }, 1200);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextImage]);

  const goToImage = (index: number) => {
    if (isAnimating.current || index === currentImage) return;
    isAnimating.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImage(index);
    intervalRef.current = setInterval(nextImage, 7000);
    setTimeout(() => { isAnimating.current = false; }, 1200);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden z-10">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={src}
              alt={`Rockwell H2 Installation ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                rgba(245,247,250,1) 0%, 
                rgba(245,247,250,0.95) 15%,
                rgba(245,247,250,0.85) 30%,
                rgba(245,247,250,0.6) 50%,
                rgba(245,247,250,0.3) 70%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Cloud/Mist effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 30%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 20% 90%, rgba(255,255,255,0.7) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 85%, rgba(255,255,255,0.6) 0%, transparent 50%)
            `,
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(245,247,250,1) 0%, rgba(245,247,250,0.9) 30%, rgba(245,247,250,0.5) 60%, transparent 100%)',
          }}
        />

        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-200/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 min-h-screen flex flex-col justify-center section-padding animate-fade-in"
      >
        <div className="max-w-2xl pt-24 pb-32">
          <p className="text-emerald-600 text-sm font-medium mb-6 tracking-wide">
            Turnkey Hydrogen Solutions
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-500 leading-[1.05] mb-6">
            The Solution to a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
              Hydrogen Future
            </span>{' '}
            Is Here
          </h1>

          <p className="text-lg sm:text-xl text-navy-500/70 leading-relaxed mb-10 max-w-lg">
            Modular hydrogen production, storage, and fueling systems for sustainable energy independence.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-500 text-white font-semibold rounded-xl hover:bg-navy-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a System Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border border-navy-500/20 text-navy-500 font-semibold rounded-xl hover:bg-white transition-all"
            >
              See How It Works
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-navy-500/60">
            <span>99.5% Uptime</span>
            <span className="text-navy-500/30">|</span>
            <span>24/7 Monitoring</span>
            <span className="text-navy-500/30">|</span>
            <span>Zero Emissions</span>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 xl:left-12 2xl:left-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevImage}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-navy-500/10 flex items-center justify-center hover:bg-white transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-navy-500" />
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-navy-500/10 flex items-center justify-center hover:bg-white transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-navy-500" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentImage ? 'w-8 bg-emerald-500' : 'w-2 bg-navy-300 hover:bg-navy-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <span className="text-sm text-navy-500/50 font-medium">
            {currentImage + 1} / {heroImages.length}
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-navy-400" />
      </div>
    </section>
  );
};

export default HeroSection;
