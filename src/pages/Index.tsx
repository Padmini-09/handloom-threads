import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Leaf, Heart } from "lucide-react";
import heroImg from "@/assets/hero-handloom.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Handloom textiles" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </div>
        <div className="container relative z-10 flex min-h-[600px] flex-col justify-center py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              Sustainable & Ethical Fashion
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-secondary-foreground md:text-6xl lg:text-7xl">
              Weaving Stories,{" "}
              <span className="text-gradient-gold">Connecting Worlds</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-secondary-foreground/80">
              Discover authentic handloom textiles directly from skilled artisans. 
              Every thread tells a story of tradition, sustainability, and craftsmanship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline-hero" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Globe, title: "Global Reach", desc: "Connecting 10,000+ artisans with buyers across 50+ countries" },
              { icon: Leaf, title: "100% Sustainable", desc: "Handwoven with natural dyes and eco-friendly processes" },
              { icon: Heart, title: "Fair Trade", desc: "Artisans receive 80% of the sale price directly" },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reach */}
      <section className="border-y bg-muted py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Market Reach</h2>
          <p className="mt-3 text-muted-foreground">The global handloom market is weaving its way to new heights</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { value: "$8.95B", label: "Target Market Size 2025" },
              { value: "35M+", label: "Artisan Families Worldwide" },
              { value: "12%", label: "Annual Growth Rate" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-8 shadow-sm">
                <p className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Join the Handloom Revolution
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Whether you're an artisan or a conscious buyer, there's a place for you at Handloom Hub.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button variant="hero" size="lg">Create Account</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
