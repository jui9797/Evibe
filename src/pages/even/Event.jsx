import { useContext, useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { AuthContext } from "../../provider/AuthProvider";
import { CgSpinner } from "react-icons/cg";

const Event = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const query = new URLSearchParams();
        if (search) query.append("title", search);
        if (filter) query.append("filter", filter);

        const res = await axios.get(
          `http://localhost:5000/allEvents?${query.toString()}`
        );
        setEvents(res.data);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    loadEvents();
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        All Events
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="px-4 py-2 border rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Dates</option>
          <option value="today">Today</option>
          <option value="currentWeek">Current Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="currentMonth">Current Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events?.length === 0 ? (
          <>
            <div>
              <CgSpinner className="animate-spin text-5xl text-black" />
            </div>
          </>
        ) : (
          <>
            {" "}
            {events.map((event) => (
              <EventCard key={event._id} event={event} user={user} />
            ))}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
