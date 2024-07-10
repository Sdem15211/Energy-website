import Image from "next/image";
import React from "react";

export const Blog = () => {
  return (
    <section className="py-24 sm:py-48 bg-secondary-950">
      <div className="container">
        <div className="flex text-white items-center gap-2 border-b border-neutral-100 pb-4 mb-12 sm:mb-14">
          <span className="w-2 h-2 rounded-full bg-primary-300 block" />
          <span>Blog</span>
        </div>

        <div>
          <div className="flex justify-between items-center w-full">
            <h2 className="text-section leading-none text-white">Blog</h2>
            <button className="border px-6 py-3 rounded-full text-white">
              See all
            </button>
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
                    In this blog post, we'll delve into the incredible potential
                    of solar technology, its environmental benefits, and how you
                    can tap into this sustainable energy source for a brighter
                    future.
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
                    In this blog post, we'll delve into the incredible potential
                    of solar technology, its environmental benefits, and how you
                    can tap into this sustainable energy source for a brighter
                    future.
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
                    In this blog post, we'll delve into the incredible potential
                    of solar technology, its environmental benefits, and how you
                    can tap into this sustainable energy source for a brighter
                    future.
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
                    In this blog post, we'll delve into the incredible potential
                    of solar technology, its environmental benefits, and how you
                    can tap into this sustainable energy source for a brighter
                    future.
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
      </div>
    </section>
  );
};
