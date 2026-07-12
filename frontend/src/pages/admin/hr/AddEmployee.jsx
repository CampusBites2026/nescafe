import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    designation: "",
    phone: "",
    salary: "",
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
      "Employee Added Successfully"
    );

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Employee
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
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
            type="number"
            name="salary"
            placeholder="Salary"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg">
            Save Employee
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddEmployee;