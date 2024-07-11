import { Button, Heading } from "@/components";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="bg-secondary-950 h-screen py-48 flex overflow-hidden">
      <div className="z-10 container flex flex-col gap-10 items-center justify-center w-full h-full">
        <div className="text-center max-w-[642px] flex flex-col gap-8 mt-20 sm:mt-0">
          <Heading
            as="h1"
            className="text-hero text-white tracking-tighter sm:leading-[90px] leading-[70px]"
          >
            The Future of Green Energy
          </Heading>
          <p className="text-white font-light text-base">
            Our commitment to green energy is paving the way for a cleaner,
            healthier planet. Join us on a journey towards a future where clean,
            renewable energy sources transform the way we power our lives.
          </p>
        </div>
        <Button variant={"secondary"}>See our solutions</Button>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[1500px] h-[800px] absolute top-0 -left-[20%]">
          <Image src="/Images/Gradient.png" alt="" fill className="absolute" />
        </div>
        <div className="w-[1500px] h-[800px] absolute -bottom-[10%] rotate-180 -right-[30%]">
          <Image src="/Images/Gradient.png" alt="" fill className="absolute" />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};
