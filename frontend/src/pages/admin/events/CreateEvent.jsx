import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Event Created Successfully");

    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Create Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Save Event
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateEvent;