import { Container, Heading, Section, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getHomePage } from "@/sanity/queries/page";
import Link from "next/link";
import React from "react";

export const Features = async () => {
  const data = await getHomePage();
  const { solutions } = data;
  return (
    <Section className="bg-beige rounded-3xl">
      <Container>
        <SubTitle subTitle={solutions.tagline} className="text-secondary-950" />

        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              {solutions.heading}
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 gap-8 xl:grid-cols-4">
            {solutions.solutions.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-6 items-start">
                  <DynamicIcon name={item.icon} />
                  <div>
                    <Heading as="h3" className="text-title leading-none mb-4">
                      {item.heading}
                    </Heading>
                    <p className="text-neutral-800">{item.excerpt}</p>
                  </div>
                  <button className="text-primary-950">
                    <Link href="/pricing">Read More</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
