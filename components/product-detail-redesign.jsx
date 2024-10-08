"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Clock, Star } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/app/context/cartStore";

export function ProductDetailRedesign() {
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center bg-stone-100">
      <Card className="w-full max-w-5xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D"
              alt="Margherita Pizza"
              className="w-full h-full object-cover"
            />
            <Badge
              variant="secondary"
              className="absolute top-4 left-4 bg-white text-black"
            >
              Vegetarian
            </Badge>
          </div>
          <CardContent className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-stone-800">
                Margherita Pizza
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Clock className="w-4 h-4 mr-1 text-stone-500" />
                  <span className="text-sm text-stone-500">20 min</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                  <span className="text-sm text-stone-500">
                    4.8 (120 reviews)
                  </span>
                </div>
              </div>
              <p className="text-stone-600 mb-6">
                Classic Margherita pizza with fresh mozzarella, tomatoes, and
                basil on a crispy thin crust. Made with our signature tomato
                sauce and finished with a drizzle of extra virgin olive oil.
              </p>
              <div className="text-2xl font-bold mb-6 text-stone-800">
                $12.99
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-stone-600 font-semibold">Quantity</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    className="h-8 w-8 rounded-full border-stone-300 text-stone-600 hover:bg-stone-100"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-lg font-semibold text-stone-800">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-8 w-8 rounded-full border-stone-300 text-stone-600 hover:bg-stone-100"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Link href="/cart" className="w-full">
                <Button
                  onClick={() =>
                    addItem({
                      name: "Full Chicken with Pilao",
                      price: 40000,
                      quantity: 0,
                      image:
                        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
                    })
                  }
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white"
                >
                  Add to Cart - ${(12.99 * quantity).toFixed(2)}
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
