import Image from "next/image";
import Hero from "@/Components/Homepage/Hero";
import HomeMarquee from "@/Components/Homepage/HomeMarquee";
import FeaturedBooks from "@/Components/Homepage/FeaturedBooks";
import BookSpotlight from "@/Components/Shared/BookSpotlight";
import Testimonials from "@/Components/Homepage/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeMarquee />
      <FeaturedBooks />
      <BookSpotlight />
      <Testimonials />
    </main>
  );
}
