import { MealCardsFilter } from "@/components/meal-cards-filter";
import { menuData } from "@/lib/data";
import React from "react";

function Page() {
  return (
    <div className="pt-[10vh] md:pt-[15vh]">
      <MealCardsFilter data={menuData} />
    </div>
  );
}

export default Page;
