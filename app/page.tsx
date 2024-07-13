export const revalidate = 0;

import {
  AboutUs,
  Blog,
  Experts,
  Features,
  Hero,
  Metrics,
  NewsLetter,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="sm:p-4 p-2 bg-secondary-950">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      {/* <div className="sm:p-4 p-2">
        <Testimonials />
      </div> */}
      <Experts />
      <div className="sm:p-4 p-2 bg-secondary-950">
        <NewsLetter />
      </div>
      <Blog />
    </main>
  );
}
