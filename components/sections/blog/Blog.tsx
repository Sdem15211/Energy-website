import { Button, Container, Heading, Section, SubTitle } from "@/components";
import Image from "next/image";
import React from "react";

export const Blog = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Blog" />

        <div>
          <div className="flex justify-between items-center w-full">
            <Heading as="h2" className="text-section leading-none text-white">
              Blog
            </Heading>
            <Button variant={"tertiary-reversed"}>See all</Button>
          </div>

          <div className="grid mt-12 sm:mt-24 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex flex-col group gap-8 cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden h-[388px]">
                <Image
                  src="/Images/BlogImage.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <h3 className="text-white text-subtitle mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 ">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology, its environmental benefits,
                    and how you can tap into this sustainable energy source for
                    a brighter future.
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-6 justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Images/Brooklyn1.png"
                      alt=""
                      height={40}
                      width={40}
                      className="object-cover rounded-full"
                    />
                    <span className="text-white text-sm">Brooklyn Simmons</span>
                  </div>
                  <span className="text-white text-sm">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col group gap-8 cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden h-[388px]">
                <Image
                  src="/Images/BlogImage.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <h3 className="text-white text-subtitle mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 ">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology, its environmental benefits,
                    and how you can tap into this sustainable energy source for
                    a brighter future.
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-6 justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Images/Brooklyn1.png"
                      alt=""
                      height={40}
                      width={40}
                      className="object-cover rounded-full"
                    />
                    <span className="text-white text-sm">Brooklyn Simmons</span>
                  </div>
                  <span className="text-white text-sm">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col group gap-8 cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden h-[388px]">
                <Image
                  src="/Images/BlogImage.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <h3 className="text-white text-subtitle mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 ">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology, its environmental benefits,
                    and how you can tap into this sustainable energy source for
                    a brighter future.
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-6 justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Images/Brooklyn1.png"
                      alt=""
                      height={40}
                      width={40}
                      className="object-cover rounded-full"
                    />
                    <span className="text-white text-sm">Brooklyn Simmons</span>
                  </div>
                  <span className="text-white text-sm">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col group gap-8 cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden h-[388px]">
                <Image
                  src="/Images/BlogImage.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <h3 className="text-white text-subtitle mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 ">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology, its environmental benefits,
                    and how you can tap into this sustainable energy source for
                    a brighter future.
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-6 justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Images/Brooklyn1.png"
                      alt=""
                      height={40}
                      width={40}
                      className="object-cover rounded-full"
                    />
                    <span className="text-white text-sm">Brooklyn Simmons</span>
                  </div>
                  <span className="text-white text-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
