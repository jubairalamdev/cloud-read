import Image from "next/image";
import Hero from "@/Components/Homepage/Hero";
import HomeMarquee from "@/Components/Homepage/HomeMarquee";
import FeaturedBooks from "@/Components/Homepage/FeaturedBooks";
import BookSpotlight from "@/Components/Homepage/BookSpotlight";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeMarquee />
      <FeaturedBooks />
      <BookSpotlight />
    </main>
  );
}
