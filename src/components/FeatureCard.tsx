
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-bburst-light-purple",
        "hover:shadow-xl transition-all duration-300 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-bburst-purple">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-bburst-dark-purple">{title}</h3>
      <p className="text-bburst-neutral">{description}</p>
    </div>
  );
};

export default FeatureCard;
