import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roles = [
  { value: "buyer" as const, label: "Buyer", desc: "Shop handloom products" },
  { value: "artisan" as const, label: "Artisan", desc: "Sell your creations" },
  { value: "admin" as const, label: "Admin", desc: "Manage the platform" },
  { value: "marketing" as const, label: "Marketing Specialist", desc: "Promote products" },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "artisan" | "admin" | "marketing">("buyer");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    const ok = signup(email, password, role);
    if (ok) navigate("/dashboard");
    else setError("Signup failed.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm">
          <h1 className="font-display text-2xl font-bold text-card-foreground">Create Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Join the Handloom Hub community</p>
          {error && <p className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="mt-1" />
            </div>
            <div>
              <Label>Select Your Role</Label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`rounded-lg border p-3 text-left transition-all ${
                      role === r.value
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <span className="text-sm font-medium text-card-foreground">{r.label}</span>
                    <span className="block text-xs text-muted-foreground">{r.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full" variant="hero">Create Account</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
