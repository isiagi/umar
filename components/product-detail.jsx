"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function ProductDetailComponent() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, comfortable over-ear design, and long-lasting battery life.",
    price: 299.99,
    rating: 4.8,
    reviews: 1024,
    image:
      "https://img.freepik.com/premium-photo/delicious-grilled-chicken-meal-with-bell-peppers-onions-served_694765-9769.jpg?size=626&ext=jpg&ga=GA1.2.1280651120.1728286695&semt=ais_hybrid",
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const addToBag = () => {
    console.log(`Added ${quantity} ${product.name}(s) to the bag`);
    // Here you would typically update a shopping cart state or send to an API
  };

  return (
    <div className="container mx-auto px-4 pt-[10vh] md:pt-[15vh] pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=150&width=150&text=Image${
                    i + 1
                  }`}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  fill
                  className="rounded-md object-cover cursor-pointer"
                />
              </div>
            ))}
          </div> */}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {/* <div className="flex items-center space-x-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div> */}
          </div>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold w-8 text-center">
              {quantity}
            </span>
            <Button variant="outline" size="icon" onClick={incrementQuantity}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button className="w-full" size="lg" onClick={addToBag}>
            <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
          </Button>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>2-year warranty</span>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="details" className="mt-12">
        <TabsList>
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>High-quality audio with deep bass and crisp highs</li>
            <li>
              Active Noise Cancellation for immersive listening experience
            </li>
            <li>Comfortable over-ear design for long listening sessions</li>
            <li>Up to 30 hours of battery life</li>
            <li>
              Quick charge feature: 5 minutes charge for 1 hour of playback
            </li>
            <li>Bluetooth 5.0 for stable and long-range wireless connection</li>
          </ul>
        </TabsContent>
        <TabsContent value="specs" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Technical Specifications
          </h2>
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Driver Size</td>
                <td className="py-2">40mm</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Frequency Response</td>
                <td className="py-2">20Hz - 20kHz</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Impedance</td>
                <td className="py-2">32 Ohm</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Battery Capacity</td>
                <td className="py-2">800mAh</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Weight</td>
                <td className="py-2">250g</td>
              </tr>
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {[
              {
                name: "Alex",
                rating: 5,
                comment: "Excellent sound quality and comfort!",
              },
              {
                name: "Sam",
                rating: 4,
                comment: "Great headphones, but the app could be better.",
              },
              {
                name: "Jordan",
                rating: 5,
                comment: "The noise cancellation is phenomenal.",
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="font-semibold">{review.name}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={`https://img.freepik.com/premium-photo/delicious-grilled-chicken-meal-with-bell-peppers-onions-served_694765-9769.jpg?size=626&ext=jpg&ga=GA1.2.1280651120.1728286695&semt=ais_hybrid`}
                    alt={`Related Product ${item}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">Related Product {item}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  A great addition to your audio collection.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">
                    ${(199.99 + item * 20).toFixed(2)}
                  </p>
                  <Badge variant="secondary">New</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
