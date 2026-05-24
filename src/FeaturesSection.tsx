import { motion } from 'framer-motion';
import { FileText, BrainCircuit, Network, Users, Video, MessageSquareText } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Particle Background Component ---
const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-40">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{ y: [0, -100], opacity: [0, 0.8, 0] }}
            transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
          />
        ))}
      </div>
    </div>
  );
};

// --- Custom UI Mockups ---

const MockupCards = () => (
  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center gap-4 p-6">
    <div className="w-1/2 h-full bg-[#11111A] rounded-xl border border-white/5 p-5 flex flex-col relative overflow-hidden">
      <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] border-2 border-[#11111A]" />
      <h4 className="text-white text-sm font-semibold mb-3 pr-6 truncate">Smart Leads Dashboard</h4>
      <p className="text-white/40 text-[10px] leading-relaxed mb-4">
        ## Project Overview & Technical Stack<br/>
        Build a full-stack Lead Management Dashboard using the MERN stack with clean architecture, scalable code practices, and a professional user... experience.
      </p>
    </div>
    <div className="w-1/2 h-full bg-[#11111A] rounded-xl border border-white/5 p-5 flex flex-col relative overflow-hidden">
      <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] border-2 border-[#11111A]" />
      <h4 className="text-white text-sm font-semibold mb-3 pr-6 truncate">Full Stack Lead Gen...</h4>
      <p className="text-white/40 text-[10px] leading-relaxed mb-4">
        ## Assignment Overview<br/>
        The assignment simulates a simplified lead generation and distribution platform...
      </p>
      <div className="mt-auto flex flex-col gap-2">
        <div className="px-2 py-1 bg-purple-600/30 text-purple-300 text-[9px] rounded-md w-fit">#lead-generation</div>
        <div className="px-2 py-1 bg-purple-600/30 text-purple-300 text-[9px] rounded-md w-fit">#quota-management</div>
      </div>
    </div>
  </div>
);

const MockupChat = () => (
  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col p-4 md:p-6">
    <div className="h-10 border-b border-white/5 flex items-center px-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-teal-500 mr-3" />
      <span className="text-white/80 text-xs font-medium">Chat with Notes</span>
    </div>
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
       <div className="self-end bg-white/10 border border-white/5 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
          <p className="text-white/90 text-xs md:text-sm">Can you summarize the main findings of the lead gen mechanism?</p>
       </div>
       <div className="self-start bg-teal-500/10 border border-teal-500/20 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[95%] flex gap-3">
          <div className="w-6 h-6 rounded-full bg-teal-500/20 flex-shrink-0 flex items-center justify-center border border-teal-500/40 mt-0.5">
             <span className="text-teal-400 text-[8px] font-bold">AI</span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">The main finding is that automatic lead routing increases conversion rates by 40%. The system relies on two key constraints:</p>
            <div className="text-teal-200/60 text-[10px] md:text-xs bg-teal-500/5 p-3 rounded-lg border border-teal-500/10 leading-relaxed font-mono">1. Monthly Quotas<br/>2. Geographical boundaries</div>
          </div>
       </div>
    </div>
    <div className="h-12 mt-auto bg-white/5 border border-white/10 rounded-xl flex items-center px-4">
       <span className="text-white/30 text-xs">Ask a question about your notes...</span>
    </div>
  </div>
);

const MockupTesting = () => (
  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
    <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
      <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-400 to-purple-500" />
      <span className="text-white font-medium text-sm">Study Report</span>
    </div>
    <div className="p-6 flex-1 overflow-hidden flex flex-col gap-5">
      <div>
        <h5 className="text-white/30 text-[10px] tracking-widest uppercase mb-2">OVERALL</h5>
        <p className="text-white/70 text-xs leading-relaxed">
          The student answered all five questions incorrectly, indicating a lack of understanding of the core concepts of the lead generation and distribution system.
        </p>
      </div>
      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
        <h6 className="text-red-400 text-xs font-medium mb-2 flex items-center gap-2">
          <span>⚠️</span> Weak Areas
        </h6>
        <ul className="text-red-300/80 text-[10px] space-y-1 list-disc pl-4">
          <li>Purpose of the lead generation and distribution system</li>
          <li>System requirements (e.g., monthly quotas)</li>
          <li>Lead assignment mechanism</li>
        </ul>
      </div>
      <div>
        <h5 className="text-white/30 text-[10px] tracking-widest uppercase mb-2">SUGGESTIONS</h5>
        <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 flex items-start gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0" />
          <p className="text-rose-200/80 text-[10px]">Review the assignment overview and objectives, focusing on the key requirements.</p>
        </div>
        <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
          <p className="text-amber-200/80 text-[10px]">Create a checklist of each requirement and verify which are satisfied.</p>
        </div>
      </div>
    </div>
  </div>
);

