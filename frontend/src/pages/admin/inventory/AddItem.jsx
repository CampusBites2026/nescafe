import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    supplier: "",
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

    alert("Item Added Successfully");

    setFormData({
      name: "",
      category: "",
      quantity: "",
      supplier: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Inventory Item
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            Save Item
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddItem;