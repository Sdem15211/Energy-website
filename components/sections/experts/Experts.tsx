import { Linkedin } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Experts = () => {
  return (
    <section className="py-24 sm:py-48 bg-secondary-950">
      <div className="container">
        <div className="flex text-white items-center gap-2 border-b border-neutral-300 pb-4 mb-12 sm:mb-14">
          <span className="w-2 h-2 rounded-full bg-primary-300 block" />
          <span>Our experts</span>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-section leading-none text-white">
              Meet our experts
            </h2>
            <p className="text-neutral-400">
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="border-b py-8 flex gap-12 items-center border-neutral-700">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <Image
                src="/images/Brooklyn1.png"
                alt="Expert Image"
                width={90}
                height={90}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
              <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                <h3 className="text-subtitle">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="border-b py-8 flex gap-12 items-center border-neutral-700">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <Image
                src="/images/Brooklyn1.png"
                alt="Expert Image"
                width={90}
                height={90}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
              <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                <h3 className="text-subtitle">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="border-b py-8 flex gap-12 items-center border-neutral-700">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <Image
                src="/images/Brooklyn1.png"
                alt="Expert Image"
                width={90}
                height={90}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
              <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                <h3 className="text-subtitle">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="border-b py-8 flex gap-12 items-center border-neutral-700">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <Image
                src="/images/Brooklyn1.png"
                alt="Expert Image"
                width={90}
                height={90}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
              <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                <h3 className="text-subtitle">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="border-b py-8 flex gap-12 items-center border-neutral-700">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <Image
                src="/images/Brooklyn1.png"
                alt="Expert Image"
                width={90}
                height={90}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
              <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                <h3 className="text-subtitle">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
