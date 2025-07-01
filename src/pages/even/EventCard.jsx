import axios from "axios";
import { useState } from "react";

const EventCard = ({ event, user }) => {
  const {
    _id,
    eventTitle,
    name,
    dateTime,
    location,
    description,
    attendeeCount,
  } = event;

  const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(attendeeCount);

  const formattedDate = new Date(dateTime).toLocaleDateString();
  const formattedTime = new Date(dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleJoin = async () => {
    try {
      const res = await axios.patch(
        `https://evibe-server-mz4t.vercel.app/events/join/${_id}`,
        { email: user?.email }
      );
      // console.log(res.data);
      if (res.data.modifiedCount > 0 || res.data.email === user?.email) {
        setJoined(true);
        setCount(count + 1);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 w-full">
      <h2 className="text-xl font-bold text-indigo-600">{eventTitle}</h2>
      <p className="text-sm text-gray-500">Posted by: {name}</p>
      <p className="text-sm text-gray-500">Date: {formattedDate}</p>
      <p className="text-sm text-gray-500">Time: {formattedTime}</p>
      <p className="text-sm text-gray-500">Location: {location}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">
          Attendees: {count}
        </span>
        <button
          onClick={handleJoin}
          disabled={joined}
          className={`${
            joined ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
          } text-white px-4 py-2 rounded text-sm transition`}
        >
          {joined ? "Already Joined" : "Join Event"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
