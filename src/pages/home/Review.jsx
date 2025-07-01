import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import img1 from "../../assets/party.jpg";

const reviews = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    name: "Adam Alexander",
    location: "California, USA",
    img: img1,
  },
  {
    text: `Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    name: "Emily Johnson",
    location: "New York, USA",
    img: img1,
  },
  {
    text: `Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    name: "aaabbbb",
    location: "New York, USA",
    img: img1,
  },
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [instanceRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(sliderInstance) {
      sliderRef.current = sliderInstance;
    },
  });

  // ✅ Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.next();
    }, 4000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-4 my-16 lg:my-32"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={instanceRef} className="keen-slider">
          {reviews.map((review, index) => (
            <div
              className="keen-slider__slide flex flex-col items-center md:items-start gap-6"
              key={index}
            >
              <FaQuoteLeft className="text-pink-500 text-6xl" />
              <p className="italic text-lg md:text-xl text-center md:text-left leading-relaxed max-w-3xl">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-300">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-pink-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
