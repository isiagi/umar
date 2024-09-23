"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function HeroSectionComponent() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#FFF8E1]">
      <Image
        src="https://images.unsplash.com/photo-1603496987674-79600a000f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D"
        alt="Delicious grilled chicken dishes"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E1] to-transparent" />
      <div className="relative h-full flex flex-col justify-center items-start text-[#4A3E2A] p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
          Umar Chicken Master
        </h1>
        <p className="text-xl sm:text-2xl mb-6 max-w-xl">
          Savor the finest chicken dishes, grilled to perfection and delivered
          fresh to your doorstep
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 mb-8">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search our menu"
              className="w-full pl-10 pr-4 py-2 text-[#4A3E2A] bg-white border-[#E6A23C]"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6A23C]"
              size={20}
            />
          </div>
          <Button className="bg-[#E6A23C] hover:bg-[#D48806] text-white">
            <ShoppingBag className="mr-2 h-4 w-4" /> Order Now
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-[#E6A23C] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Grilled Specialties
          </span>
          <span className="bg-[#E6A23C] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Family Platters
          </span>
          <span className="bg-[#E6A23C] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Spicy Wings
          </span>
        </div>
        <p className="text-sm sm:text-base font-medium">
          Free delivery on orders over $30!
        </p>
      </div>
    </section>
  );
}
