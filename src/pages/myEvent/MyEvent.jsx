import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
const MyEvent = () => {
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  console.log(user);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/eventsByEmail?email=${user.email}`)
        .then((res) => setMyEvents(res.data))
        .catch((err) => console.error("Failed to fetch events:", err));
    }
  }, [user]);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">My Events</h3>

      {myEvents.length === 0 ? (
        <p className="text-gray-600">You haven't created any events yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myEvents.map((event) => (
            <div
              key={event?._id}
              className="bg-pink-100 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold text-blue-500">
                {event?.eventTitle}
              </h2>
              <p>
                <span className="font-bold">Event Planner:</span> {event.name}
              </p>
              <p>
                <span className="font-bold">Location:</span> {event?.location}
              </p>
              <p>
                {" "}
                <span className="font-bold">
                  <span className="font-bold">Date:</span>
                </span>
                {new Date(event?.dateTime).toLocaleDateString()} at{" "}
                {new Date(event?.dateTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <p className="mt-2">
                <span className="font-bold">Description:</span>{" "}
                {event?.description.length > 30
                  ? `${event.description.slice(0, 30)}...`
                  : event.description}
              </p>
              <div className="flex justify-between items-center">
                <p className=" mt-1">
                  <span className="font-bold">Attendees:</span>{" "}
                  {event?.attendeeCount}
                </p>
                <button className="btn p-2 text-xl text-red-500">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvent;
