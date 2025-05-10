
import { useEffect } from "react";
import Logo from "@/components/Logo";
import WaitlistForm from "@/components/WaitlistForm";
import BubbleBackground from "@/components/BubbleBackground";
import FeatureCard from "@/components/FeatureCard";
import { Circle, Loader, Star } from "lucide-react";

const Index = () => {
  // Update document title when component mounts
  useEffect(() => {
    document.title = "Bburst - Unbabel the world";
  }, []);

  return (
    <div className="min-h-screen w-full hero-gradient relative overflow-hidden">
      {/* Bubble animation background */}
      <BubbleBackground />
      
      {/* Content container */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-center mb-12 pt-8">
          <Logo size="lg" />
        </header>
        
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bburst-dark tracking-tighter">
            <span className="text-bburst-purple">Unbabel</span> the world
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-bburst-neutral max-w-2xl mx-auto">
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
              icon={<Star className="h-10 w-10" />}
              delay={100}
            />
            <FeatureCard
              title="Mood Matching"
              description="Connect based on emotions. Find people who match your current mood and vibe with them."
              icon={<Circle className="h-10 w-10" />}
              delay={200}
            />
            <FeatureCard
              title="Expressive Stickers"
              description="Share your feelings with rich, cultural stickers that transcend language barriers."
              icon={<Loader className="h-10 w-10" />}
              delay={300}
            />
          </div>
        </section>
        
        {/* Coming Soon Banner */}
        <div className="text-center animate-pulse my-8">
          <p className="inline-block bg-bburst-purple/10 text-bburst-dark-purple px-4 py-2 rounded-full">
            <span className="font-semibold">Coming Soon</span> | Join the waitlist to get early access
          </p>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-bburst-neutral text-sm mt-16 pb-8">
          <p>© {new Date().getFullYear()} Bburst. Breaking language barriers, one bubble at a time.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
