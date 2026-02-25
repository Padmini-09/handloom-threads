import { useState } from "react";
import { Search, Camera, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BuyerDashboard = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold">
              Welcome to <span className="text-primary">Thread Aura</span>
            </h1>
            <p className="mt-1 text-muted-foreground">Logged in as {user?.email}</p>
          </div>

          {/* Search */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search fabrics, sarees, dresses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon" title="Visual Search">
              <Camera className="h-4 w-4" />
            </Button>
            <Link to="/feedback">
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-1 h-4 w-4" /> Feedback
              </Button>
            </Link>
          </div>

          {/* Categories */}
          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={search === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearch("")}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={search === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSearch(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">No products found for "{search}"</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyerDashboard;
