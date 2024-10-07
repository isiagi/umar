import { HeroSectionComponent } from "@/components/hero-section";
import { MealCards } from "@/components/meal-cards";
import { menuData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSectionComponent />
      <MealCards data={menuData} />
    </>
  );
}
