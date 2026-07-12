import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const CreateTimetable = () => {
  const [formData, setFormData] = useState({
    className: "",
    day: "",
    subject: "",
    teacher: "",
    startTime: "",
    endTime: "",
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

    alert("Timetable Created Successfully");

    setFormData({
      className: "",
      day: "",
      subject: "",
      teacher: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Create Timetable
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            value={formData.className}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="">
              Select Day
            </option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="teacher"
            placeholder="Teacher Name"
            value={formData.teacher}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Save Timetable
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateTimetable;