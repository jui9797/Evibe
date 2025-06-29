import { Link } from "react-router-dom";
import img1 from "../../assets/evholi.jpg";
import img2 from "../../assets/evseminar.jpg";
import img3 from "../../assets/evfrnd.jpg";
import img4 from "../../assets/evmarketing.jpg";

const events = [
  {
    title: "Friendship Club",
    views: "50K VIEWS",
    img: img3,
  },
  {
    title: "Business Confer...",
    views: "20K VIEWS",
    img: img2,
  },
  {
    title: "Holi Festival",
    views: "26K VIEWS",
    img: img1,
  },
  {
    title: "Next-gen Marketing",
    views: "30K VIEWS",
    img: img4,
  },
];

const Events = () => {
  return (
    <div className="bg-blue-100">
      <div className=" py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            <span className="text-pink-700">E</span>
            vibe Events
          </h2>
          <button className="border px-4 py-2 rounded-md  text-white bg-blue-500 font-bold hover:bg-pink-500 transition">
            <Link to={"https://www.instagram.com/?hl=en"}>
              Follow on Instagram
            </Link>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group bg-white"
            >
              <Link to={"https://www.instagram.com/?hl=en"}>
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[300px] lg:h-[420px] object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-lg font-semibold truncate">
                    {event.title}
                  </h3>
                  <p className="text-sm">{event.views}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
