import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const EditTeacher = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "Rajesh Sharma",
    email: "rajesh@gmail.com",
    phone: "9876543210",
    subject: "Mathematics",
    qualification: "M.Sc Mathematics",
    salary: "45000",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Teacher ID:", id);
    console.log(formData);

    alert("Teacher Updated Successfully");
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Edit Teacher
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded"
          />

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
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Update Teacher
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditTeacher;