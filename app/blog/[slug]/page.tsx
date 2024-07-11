import {
  Container,
  Facebook,
  Heading,
  Instagram,
  LinkedInFooter,
  Linkedin,
  Section,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

const BlogDetailPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col gap-4 items-start justify-between">
            <Link href="/" className="text-white">
              Back to blog
            </Link>
            <div className="flex flex-col">
              <div className="">
                <Image
                  src="/Images/Brooklyn1.png"
                  alt="Brooklyn"
                  width={40}
                  height={40}
                  className="object-cover h-[40px] rounded-full"
                />
                <span className="text-white">Brooklyn Simmons</span>
              </div>
              <span className="text-white/80 text-sm">
                Solar energy specialist
              </span>
            </div>
          </div>
          <div className="col-span-4 flex flex-col my-8 gap-8 items-start md:text-center md:items-center">
            <span className="bg-white rounded-full px-2 py-1">Solar power</span>
            <Heading as="h1" className="text-section text-white leading-none">
              Harnessing the Power of the Sun: Exploring the World of Solar
            </Heading>
            <div className="flex text-white gap-3 items-center">
              <span>9 min read</span>
              <span className="w-1 h-1 rounded-full bg-neutral-500" />
              <span>June 11, 2024</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col text-white justify-end md:items-end">
            <span className="mb-3">Share</span>
            <div className="flex gap-3">
              <Instagram />
              <Facebook />
              <LinkedInFooter />
            </div>
          </div>
        </div>
        <div className="my-4 md:my-8 flex flex-col items-center">
          <Image
            src="/Images/BlogImage.png"
            alt=""
            width={330}
            height={330}
            className="w-full h-full object-cover"
          />
          <div className="max-w-3xl text-white my-8 md:my-16 flex flex-col md:gap-16 gap-8">
            <p>
              In a world increasingly concerned with environmental
              sustainability and the search for renewable energy sources, solar
              power has emerged as a shining star. Harnessing the power of the
              sun, solar energy offers a clean and inexhaustible solution to our
              growing energy needs. This article delves into the fascinating
              world of solar energy, exploring its mechanisms, benefits, and the
              transformative impact it can have on our planet.
            </p>
            <div className="flex flex-col items-start">
              <h3 className="text-title">The power of solar energy</h3>
              <ul className="list-decimal pt-6 flex flex-col gap-10">
                <li>
                  Photovoltaic Cells
                  <ul className="flex flex-col gap-4">
                    <li className="mt-4 flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-primary-300" />
                      <p>
                        Solar panels are made up of photovoltaic (PV) cells that
                        convert sunlight into electricity.
                      </p>
                    </li>
                    <li className="mt-4 flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-primary-300" />
                      <p>
                        When sunlight hits the PV cells, it excites electrons,
                        generating an electric current.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Solar Thermal Systems
                  <ul className="flex flex-col gap-4">
                    <li className="mt-4">
                      <p>
                        Concentrated solar power (CSP) systems use mirrors or
                        lenses to focus sunlight onto a small area, producing
                        heat that can then be used to generate electricity.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Net Metering
                  <ul className="flex flex-col gap-4">
                    <li className="mt-4">
                      <p>
                        Solar energy systems often incorporate net metering,
                        allowing users to sell excess electricity back to the
                        grid, promoting energy efficiency.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlogDetailPage;
