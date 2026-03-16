import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast({ title: "Password must be at least 6 characters", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);
    if (error) {
      toast({ title: "Error updating password", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password updated successfully" });
      setNewPassword("");
    }
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <h1 className="text-3xl font-bold mb-8">
          Profile & <span className="gradient-text">Settings</span>
        </h1>

        {/* Account Info */}
        <div className="bg-card rounded-2xl p-6 card-shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail size={16} />
            <span>{user.email}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Member since {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Change Password */}
        <div className="bg-card rounded-2xl p-6 card-shadow">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
              Update Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
