"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const menuData = [
  {
    name: "Ordinary",
    subCategories: [
      {
        name: "Chicken with Chips",
        meals: [
          { name: "Full Chicken with Chips", price: 40000 },
          { name: "Half Chicken with Chips", price: 30000 },
          { name: "Plain Chips", price: 7000 },
        ],
      },
      {
        name: "Chicken with Pilao",
        meals: [
          { name: "Full Chicken with Pilao", price: 40000 },
          { name: "Half Chicken with Pilao", price: 30000 },
          { name: "Plain Pilao", price: 7000 },
        ],
      },
    ],
  },
  {
    name: "Tray",
    subCategories: [
      {
        name: "Tray Meals",
        meals: [
          { name: "Tray Meal 1", price: 50000 },
          { name: "Tray Meal 2", price: 60000 },
        ],
      },
    ],
  },
];

export function MealCards() {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      {menuData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          {category.subCategories.map((subCategory, subCategoryIndex) => (
            <div key={subCategoryIndex} className="mb-6">
              <h3 className="text-lg font-medium mb-3">{subCategory.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subCategory.meals.map((meal, mealIndex) => (
                  <Card key={mealIndex}>
                    <CardHeader>
                      <div className="relative">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D"
                          }
                          alt={"hello"}
                          width={500}
                          height={300}
                          className="w-full h-52 object-cover"
                        />
                      </div>

                      <h3>{meal.name}</h3>
                      <p className="">{meal.price} sh</p>
                    </CardHeader>

                    <CardFooter>
                      <Button
                        onClick={() => addToCart(meal)}
                        className="w-full"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - {item.price} sh
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-bold">
          Total: {cart.reduce((sum, item) => sum + item.price, 0)} sh
        </p>
      </div>
    </div>
  );
}
