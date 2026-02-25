import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <div className="flex flex-1 flex-col items-center justify-center py-20">
          <h1 className="font-display text-2xl font-bold">Your Cart is Empty</h1>
          <p className="mt-2 text-muted-foreground">Browse our collection and add something beautiful.</p>
          <Link to="/dashboard" className="mt-6">
            <Button variant="hero">Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl font-bold">Shopping Cart</h1>
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-lg border bg-card p-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-card-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <p className="mt-1 font-bold text-primary">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="font-display text-2xl font-bold text-primary">₹{totalAmount.toLocaleString()}</span>
            </div>
            <Link to="/address" className="mt-4 block">
              <Button variant="hero" className="w-full" size="lg">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
