import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddVisitor = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "",
    personToMeet: "",
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
      "Visitor Added Successfully"
    );

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Visitor
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Visitor Name"
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

          <input
            type="text"
            name="purpose"
            placeholder="Purpose"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="personToMeet"
            placeholder="Person To Meet"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg">
            Save Visitor
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddVisitor;