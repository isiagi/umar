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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ShoppingBagIcon, ShoppingCart, ViewIcon } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/app/context/cartStore";

const menuData = [
  {
    name: "Ordinary",
    subCategories: [
      {
        name: "Chicken with Chips",
        meals: [
          {
            name: "Full Chicken with Chips",
            price: 40000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Half Chicken with Chips",
            price: 30000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Plain Chips",
            price: 7000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
        ],
      },
      {
        name: "Chicken with Pilao",
        meals: [
          {
            name: "Full Chicken with Pilao",
            price: 40000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Half Chicken with Pilao",
            price: 30000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Plain Pilao",
            price: 7000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
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
          {
            name: "Tray Meal 1",
            price: 50000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Tray Meal 2",
            price: 60000,
            quantity: 0,
            image:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW4lMjBjb29rZWR8ZW58MHx8MHx8fDA%3D",
          },
        ],
      },
    ],
  },
];

export function MealCardsFilter({ data }) {
  const [cart, setCart] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const addItem = useCartStore((state) => state.addItem);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleSubCategory = (subCategoryName) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategoryName)
        ? prev.filter((sc) => sc !== subCategoryName)
        : [...prev, subCategoryName]
    );
  };

  const filteredMenu = data
    .filter(
      (category) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(category.name)
    )
    .map((category) => ({
      ...category,
      subCategories: category.subCategories.filter(
        (subCategory) =>
          selectedSubCategories.length === 0 ||
          selectedSubCategories.includes(subCategory.name)
      ),
    }));

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Menu</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Filter Menu</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Menu</SheetTitle>
              <SheetDescription>
                Select categories and subcategories to filter the menu
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-200px)] mt-4">
              {data.map((category, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${index}`}
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={() => toggleCategory(category.name)}
                    />
                    <Label htmlFor={`category-${index}`}>{category.name}</Label>
                  </div>
                  <div className="ml-6 mt-2">
                    {category.subCategories.map((subCategory, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center space-x-2 mt-1"
                      >
                        <Checkbox
                          id={`subcategory-${index}-${subIndex}`}
                          checked={selectedSubCategories.includes(
                            subCategory.name
                          )}
                          onCheckedChange={() =>
                            toggleSubCategory(subCategory.name)
                          }
                        />
                        <Label htmlFor={`subcategory-${index}-${subIndex}`}>
                          {subCategory.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
      {filteredMenu.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          {category.subCategories.map((subCategory, subCategoryIndex) => (
            <div key={subCategoryIndex} className="mb-6">
              <h3 className="text-lg font-medium mb-3">{subCategory.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
