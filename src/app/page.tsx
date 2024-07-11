import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Reviews } from "@/components/Reviews";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WhyUs />
        <Gallery />
        <AboutUs />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
