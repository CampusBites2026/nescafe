import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const CreateResult = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      studentId: "",
      exam: "",
      subject: "",
      marks: "",
      grade: "",
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
        "/results",
        formData
      );

      alert(
        "Result Added Successfully"
      );

      navigate(
        "/admin/results"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Result
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            name="studentId"
            placeholder="Student ID"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="exam"
            placeholder="Exam Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="subject"
            placeholder="Subject"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="marks"
            placeholder="Marks"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="grade"
            placeholder="Grade"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg">
            Save Result
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateResult;