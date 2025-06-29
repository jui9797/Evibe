import { FaPuzzlePiece, FaUsers, FaLightbulb } from "react-icons/fa";

const services = [
  {
    title: "Great Services",
    icon: <FaPuzzlePiece className="text-pink-500 text-4xl" />,
    desc: "Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
  },
  {
    title: "Great People",
    icon: <FaUsers className="text-pink-500 text-4xl" />,
    desc: "Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
  },
  {
    title: "Great Ideas",
    icon: <FaLightbulb className="text-pink-500 text-4xl" />,
    desc: "Eorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
  },
];

export default function Welcome() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto text-center my-10 lg:my-28">
      <h2 className="text-4xl font-semibold mb-4">
        Welcome to{" "}
        <span className="text-pink-500">
          {" "}
          <span className="text-pink-700">E</span>vibe
        </span>
      </h2>
      <p className="text-lg">
        From Wedding Functions to Birthday Parties or Corporate Events to
        Musical Functions,
      </p>
      <p className="text-lg mb-12">
        We offer full range of Events Management Services that scale to your
        needs & budget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <button className="btn text-white bg-blue-500 font-bold hover:bg-pink-500 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
