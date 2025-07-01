import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const UpdateEvent = () => {
  const location = useLocation();
  const event = location.state?.event;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      attendeeCount: 0,
    },
  });
  const onSubmit = async (data) => {
    try {
      const res = await axios.put(
        `https://evibe-server-mz4t.vercel.app/events/${event?._id}`,
        data
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "The event has been updated successfully.",
          confirmButtonColor: "#d33",
        });
        navigate("/MyEvent");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while updating the event!",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6  shadow-md rounded my-4 bg-amber-200">
      <h2 className="text-2xl font-semibold mb-4">Update This Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Event Title</label>
          <input
            type="text"
            {...register("eventTitle", { required: true })}
            defaultValue={event?.eventTitle}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Name (Posted By)</label>
          <input
            type="text"
            {...register("name", { required: true })}
            defaultValue={event?.name}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Email (Posted By)</label>
          <input
            type="Email"
            {...register("email", { required: true })}
            defaultValue={event?.email}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Date and Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: true })}
            defaultValue={event?.dateTime}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            {...register("location", { required: true })}
            defaultValue={event?.location}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            defaultValue={event?.description}
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
          className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-700"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
