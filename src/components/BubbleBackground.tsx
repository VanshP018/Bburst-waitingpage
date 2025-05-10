
import React, { useEffect, useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

interface Bubble {
  id: number;
  size: "sm" | "md" | "lg";
  left: number;
  delay: number;
  duration: number;
}

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const bubblesCount = useRef(0);

  useEffect(() => {
    // Generate initial bubbles
    generateBubbles(15);
    
    // Regenerate bubbles every few seconds
    const interval = setInterval(() => {
      if (bubblesCount.current < 30) {
        generateBubbles(Math.floor(Math.random() * 3) + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const generateBubbles = (count: number) => {
    if (!containerRef.current) return;
    
    const newBubbles: Bubble[] = [];
    const containerWidth = containerRef.current.offsetWidth;
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() > 0.6 ? "lg" : Math.random() > 0.4 ? "md" : "sm";
      newBubbles.push({
        id: Date.now() + i,
        size,
        left: Math.random() * (containerWidth - 100),
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      });
      
      bubblesCount.current += 1;
    }
    
    setBubbles(prev => [...prev, ...newBubbles]);
  };

  const handleBubbleClick = (id: number) => {
    // Remove the clicked bubble
    setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    bubblesCount.current -= 1;
    
    // Show fun message
    const messages = [
      "Pop! You burst a bubble!",
      "Language barriers? Gone!",
      "One bubble at a time!",
      "Unbabeling the world!",
      "Connect across languages!"
    ];
    
    toast({
      title: messages[Math.floor(Math.random() * messages.length)],
      duration: 2000,
    });
  };

  const handleBubbleAnimationEnd = (id: number) => {
    setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    bubblesCount.current -= 1;
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          onClick={() => handleBubbleClick(bubble.id)}
          onAnimationEnd={() => handleBubbleAnimationEnd(bubble.id)}
          className={`
            bubble interactive 
            bubble-${bubble.size} 
            animate-bubble-rise
          `}
          style={{
            left: `${bubble.left}px`,
            bottom: '-100px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
