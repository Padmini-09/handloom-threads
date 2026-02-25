import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Feedback = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) { toast.error("Please enter your feedback."); return; }
    toast.success("Thank you for your feedback!");
    setText("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg rounded-xl border bg-card p-8 shadow-sm">
          <h1 className="font-display text-2xl font-bold text-card-foreground">Share Your Feedback</h1>
          <p className="mt-1 text-sm text-muted-foreground">Help us improve Handloom Hub</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label htmlFor="feedback">Your Suggestions</Label>
              <Textarea
                id="feedback"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tell us what you think about our platform, products, or suggestions for improvement..."
                rows={6}
                className="mt-1"
                maxLength={1000}
              />
              <p className="mt-1 text-xs text-muted-foreground">{text.length}/1000</p>
            </div>
            <Button type="submit" variant="hero" className="w-full">Submit Feedback</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
