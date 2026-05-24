import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let opacity = 0;
    let rafId: number;
    let fadingOut = false;

    const animateOpacity = (target: number, duration: number, onComplete?: () => void) => {
      const startOpacity = opacity;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        opacity = startOpacity + (target - startOpacity) * progress;
        if (video) video.style.opacity = opacity.toString();
        if (progress < 1) { rafId = requestAnimationFrame(tick); }
        else if (onComplete) { onComplete(); }
      };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    };

    const handleCanPlay = () => { video.play().catch(() => {}); animateOpacity(1, 500); };
    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55 && !fadingOut) { fadingOut = true; animateOpacity(0, 500); }
    };
    const handleEnded = () => {
      video.style.opacity = '0'; opacity = 0;
      setTimeout(() => { video.currentTime = 0; video.play().catch(() => {}); fadingOut = false; animateOpacity(1, 500); }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col">
      {/* Background video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted autoPlay playsInline preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/90 pointer-events-none z-[1]" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-[2]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black to-transparent pointer-events-none z-[2]" />

      {/* Navbar */}
      <nav className="relative z-20 px-4 sm:px-6 pt-8 w-full flex justify-center">
        <div className="liquid-glass rounded-full w-full max-w-3xl px-4 py-2 flex items-center justify-between border border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-3 pl-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg shrink-0">
              <span className="text-black font-bold text-sm tracking-tight">Nn</span>
            </div>
            <span className="text-white font-semibold text-base tracking-wide hidden sm:block">NeuroNotes</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors font-medium">Features</a>
            <a href="#preview" className="text-white/60 hover:text-white text-sm transition-colors font-medium">Preview</a>
            <a href="#faq" className="text-white/60 hover:text-white text-sm transition-colors font-medium">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#footer-waitlist"
            className="hidden md:block liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors border border-white/20 shrink-0"
            onClick={(e) => { e.preventDefault(); document.getElementById('footer-waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Join Waitlist
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 liquid-glass rounded-2xl border border-white/10 p-5 flex flex-col gap-4 md:hidden"
          >
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-base font-medium transition-colors">Features</a>
            <a href="#preview" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-base font-medium transition-colors">Preview</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-base font-medium transition-colors">FAQ</a>
            <a
              href="#footer-waitlist"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('footer-waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="liquid-glass rounded-full px-6 py-2.5 text-white text-sm font-medium text-center border border-white/20 hover:bg-white/10 transition-colors"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pb-20 pt-8">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Status badge */}
        <div className="liquid-glass rounded-full px-5 py-2 mb-10 flex items-center gap-2.5 border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-white/80 text-xs md:text-sm tracking-widest uppercase font-medium">Early access · Now open</span>
        </div>

        {/* Main heading */}
        <h1 className="relative font-serif text-white leading-none tracking-tight mb-6 text-center">
          <span className="block text-5xl md:text-7xl lg:text-[6.5rem] mb-3 font-serif">NeuroNotes</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-serif italic text-white/60">is coming soon.</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 w-full max-w-xs md:max-w-sm">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-white/30 text-xs tracking-widest uppercase">AI-powered learning</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Subtitle */}
        <p className="text-white text-base md:text-xl leading-relaxed max-w-xl mx-auto mb-10 font-light drop-shadow-lg shadow-black">
          Import PDFs. Get AI chapters. Quiz your knowledge. Map your ideas. <br className="hidden md:block"/>
          <span className="text-white font-normal drop-shadow-xl shadow-black">Your second brain, supercharged.</span>
        </p>

        {/* Email input */}
        <div id="waitlist" className="max-w-2xl mx-auto mb-16 relative z-10">
          {subscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/20 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(16,185,129,0.1)]"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-emerald-400 text-2xl font-light">✓</span>
                <h3 className="text-white text-2xl font-bold tracking-tight">You're on the list!</h3>
              </div>
              <p className="text-white/60 text-base font-light">We'll reach out as soon as NeuroNotes goes live. Watch your inbox.</p>
              <p className="text-white/30 text-xs mt-8">No spam, ever. Unsubscribe anytime.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="liquid-glass rounded-xl flex items-center gap-3 px-5 py-3.5 flex-1 border border-white/10 focus-within:border-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/30 flex-1 text-sm md:text-base font-light w-full"
                />
              </div>
              <button type="submit" className="liquid-glass rounded-xl px-6 py-3.5 text-white text-sm font-medium border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 group">
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          <p className="text-white/30 text-xs mt-4 text-center tracking-wide">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
