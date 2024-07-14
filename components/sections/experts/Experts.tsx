import { Container, Heading, Linkedin, Section, SubTitle } from "@/components";
import { getHomePage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Experts = async () => {
  const data = await getHomePage();
  const { ourExperts } = data;
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={ourExperts.tagline} />
        <div>
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="text-section leading-none text-white">
              {ourExperts.heading}
            </Heading>
            <p className="text-neutral-400">{ourExperts.excerpt}</p>
          </div>
        </div>

        <div className="mt-20">
          {ourExperts.ourExperts.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="border-b py-8 flex gap-12 items-center border-neutral-700"
              >
                <div className="relative w-[90px] h-[90px] shrink-0">
                  <Image
                    src={item.image}
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
                  <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                    <h3 className="text-subtitle">{item.heading}</h3>
                    <p className="text-neutral-600">{item.tagline}</p>
                  </div>
                  <Link href={item.link}>
                    <Linkedin />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
