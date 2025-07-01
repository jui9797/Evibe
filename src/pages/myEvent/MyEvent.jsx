import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyEvent = () => {
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/eventsByEmail?email=${user.email}`)
        .then((res) => setMyEvents(res.data))
        .catch((err) => console.error("Failed to fetch events:", err));
    }
  }, [user]);

  const handleDelete = async (id) => {
    console.log(id);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5000/events/${id}`);
        if (res.status === 200) {
          setMyEvents(myEvents.filter((event) => event._id !== id));
          Swal.fire("Deleted!", "Your event has been deleted.", "success");
        }
      } catch (error) {
        console.error("Failed to delete event:", error);
        Swal.fire("Error!", "Failed to delete event.", "error");
      }
    }
  };

  const handleUpdate = (eventData) => {
    navigate("/updateEvent", { state: { event: eventData } });
  };

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
                <div>
                  <button
                    onClick={() => handleUpdate(event)}
                    className="btn p-2 text-xl text-amber-500 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(event?._id)}
                    className="btn p-2 text-xl text-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvent;
