"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import { Container, Heading, Section, SubTitle } from "@/components";

export const Testimonials = () => {
  const size = useWindScreenowSize();
  return (
    <Section className="bg-secondary-950 rounded-3xl">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle="Testimonials" />

        <Heading
          as="h2"
          className="text-section leading-none text-white text-left w-full"
        >
          What our customers say
        </Heading>
        <div className="mt-24">
          <Carousel
            stopOnHover
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            interval={6000}
            autoPlay
            centerMode
            infiniteLoop
            useKeyboardArrows
            centerSlidePercentage={size.width < 480 ? 70 : 20}
            emulateTouch
            className="cursor-grabbing sm:w-full max-w-md sm:max-w-fit overflow-hidden duration-300"
          >
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
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
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Brooklyn Simmons</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar Energy Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
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
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Brooklyn Simmons</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar Energy Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};
