import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const AddFee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    amount: "",
    dueDate: "",
    term: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.studentId ||
      !formData.amount ||
      !formData.dueDate ||
      !formData.term
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/fees", formData);

      alert("Fee Created Successfully");

      navigate("/admin/fees");
    } catch (error) {
      console.log(error);
      alert("Failed to create fee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Create Fee
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="term"
            placeholder="Term (Monthly / Quarterly / Annual)"
            value={formData.term}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            {loading ? "Saving..." : "Save Fee"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddFee;