import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan?: string;
}

const ProductCard = ({ id, name, price, image, category, artisan }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price, image, category });
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="group overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">{category}</span>
        <h3 className="mt-1 font-display text-lg font-semibold text-card-foreground">{name}</h3>
        {artisan && <p className="text-sm text-muted-foreground">by {artisan}</p>}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">₹{price.toLocaleString()}</span>
          <Button size="sm" variant="gold" onClick={handleAdd}>
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
