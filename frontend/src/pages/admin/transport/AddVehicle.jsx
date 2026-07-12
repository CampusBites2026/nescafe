import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleNo: "",
    driver: "",
    route: "",
    capacity: "",
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

    alert("Vehicle Added Successfully");

    setFormData({
      vehicleNo: "",
      driver: "",
      route: "",
      capacity: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Vehicle
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="vehicleNo"
            placeholder="Vehicle Number"
            value={formData.vehicleNo}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="driver"
            placeholder="Driver Name"
            value={formData.driver}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="route"
            placeholder="Route"
            value={formData.route}
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

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            Save Vehicle
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddVehicle;