import {
  Container,
  Facebook,
  Heading,
  Instagram,
  LinkedInFooter,
  Linkedin,
  NewsLetter,
  Section,
  SubTitle,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

const BlogDetailPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col gap-4 items-start justify-between">
            <Link href="/blog" className="text-white">
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
              <ul className="list-none pt-6 flex flex-col gap-10">
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
            <NewsLetter />
            <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl">
              <p className="text-center text-white text-sub-title min-h-[140px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Earum magnam non, repellendus ab commodi, expedita fugit
                minima maxime autem doloribus ratione similique odit quo fugiat
                nostrum soluta sint temporibus itaque.!”
              </p>
              <div className="flex gap-6 md:items-center sm:flex-row mt-3 md:mt-0 ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/Images/Brooklyn1.png"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-white flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-white text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-title">The Basics of Solar Energy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus atque maiores, ducimus nulla corporis, sed rem quod vel
                ut ad quaerat eaque molestias eveniet recusandae amet itaque?
                Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus atque maiores, ducimus nulla corporis, sed rem
                quod vel ut ad quaerat eaque molestias eveniet recusandae amet
                itaque? Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo.
              </p>
            </div>
            <Image
              src="/Images/hero1.png"
              alt="Blog A"
              width={330}
              height={330}
              className="w-full h-full group-hover:scale-110 duration-300 object-cover"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-title">The Basics of Solar Energy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus atque maiores, ducimus nulla corporis, sed rem quod vel
                ut ad quaerat eaque molestias eveniet recusandae amet itaque?
                Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus atque maiores, ducimus nulla corporis, sed rem
                quod vel ut ad quaerat eaque molestias eveniet recusandae amet
                itaque? Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo.
              </p>
            </div>
            <div className="flex gap-8 p w-full px-10 py-8  rounded-3xl bg-beige text-black">
              <div className="h-[56px] w-[56px] shrink-0 relative">
                <Image
                  src="/Images/Brooklyn1.png"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-full">
                <div className=" flex flex-col ">
                  <h3 className="text-sub-title font-bold">Brooklyn Simmons</h3>
                  <p className=" text-sm opacity-90">Solar energy service </p>
                </div>
                <p className="">
                  Leslie Alexander is a distinguished Solar Energy Specialist at
                  the forefront of the renewable energy revolution. With a
                  passion for sustainable technology and a commitment to
                  addressing the global energy crisis, Leslie has dedicated her
                  career to advancing the field of solar energy.
                </p>
                <LinkedInFooter />
              </div>
            </div>
          </div>
        </div>
        <div>
          <SubTitle subTitle="More like this" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px]">
                <Link href="/blog/a">
                  <Image
                    src="/Images/BlogImage.png"
                    alt=""
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-subtitle mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar
                    </Link>
                    Energy
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology.
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
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px]">
                <Link href="/blog/a">
                  <Image
                    src="/Images/BlogImage.png"
                    alt=""
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-subtitle mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar
                    </Link>
                    Energy
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology.
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
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px]">
                <Link href="/blog/a">
                  <Image
                    src="/Images/BlogImage.png"
                    alt=""
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-subtitle mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar
                    </Link>
                    Energy
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar technology.
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

export default BlogDetailPage;
