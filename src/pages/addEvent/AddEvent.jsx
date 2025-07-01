import axios from "axios";
import "sweetalert2/src/sweetalert2.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      attendeeCount: 0,
    },
  });

  const onSubmit = async (data) => {
    // Ensure attendeeCount is a number
    data.attendeeCount = parseInt(data.attendeeCount) || 0;

    try {
      const res = await axios.post("http://localhost:5000/events", data);
      Swal.fire({
        title: "Congrates",
        text: "Event added on database",
        icon: "success",
      });
      reset();
      navigate("/event");
      // console.log(res.data);
    } catch (error) {
      console.error("Error adding event:", error);
      Swal.fire({
        title: "error",
        text: "Something went wrong",
        icon: "error",
      });
    }
  };
  // console.log(user);
  return (
    <div className="max-w-md mx-auto p-6  shadow-md rounded my-4 bg-pink-200">
      <h2 className="text-2xl font-semibold mb-4">Add An Event</h2>
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
          <label className="block font-medium">Email (Posted By)</label>
          <input
            type="Email"
            {...register("email", { required: true })}
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
            defaultValue={0}
            readOnly
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
