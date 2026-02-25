import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Address = () => {
  const [form, setForm] = useState({ name: "", contact: "", address: "", city: "", state: "", pincode: "" });

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v.trim())) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Address Saved Successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg rounded-xl border bg-card p-8 shadow-sm">
          <h1 className="font-display text-2xl font-bold text-card-foreground">Shipping Address</h1>
          <p className="mt-1 text-sm text-muted-foreground">Enter your delivery details</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" className="mt-1" />
            </div>
            <div>
              <Label>Contact Number</Label>
              <Input value={form.contact} onChange={(e) => update("contact", e.target.value)} placeholder="+91 9876543210" className="mt-1" />
            </div>
            <div>
              <Label>Address</Label>
              <Input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Street, Building" className="mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>City</Label>
                <Input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Mumbai" className="mt-1" />
              </div>
              <div>
                <Label>State</Label>
                <Input value={form.state} onChange={(e) => update("state", e.target.value)} placeholder="Maharashtra" className="mt-1" />
              </div>
            </div>
            <div>
              <Label>Pincode</Label>
              <Input value={form.pincode} onChange={(e) => update("pincode", e.target.value)} placeholder="400001" className="mt-1" />
            </div>
            <Button type="submit" variant="hero" className="w-full" size="lg">Save Address</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Address;
