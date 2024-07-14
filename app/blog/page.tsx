import { Container, Heading, Section, SubTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our blog" />
        <div className="text-white">
          <Heading as="h1" className="text-hero leading-none">
            Our latest posts
          </Heading>
          <p className="max-w-md mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
            eveniet hic quos consectetur. Deserunt, fugiat itaque iure omnis
            cumque, doloribus similique pariatur delectus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          <div className="flex group flex-col gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, we&apos;ll delve into the incredible potential
                  of solar technology.
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
            <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, we&apos;ll delve into the incredible potential
                  of solar technology.
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, we&apos;ll delve into the incredible potential
                  of solar technology.
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, we&apos;ll delve into the incredible potential
                  of solar technology.
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, we&apos;ll delve into the incredible potential
                  of solar technology.
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
      </Container>
    </Section>
  );
};

export default BlogPage;