const MockupViva = () => (
  <div className="relative w-full aspect-square md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-neutral-900/50">
       <div className="w-full h-full flex flex-col items-center justify-center opacity-40">
          <Video className="w-16 h-16 text-white mb-4" strokeWidth={1} />
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" />
             <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce [animation-delay:0.2s]" />
             <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce [animation-delay:0.4s]" />
          </div>
       </div>
    </div>
    <div className="absolute bottom-4 right-4 w-20 h-28 md:bottom-6 md:right-6 md:w-28 md:h-36 bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10" />
    </div>
    <div className="absolute bottom-4 left-4 right-28 md:bottom-6 md:left-6 md:right-40 bg-black/60 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-xl">
       <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <div className="text-amber-400 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">AI EXAMINER</div>
       </div>
       <div className="text-white text-xs md:text-sm lg:text-base font-medium leading-relaxed">"Can you explain the difference between Zettelkasten nodes and traditional linear notes based on Chapter 3?"</div>
    </div>
  </div>
);

const MockupMap = () => (
  <div className="relative w-full aspect-square md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex p-4 md:p-8 gap-4 md:gap-6 items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_100%)]" />
    <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
      <line x1="200" y1="150" x2="100" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <line x1="200" y1="150" x2="320" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <line x1="200" y1="150" x2="250" y2="240" stroke="rgba(244,63,94,0.5)" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="200" y1="150" x2="80" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <line x1="320" y1="100" x2="350" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      
      <circle cx="100" cy="80" r="15" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <circle cx="320" cy="100" r="20" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      {/* Weak Node */}
      <circle cx="250" cy="240" r="18" fill="#4c0519" stroke="#f43f5e" strokeWidth="2" className="animate-pulse" />
      <circle cx="80" cy="200" r="12" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <circle cx="350" cy="180" r="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      
      {/* Center Node */}
      <circle cx="200" cy="150" r="25" fill="#2e1065" stroke="#a855f7" strokeWidth="3" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
  </div>
);

const MockupCommunity = () => (
  <div className="relative w-full aspect-square md:aspect-[16/10] bg-[#0A0A12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col p-4 md:p-6 gap-4">
    <div>
      <h6 className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">COMMUNITY</h6>
      <h2 className="text-white text-3xl font-serif mb-1">The Feed</h2>
      <p className="text-white/40 text-xs">Share learnings · Read others' notes · Grow together</p>
    </div>
    
    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="text-white/60 text-[10px] font-bold tracking-widest mb-3 flex items-center gap-2">
        <span className="text-xs">✍️</span> WRITE A BLOG POST
      </div>
      <div className="border-b border-white/10 pb-2 mb-2">
        <div className="text-white/40 text-xs font-serif italic">Your post title...</div>
      </div>
      <div className="text-white/30 text-[10px] mb-6 md:mb-8">Share your thoughts, learnings, ideas...</div>
      <div className="flex items-center justify-between">
        <div className="text-white/20 text-[10px]">tags: ai, study, notes</div>
        <div className="px-4 py-1.5 rounded-full bg-purple-600/80 text-white text-[10px] font-medium hover:bg-purple-500 transition-colors cursor-pointer">Publish →</div>
      </div>
    </div>

    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white text-[8px] font-bold">K</div>
        <div>
          <div className="text-white font-serif text-sm">fhfh</div>
          <div className="text-white/40 text-[9px]">Khushi Kabra · 3d ago</div>
        </div>
      </div>
      <div className="text-white/60 text-xs">afdsgehntjmjmrhr</div>
      <div className="text-white/30 text-[9px]">♡ 1 · 1 words · 1 min read</div>
    </div>
  </div>
);

