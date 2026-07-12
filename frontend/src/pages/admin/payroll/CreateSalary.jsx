import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const CreateSalary = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      teacherId: "",
      amount: "",
      month: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.teacherId ||
      !formData.amount ||
      !formData.month
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/payroll", {
        ...formData,
        amount: Number(
          formData.amount
        ),
      });

      alert(
        "Salary Created Successfully"
      );

      navigate(
        "/admin/payroll/salaries"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to create salary"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Create Salary
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="teacherId"
            placeholder="Teacher ID"
            value={
              formData.teacherId
            }
            onChange={
              handleChange
            }
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="amount"
            placeholder="Salary Amount"
            value={
              formData.amount
            }
            onChange={
              handleChange
            }
            className="border p-3 rounded"
          />

          <input
            type="month"
            name="month"
            value={
              formData.month
            }
            onChange={
              handleChange
            }
            className="border p-3 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            {loading
              ? "Saving..."
              : "Save Salary"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateSalary;