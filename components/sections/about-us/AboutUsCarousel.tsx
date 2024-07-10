"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousel() {
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
      <div className="w-full">
        <Image
          src="/Images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full h-full object-cover"
          height={530}
        />
      </div>
      <div className="w-full">
        <Image
          src="/Images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full h-full object-cover"
          height={530}
        />
      </div>
      <div className="w-full">
        <Image
          src="/Images/hero1.png"
          alt="About Us Image"
          width={420}
          className="w-full h-full object-cover"
          height={530}
        />
      </div>
    </Carousel>
  );
}

export default AboutUsCarousel;
