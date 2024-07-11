import {
  Button,
  Container,
  Heading,
  LinkedInFooter,
  NewsLetter,
  Section,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-24">
            <Heading as="h1" className="text-hero">
              About us
            </Heading>
            <div>
              <p className="mb-4">
                At Flow, we're committed to a sustainable future. As a
                pioneering force in the green energy sector, we've been at the
                forefront of the transition to clean, renewable power sources.
                Our mission is simple yet profound: to create a world where
                energy is not only abundant but also environmentally
                responsible. We believe that by harnessing the power of nature,
                we can power the world and protect it simultaneously.
              </p>
              <Button variant={"secondary"}>Read more</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 mt-4 md:grid-rows-2 gap-4">
            <div className="col-span-2 gap-4 h-full grid grid-rows-3 grid-cols-2 row-span-2">
              <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden">
                <Image
                  src="/Images/About-usImg.jpeg"
                  alt="about us image"
                  width={450}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 grid grid-rows-2 gap-4">
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 gap-4 h-full grid grid-rows-3 grid-cols-2 row-span-2">
              <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden md:row-start-3">
                <Image
                  src="/Images/About-usImg.jpeg"
                  alt="about us image"
                  width={450}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 grid grid-rows-2 gap-4">
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <div>
            <Heading as="h2" className="text-section leading-none mb-24">
              Our work philosophy
            </Heading>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-primary-300 rounded-3xl flex flex-col sm:flex-row gap-10 p-8 justify-between">
              <div className="flex flex-col justify-between">
                <span className="text-sm">Value</span>
                <Heading as="h4" className="text-title leading-none">
                  Sustainability
                </Heading>
              </div>
              <p className="text-neutral-800 sm:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium fugit suscipit sunt tempora maiores in officiis
                ipsam, explicabo, alias distinctio voluptatem nihil non odio
                accusantium. Recusandae temporibus nesciunt perspiciatis
                laudantium!
              </p>
            </div>{" "}
            <div className="bg-primary-300 rounded-3xl flex flex-col sm:flex-row gap-10 p-8 justify-between">
              <div className="flex flex-col justify-between">
                <span className="text-sm">Value</span>
                <Heading as="h4" className="text-title leading-none">
                  Sustainability
                </Heading>
              </div>
              <p className="text-neutral-800 sm:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium fugit suscipit sunt tempora maiores in officiis
                ipsam, explicabo, alias distinctio voluptatem nihil non odio
                accusantium. Recusandae temporibus nesciunt perspiciatis
                laudantium!
              </p>
            </div>
            <div className="bg-primary-300 rounded-3xl flex flex-col sm:flex-row gap-10 p-8 justify-between">
              <div className="flex flex-col justify-between">
                <span className="text-sm">Value</span>
                <Heading as="h4" className="text-title leading-none">
                  Sustainability
                </Heading>
              </div>
              <p className="text-neutral-800 sm:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium fugit suscipit sunt tempora maiores in officiis
                ipsam, explicabo, alias distinctio voluptatem nihil non odio
                accusantium. Recusandae temporibus nesciunt perspiciatis
                laudantium!
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <div className="sm:p-4 p-2 bg-secondary-950">
        <NewsLetter />
      </div>
      <Section className="bg-white">
        <Container>
          <div>
            <Heading as="h2" className="text-section leading-none mb-24">
              A team of energy experts
            </Heading>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/Images/Brooklyn1.png"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-14 h-0 duration-300 px-6 py-1  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Brooklyn Simmons
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LinkedInFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                    <li className="text-sub-title">Happy person</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default AboutPage;
