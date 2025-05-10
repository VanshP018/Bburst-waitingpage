
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when Bburst launches.",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-black/80 border-bburst-purple/20 focus-visible:ring-bburst-purple"
        required
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="bg-bburst-purple hover:bg-bburst-vivid-purple text-white transition-all duration-300"
      >
        {loading ? (
          <span className="flex items-center">
            <span className="mr-2">Joining</span>
            <ArrowRight className="h-4 w-4 animate-pulse" />
          </span>
        ) : (
          <span className="flex items-center">
            <span className="mr-2">Join Waitlist</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default WaitlistForm;
