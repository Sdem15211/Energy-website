import { Renewable } from "@/components";
import React from "react";

export const Metrics = () => {
  return (
    <section className="py-24 sm:py-48 bg-beige">
      <div className="container">
        <div className="flex items-center gap-2 border-b border-neutral-100 pb-4 mb-12 sm:mb-14">
          <span className="w-2 h-2 rounded-full bg-primary-300 block" />
          <span>Our results</span>
        </div>
        <div>
          <div className="mb-12 sm:mb-24">
            <h2 className="text-section leading-[68px] max-w-xl tracking-tight">
              We are committed to a sustainable future
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 items-start p-10 bg-primary-300 rounded-3xl">
              <Renewable />
              <div className="flex flex-col gap-6">
                <h3 className="text-title tracking-tight leading-none text-secondary-950">
                  5,000 Mwh
                </h3>
                <h4 className="text-subtitle leading-none">
                  Renewable Energy Generated
                </h4>
                <p className="text-neutral-800">
                  Our commitment to sustainability shines through as we proudly
                  announce the generation of 5,000 megawatt-hours of renewable
                  energy, contributing to a greener and more environmentally
                  friendly future.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-between">
              <div className="h-full flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <Renewable />
                <div className="flex flex-col gap-4">
                  <h3 className="text-title leading-none tracking-tight text-secondary-950">
                    10,000+
                  </h3>
                  <h4 className="text-subtitle leading-none">
                    Customers Served
                  </h4>
                </div>
              </div>
              <div className="h-full flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <Renewable />
                <div className="flex flex-col gap-4">
                  <h3 className="text-title leading-none tracking-tight text-secondary-950">
                    15%
                  </h3>
                  <h4 className="text-subtitle leading-none">
                    Avg. Energy Saved
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
