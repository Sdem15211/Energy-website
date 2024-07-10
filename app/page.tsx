import {
  AboutUs,
  Experts,
  Features,
  Hero,
  Metrics,
  NewsLetter,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="p-4 bg-secondary-950">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <Experts />
      <div className="p-4 bg-secondary-950">
        <NewsLetter />
      </div>
    </main>
  );
}
