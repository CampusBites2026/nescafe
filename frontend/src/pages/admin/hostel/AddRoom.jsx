import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomNo: "",
    capacity: "",
    floor: "",
    hostelName: "",
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

    alert("Room Added Successfully");

    setFormData({
      roomNo: "",
      capacity: "",
      floor: "",
      hostelName: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Hostel Room
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="roomNo"
            placeholder="Room Number"
            value={formData.roomNo}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="floor"
            placeholder="Floor"
            value={formData.floor}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="hostelName"
            placeholder="Hostel Name"
            value={formData.hostelName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            Save Room
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddRoom;