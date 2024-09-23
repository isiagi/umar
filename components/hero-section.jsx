"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function HeroSectionComponent() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1603496987674-79600a000f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D"
        alt="Delicious food spread"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <div className="relative h-full flex flex-col justify-center items-start text-white p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
          Delicious Food, Delivered to Your Door
        </h1>
        <p className="text-xl sm:text-2xl mb-6 max-w-xl">
          Order your favorite meals from the best local restaurants
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 mb-8">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search for dishes or restaurants"
              className="w-full pl-10 pr-4 py-2 text-black"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingBag className="mr-2 h-4 w-4" /> Order Now
          </Button>
        </div>
        <p className="text-sm sm:text-base">
          Free delivery on your first order!
        </p>
      </div>
    </section>
  );
}
