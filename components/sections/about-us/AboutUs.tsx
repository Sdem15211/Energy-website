import { Check, Container, Heading, Section, SubTitle } from "@/components";
import React from "react";
import AboutUsCarousel from "./AboutUsCarousel";
import { getHomePage } from "@/sanity/queries/page";
import DynamicIcon from "@/components/elements/icons/IconComponent";

export const AboutUs = async () => {
  const data = await getHomePage();
  const { aboutUs } = data;

  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={aboutUs.tagline} />
        <div className="grid xl:grid-cols-2 gap-12 md:gap-36">
          <div className="flex flex-col gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
              {aboutUs.heading}
            </Heading>
            <p className="text-white/80">{aboutUs.excerpt}</p>
            <ul className="mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4">
              {aboutUs.solutions.map((solution: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >
                    <DynamicIcon name={solution.icon} />
                    {solution.heading}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel images={aboutUs.slider} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
