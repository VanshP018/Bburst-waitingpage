
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
        "neon-card neon-border p-6",
        "hover:shadow-xl transition-all duration-300 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-bburst-neon">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
