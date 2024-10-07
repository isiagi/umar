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
import { ShoppingBagIcon, ShoppingCart, ViewIcon } from "lucide-react";
import useCartStore from "@/app/context/cartStore";
import Link from "next/link";

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

export function MealCards({ data }) {
  console.log(data, "testing data");

  const [cart, setCart] = useState([]);

  const addItem = useCartStore((state) => state.addItem);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      {data?.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          {category.subCategories.map((subCategory, subCategoryIndex) => (
            <div key={subCategoryIndex} className="mb-6">
              <h3 className="text-lg font-medium mb-3">{subCategory.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
                {subCategory.meals.map((meal, mealIndex) => (
                  <Card key={mealIndex} className="relative group">
                    <CardHeader className="p-4">
                      <div className="relative overflow-hidden rounded-md">
                        <Image
                          src={
                            meal.image ||
                            "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"
                          }
                          alt={"hello"}
                          width={500}
                          height={300}
                          className="w-full h-60 object-cover overflow-hidden  group-hover:scale-110 group-hover:rounded-md transition rounded-md"
                        />
                      </div>
                      <div className="pt-3">
                        <h3 className="font-medium text-muted-foreground">
                          {meal.name}
                        </h3>
                        <p className="text-xl font-semibold pt-3">
                          {meal.price} shs
                        </p>
                      </div>
                    </CardHeader>

                    <CardFooter className="absolute bottom-[78px] top-4 right-0 p-4 hidden group-hover:flex group-hover:flex-col gap-4 justify-center bg-white/30 backdrop-blur-sm transition-all duration-300">
                      <Button onClick={() => addItem(meal)} className="w-full">
                        <ShoppingBagIcon className="h-5 w-5" />
                      </Button>

                      <Link href={`/menu/${meal.id}`} asChild>
                        <Button className="w-full">
                          <ViewIcon className="h-5 w-5" />
                        </Button>
                      </Link>
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
