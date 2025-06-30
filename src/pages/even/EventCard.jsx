const EventCard = ({ event }) => {
  const { eventTitle, name, dateTime, location, description, attendeeCount } =
    event;

  const formattedDate = new Date(dateTime).toLocaleDateString();
  const formattedTime = new Date(dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

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
          🧍 Attendees: {attendeeCount}
        </span>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 text-sm">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
