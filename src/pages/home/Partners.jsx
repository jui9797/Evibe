import Marquee from "react-fast-marquee";
import partner from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";
import partner7 from "../../assets/partner7.png";

const Partners = () => {
  const images = [
    partner,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  return (
    <div className="py-16 px-4 text-center my-8 lg:my-16">
      <Marquee>
        <div className="flex items-center gap-8 lg:gap-32">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Partner Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          ))}
          <span className="w-1 md:hidden"></span>
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
