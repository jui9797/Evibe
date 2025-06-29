import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import banner1 from "../../assets/party.jpg";
import banner2 from "../../assets/groom-putting-ring-bride-s-finger.jpg";
import banner3 from "../../assets/people-festival.jpg";

const banners = [
  {
    title: "Unleash the Vibe!",
    subtitle: "Join events that bring joy & excitement.",
    image: banner1,
  },
  {
    title: "Create Your Own Event",
    subtitle: "Host, share and enjoy with your community.",
    image: banner2,
  },
  {
    title: "Explore Trending Events",
    subtitle: "Find what’s hot and happening near you.",
    image: banner3,
  },
];

const Banner = () => {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="keen-slider__slide flex items-center justify-center text-center text-white py-20 px-4 lg:h-[550px] relative"
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="max-w-2xl z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {banner.title}
            </h2>
            <p className="text-lg md:text-xl mb-6">{banner.subtitle}</p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
