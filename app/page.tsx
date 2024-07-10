import { AboutUs, Features, Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="p-4 bg-secondary-950">
        <Features />
      </div>
      <AboutUs />
    </main>
  );
}
