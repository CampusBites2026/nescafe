import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const AddSchool = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    email: "",
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

    alert("School Added Successfully");

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Add School
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            className="col-span-2 border p-3 rounded"
            rows="4"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg">
            Save School
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddSchool;