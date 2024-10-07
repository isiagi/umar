"use client";

import { ProductDetailComponent } from "@/components/product-detail";
import { menuData } from "@/lib/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  // menuData
  const { id } = useParams();
  const [filteredMeal, setFilteredMeal] = useState(null);

  useEffect(() => {
    const numericId = Number(id); // Convert id to a number

    const foundMeal = menuData.flatMap((category) =>
      category.subCategories.flatMap((subCategory) =>
        subCategory.meals.filter((meal) => meal.id === numericId)
      )
    );

    if (foundMeal.length > 0) {
      setFilteredMeal(foundMeal[0]); // Assuming you want the first matched meal
    }
  }, [id]);

  console.log(filteredMeal, "filtered meal");

  return (
    <div>
      <ProductDetailComponent data={filteredMeal} />
    </div>
  );
}

export default Page;
