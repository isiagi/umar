"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import useCartStore from "@/app/context/cartStore";

// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: 8.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
    description:
      "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
  },
  {
    id: 3,
    name: "Garlic Bread",
    price: 4.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1599161146640-8d60bd2888e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
    description: "Toasted bread with garlic butter and herbs",
  },
];

export function CartPageComponent() {
  // const [cartItems, setCartItems] = useState(initialCartItems);

  // const { cartItems, totalPrice, removeItem, clearCart } = useCartStore(
  //   (state) => ({
  //     cartItems: state.cartItems,
  //     totalPrice: state.totalPrice,
  //     removeItem: state.removeItem,
  //     clearCart: state.clearCart,
  //   })
  // );
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const removeItem = useCartStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);
  const clearCart = useCartStore((state) => state.clearCart);

  // const updateQuantity = (id, change) => {
  //   setCartItems((items) =>
  //     items
  //       .map((item) =>
  //         item.id === id
  //           ? { ...item, quantity: Math.max(0, item.quantity + change) }
  //           : item
  //       )
  //       .filter((item) => item.quantity > 0)
  //   );
  // };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6 text-center">
            <p className="text-xl font-semibold mb-4">Your cart is empty</p>
            <Button>Continue Shopping</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Cart Items</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.name)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => addItem(item)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => updateQuantity(item.name, -item.quantity)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