const featureBlocks = [
  {
    title: "Concept",
    highlight: "Cards",
    description: "Write atomic thoughts on Zettelkasten-style cards. Link ideas across your library and apply tags so your knowledge is perfectly organized.",
    icon: FileText,
    mockup: MockupCards,
    glow: "bg-fuchsia-600",
    textGlow: "text-fuchsia-400",
  },
  {
    title: "Talk to your",
    highlight: "Notes",
    description: "Ask your documents anything. NeuroNotes reads your notes and answers with context, extracting exact information from hundreds of pages instantly.",
    icon: MessageSquareText,
    mockup: MockupChat,
    glow: "bg-teal-600",
    textGlow: "text-teal-400",
    reverse: true,
  },
  {
    title: "Interactive",
    highlight: "Testing",
    description: "Generate quizzes instantly. View detailed Study Reports highlighting your exact weak areas, and use AI-powered suggestions to fill your knowledge gaps.",
    icon: BrainCircuit,
    mockup: MockupTesting,
    glow: "bg-rose-600",
    textGlow: "text-rose-400",
  },
  {
    title: "Simulate Exams with",
    highlight: "AI Viva",
    description: "Face an AI examiner in a real-time video session that asks questions based purely on your notes. Practice your verbal explanations before the real exam.",
    icon: Video,
    mockup: MockupViva,
    glow: "bg-amber-600",
    textGlow: "text-amber-400",
    reverse: true,
  },
  {
    title: "Visualize Your",
    highlight: "Knowledge",
    description: "View your entire study library as an interconnected map. Weak nodes are colored red to visually guide your focus where it's needed most.",
    icon: Network,
    mockup: MockupMap,
    glow: "bg-indigo-600",
    textGlow: "text-indigo-400",
  },
  {
    title: "Build Habits with the",
    highlight: "Community",
    description: "Publish your best notes directly to The Feed. Discover insights from other students, track your study streaks, and lock in your daily habits.",
    icon: Users,
    mockup: MockupCommunity,
    glow: "bg-blue-600",
    textGlow: "text-blue-400",
    reverse: true,
  }
];

export default function FeaturesSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <section id="features" className="relative bg-[#05050A] overflow-hidden">
      
      {/* Background ambient lighting matching Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#05050A] to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      
      {/* Matching Hero Star Particles */}
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-24 md:mb-40"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tight mb-6">
            Powerful Features to <br/>
            <span className="text-indigo-400 italic">Simplify Your Learning</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            Discover how our AI-driven ecosystem can transform your productivity and streamline your study sessions.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48 pb-10">
          {featureBlocks.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative`}>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit backdrop-blur-md">
                  <feature.icon className="w-4 h-4 text-white/50" />
                  <span className="text-white/60 text-xs tracking-widest uppercase font-medium">{feature.highlight}</span>
                </div>
                
                <h3 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">
                  {feature.title} <span className={`${feature.textGlow} italic`}>{feature.highlight}</span>
                </h3>
                
                <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </motion.div>

              {/* Image/Mockup Side */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="flex-1 w-full relative group"
              >
                {/* Glowing Backdrop behind the mockup */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${feature.glow} blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
                
                {/* Mockup Container */}
                <div className="relative z-10 w-full transform perspective-[2000px] rotate-x-[2deg] rotate-y-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                  <feature.mockup />
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>

      {/* --- Footer & Waitlist Area --- */}
      <footer id="footer-waitlist" className="relative z-10 border-t border-white/5 mt-10 bg-black/40 pt-24 pb-6 overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tight mb-6">
              Your second brain.<br/>
              <span className="text-indigo-400 italic drop-shadow-lg">Supercharged.</span>
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto font-light text-lg">
              NeuroNotes is launching soon. Join the waitlist to secure your early access spot.
            </p>

            <div className="max-w-xl mx-auto relative z-10">
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
                  <div className="liquid-glass rounded-2xl flex items-center gap-3 px-6 py-4 flex-1 border border-white/10 focus-within:border-white/30 transition-colors bg-white/[0.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full font-light"
                    />
                  </div>
                  <button type="submit" className="bg-white text-black font-semibold rounded-2xl px-8 py-4 hover:bg-white/90 hover:scale-[1.02] transition-all whitespace-nowrap shadow-lg shadow-white/10">
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 gap-6">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg">
                 <span className="text-black font-bold text-sm tracking-tight">Nn</span>
               </div>
               <span className="text-white font-semibold text-base tracking-wide pr-2">NeuroNotes</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-white/40 font-light">
               <span className="hover:text-white transition-colors cursor-pointer">Features</span>
               <span className="hover:text-blue-400 transition-colors cursor-pointer">Twitter</span>
               <span className="hover:text-indigo-400 transition-colors cursor-pointer">Discord</span>
            </div>
            <div className="text-white/30 text-xs font-light">
               © 2026 NeuroNotes. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
