import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface GuestGateProps {
  children: React.ReactNode;
  message?: string;
}

const GuestGate = ({ children, message = "Sign in to access this content" }: GuestGateProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="bg-card rounded-2xl p-8 card-shadow text-center max-w-sm">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Lock size={20} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Members Only</h3>
          <p className="text-sm text-muted-foreground mb-6">{message}</p>
          <Button variant="hero" onClick={() => navigate("/auth")} className="w-full">
            Sign In
          </Button>
        </div>
      </motion.div>
    );
  }

  return <>{children}</>;
};

export default GuestGate;
