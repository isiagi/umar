import { HeroSectionComponent } from "@/components/hero-section";
import { NavbarComponent } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSectionComponent />
    </>
  );
}
