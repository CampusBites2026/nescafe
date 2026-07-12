import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const MarkAttendance = () => {

  const [formData, setFormData] =
    useState({
      studentId: "",
      className: "",
      status: "Present",
      date: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post(
        "/attendance",
        formData
      );

      alert(
        "Attendance Marked"
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>

      <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

        <h2 className="text-2xl font-bold mb-6">
          Mark Attendance
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <input
            name="studentId"
            placeholder="Student ID"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="className"
            placeholder="Class"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <select
            name="status"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>
              Present
            </option>

            <option>
              Absent
            </option>

            <option>
              Leave
            </option>
          </select>

          <input
            type="date"
            name="date"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded">

            Save Attendance

          </button>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default MarkAttendance;