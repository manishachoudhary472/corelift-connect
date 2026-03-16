import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface GuestGateProps {
  children: React.ReactNode;
  message?: string;
}

const GuestGate = ({ children, message = "Please login to check this content" }: GuestGateProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (loading) return null;

  if (!user) {
    return (
      <>
        <div onClick={() => setDialogOpen(true)} className="cursor-pointer">
          {children}
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader className="items-center text-center">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-2">
                <Lock size={20} className="text-muted-foreground" />
              </div>
              <DialogTitle>Login Required</DialogTitle>
              <DialogDescription>{message}</DialogDescription>
            </DialogHeader>
            <Button
              variant="hero"
              className="w-full mt-2"
              onClick={() => {
                setDialogOpen(false);
                navigate("/auth");
              }}
            >
              Go to Login
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return <>{children}</>;
};

export default GuestGate;
