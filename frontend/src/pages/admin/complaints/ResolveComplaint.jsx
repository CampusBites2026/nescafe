import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const ResolveComplaint = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!remarks.trim()) {
      alert("Please enter resolution remarks");
      return;
    }

    try {
      setLoading(true);

      await API.put(`/complaints/${id}`, {
        status: "Resolved",
        remarks,
      });

      alert("Complaint Resolved Successfully");

      navigate("/admin/complaints");
    } catch (error) {
      console.log(error);
      alert("Failed to resolve complaint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">
          Resolve Complaint
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <textarea
            rows="6"
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
            placeholder="Enter resolution remarks..."
            className="border p-3 rounded w-full resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            {loading
              ? "Resolving..."
              : "Resolve Complaint"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ResolveComplaint;