
import { useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import WaitlistForm from "@/components/WaitlistForm";
import BubbleBackground from "@/components/BubbleBackground";
import FeatureCard from "@/components/FeatureCard";
import { MessageSquare, Palette, Languages } from "lucide-react";

const Index = () => {
  const burstRefs = useRef<HTMLDivElement[]>([]);
  
  // Update document title when component mounts
  useEffect(() => {
    document.title = "Bburst - Unbabel the world";
    
    // Setup random bubble bursts
    const intervals: number[] = [];
    
    for (let i = 0; i < 3; i++) {
      intervals.push(
        setInterval(() => {
          createBubbleBurst();
        }, 3000 + (i * 2000)) // Stagger the intervals
      );
    }
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);
  
  const createBubbleBurst = () => {
    if (!document.body) return;
    
    const burst = document.createElement('div');
    burst.className = 'bubble-burst';
    
    // Random position
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const left = 50 + Math.random() * maxWidth;
    const top = 50 + Math.random() * maxHeight;
    
    burst.style.left = `${left}px`;
    burst.style.top = `${top}px`;
    burst.style.width = `${30 + Math.random() * 50}px`;
    burst.style.height = burst.style.width;
    
    document.body.appendChild(burst);
    
    // Create particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'burst-particle';
      
      const angle = (i / 8) * Math.PI * 2;
      const tx = Math.cos(angle) * (50 + Math.random() * 50);
      const ty = Math.sin(angle) * (50 + Math.random() * 50);
      
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      particle.style.left = `${left}px`;
      particle.style.top = `${top}px`;
      
      document.body.appendChild(particle);
      
      // Remove particles after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 800);
    }
    
    // Remove burst after animation
    setTimeout(() => {
      if (burst.parentNode) {
        burst.parentNode.removeChild(burst);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen w-full hero-gradient relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="grid-background"></div>
      
      {/* Bubble animation background */}
      <BubbleBackground />
      
      {/* Content container */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-center mb-12 pt-8">
          <Logo size="xl" />
        </header>
        
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tighter">
            <span className="text-bburst-neon animate-glow-light">Unbabel</span> <span className="text-white">the world</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Connect with anyone, anywhere, in any language. Break language barriers and find your perfect bubble.
          </p>
          
          {/* Waitlist Form */}
          <div className="mb-16">
            <WaitlistForm />
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              title="Language Freedom"
              description="Chat in your native language while others receive messages in theirs. No more translation struggles."
              icon={<Languages className="h-10 w-10" />}
              delay={100}
            />
            <FeatureCard
              title="Mood Matching"
              description="Connect based on emotions. Find people who match your current mood and vibe with them."
              icon={<Palette className="h-10 w-10" />}
              delay={200}
            />
            <FeatureCard
              title="Expressive Stickers"
              description="Share your feelings with rich, cultural stickers that transcend language barriers."
              icon={<MessageSquare className="h-10 w-10" />}
              delay={300}
            />
          </div>
        </section>
        
        {/* Coming Soon Banner */}
        <div className="text-center my-8">
          <p className="inline-block bg-bburst-neon/10 border border-bburst-neon/20 text-bburst-neon px-6 py-2 rounded-full animate-pulse">
            <span className="font-semibold">Coming Soon</span> | Join the waitlist to get early access
          </p>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-16 pb-8">
          <p>© {new Date().getFullYear()} Bburst. Breaking language barriers, one bubble at a time.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
