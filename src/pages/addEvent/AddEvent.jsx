import axios from "axios";

import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      attendeeCount: 0,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/events", data);
      console.log("Event Added on database:", res.data);
      reset();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Event Title</label>
          <input
            type="text"
            {...register("eventTitle", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Name (Posted By)</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Date and Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Attendee Count</label>
          <input
            type="number"
            {...register("attendeeCount", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
            min={0}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
