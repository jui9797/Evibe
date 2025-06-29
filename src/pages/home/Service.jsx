import img1 from "../../assets/party.jpg";
import glass from "../../assets/glass.jpg";
import img2 from "../../assets/birthday.jpg";
import img3 from "../../assets/Seminar.jpg";
import img4 from "../../assets/wedding.jpg";

const Service = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">
        Evibe's
        <span className="text-pink-500">
          <span className="text-pink-700"> S</span>ervices
        </span>
      </h2>
      <p className="text-lg">
        We make your events smart & impactful by personalised event management
        services
      </p>
      <p className="text-lg mb-12">
        We offer full range of Events Management Services that scale to your
        needs & budget.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="text-center lg:text-left  rounded-lg p-2">
          <img
            src={img1}
            alt="img"
            className="h-[200px] md:h-[250px] lg:h-[300px] w-full"
          />
          <p className="text-2xl font-bold my-2">Social Events</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ab
            exercitationem{" "}
          </p>
        </div>
        <div className="text-center lg:text-left  rounded-lg p-2 lg:row-span-2 hidden lg:flex">
          <img src={glass} alt="img" />
        </div>
        <div className="text-center lg:text-left  rounded-lg p-2">
          <img
            src={img4}
            alt="img"
            className="h-[200px] md:h-[250px] lg:h-[300px] w-full"
          />
          <p className="text-2xl font-bold my-2">Wedding Events</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ab
            exercitationem{" "}
          </p>
        </div>
        <div className="text-center lg:text-left  rounded-lg p-2">
          <img
            src={img3}
            alt="img"
            className="h-[200px] md:h-[250px] lg:h-[300px] w-full"
          />
          <p className="text-2xl font-bold my-2">Corporate Seminars</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ab
            exercitationem{" "}
          </p>
        </div>
        <div className="text-center lg:text-left rounded-lg p-2">
          <img
            src={img2}
            alt="img"
            className="h-[200px] md:h-[250px] lg:h-[300px] w-full"
          />
          <p className="text-2xl font-bold my-2">Birthday Parties</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ab
            exercitationem{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
