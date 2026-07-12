import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddCalendarEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Calendar Event Added Successfully"
    );

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Calendar Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <select
            name="type"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">
              Select Type
            </option>

            <option value="Holiday">
              Holiday
            </option>

            <option value="Exam">
              Exam
            </option>

            <option value="Session">
              Session
            </option>

            <option value="Event">
              Event
            </option>
          </select>

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save Event
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddCalendarEvent;