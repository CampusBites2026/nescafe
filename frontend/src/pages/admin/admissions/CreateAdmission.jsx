import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const CreateAdmission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    fatherName: "",
    phone: "",
    address: "",
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
      "Admission Application Submitted"
    );

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          New Admission
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="className"
            placeholder="Class"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="address"
            placeholder="Address"
            className="col-span-2 border p-3 rounded"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg">
            Submit Application
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateAdmission;