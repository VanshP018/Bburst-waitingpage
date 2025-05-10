
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-5xl",
    xl: "text-4xl md:text-6xl"
  };

  return (
    <div className={cn("font-bold tracking-tight flex items-center", sizeClasses[size], className)}>
      <div className="relative flex items-center">
        {/* Modern B with gradient effect */}
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-bburst-neon to-bburst-neon-blue">
          B
          <span className="absolute -inset-1 blur-sm bg-bburst-neon/20 rounded-full z-[-1]"></span>
        </span>
        
        {/* Stylized text */}
        <span className="text-white font-light tracking-tighter">burst</span>
        
        {/* Multiple bubbles with different animations */}
        <div className="relative ml-1">
          <div className="bubble bubble-sm animate-bubble-pop absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-bburst-neon to-bburst-neon-blue"></div>
          <div className="bubble bubble-sm animate-pulse absolute -top-3 right-2 w-2 h-2 bg-gradient-to-r from-bburst-neon-pink to-bburst-neon-purple opacity-70"></div>
          <div className="bubble bubble-sm animate-float absolute top-1 right-3 w-1.5 h-1.5 bg-gradient-to-r from-bburst-neon-blue to-bburst-neon opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
