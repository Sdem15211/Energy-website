import { AboutUs, Features, Hero, Metrics } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="p-4 bg-secondary-950">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
    </main>
  );
}
