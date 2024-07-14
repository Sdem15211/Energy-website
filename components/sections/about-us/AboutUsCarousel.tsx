"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousel({ images }: { images: { url: string }[] }) {
  return (
    <Carousel
      swipeable
      stopOnHover
      showStatus={false}
      interval={6000}
      showArrows={false}
      useKeyboardArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      centerSlidePercentage={90}
      className="h-full cursor-grabbing"
    >
      {images.map((item: any, index: number) => {
        return (
          <div key={index} className="w-full">
            <Image
              src={item.url}
              alt="About Us Image"
              width={420}
              className="w-full h-full object-cover"
              height={530}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default AboutUsCarousel;
