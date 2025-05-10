
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl"
  };

  return (
    <div className={cn("font-bold tracking-tighter flex items-center", sizeClasses[size], className)}>
      <span className="text-bburst-neon animate-glow">B</span>
      <span className="text-white">burst</span>
      <div className="relative ml-1">
        <div className="bubble bubble-sm animate-bubble-pop absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-bburst-neon to-bburst-neon-blue"></div>
      </div>
    </div>
  );
};

export default Logo;
