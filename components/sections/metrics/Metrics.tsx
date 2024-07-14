import { Container, Heading, Renewable, Section, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getHomePage } from "@/sanity/queries/page";
import React from "react";

export const Metrics = async () => {
  const data = await getHomePage();
  const { metrics } = data;
  return (
    <Section className="bg-beige">
      <Container>
        <SubTitle subTitle={metrics.tagline} className="text-secondary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading
              as="h2"
              className="text-section leading-[68px] max-w-xl tracking-tight"
            >
              {metrics.heading}
            </Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {metrics.metrics
              .filter((item: any) => item.excerpt)
              .map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-6 items-start p-10 bg-primary-300 rounded-3xl"
                  >
                    <DynamicIcon name={item.icon} />
                    <div className="flex flex-col gap-6">
                      <h3 className="text-title tracking-tight leading-none text-secondary-950">
                        {item.heading}
                      </h3>
                      <h4 className="text-subtitle leading-none">
                        {item.tagline}
                      </h4>
                      <p className="text-neutral-800">{item.excerpt}</p>
                    </div>
                  </div>
                );
              })}

            <div className="flex flex-col gap-8 justify-between">
              {metrics.metrics
                .filter((item: any) => !item.excerpt)
                .map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="h-full flex gap-6 p-8 bg-primary-300 rounded-3xl"
                    >
                      <DynamicIcon name={item.icon} />
                      <div className="flex flex-col gap-4">
                        <h3 className="text-title leading-none tracking-tight text-secondary-950">
                          {item.heading}
                        </h3>
                        <h4 className="text-subtitle leading-none">
                          {item.tagline}
                        </h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
