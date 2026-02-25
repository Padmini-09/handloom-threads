import maheshwariImg from "@/assets/product-maheshwari.jpg";
import ikatImg from "@/assets/product-ikat.jpg";
import banarsiImg from "@/assets/product-banarasi.jpg";
import khadiImg from "@/assets/product-khadi.jpg";
import chanderiImg from "@/assets/product-chanderi.jpg";
import patolaImg from "@/assets/product-patola.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
}

export const products: Product[] = [
  { id: "1", name: "Maheshwari Silk Saree", price: 8500, image: maheshwariImg, category: "Silk Sarees", artisan: "Ramesh Weaver" },
  { id: "2", name: "Ikat Dress", price: 4200, image: ikatImg, category: "Dresses", artisan: "Lakshmi Textiles" },
  { id: "3", name: "Banarasi Brocade", price: 12000, image: banarsiImg, category: "Silk Sarees", artisan: "Kashi Weavers" },
  { id: "4", name: "Khadi Cotton Fabric", price: 1800, image: khadiImg, category: "Cotton", artisan: "Gandhi Ashram" },
  { id: "5", name: "Chanderi Silk Saree", price: 6500, image: chanderiImg, category: "Silk Sarees", artisan: "Chanderi Artisans" },
  { id: "6", name: "Patola Double Ikat", price: 15000, image: patolaImg, category: "Heritage", artisan: "Patan Masters" },
];
