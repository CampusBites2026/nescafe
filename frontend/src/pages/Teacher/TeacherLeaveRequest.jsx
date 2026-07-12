import { useState } from "react";
import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherLeaveRequest = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Leave Request Submitted");

    console.log(formData);
  };

  return (
    <TeacherLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Leave Request
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="date"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                fromDate: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                toDate: e.target.value,
              })
            }
          />

          <textarea
            rows="5"
            placeholder="Reason"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                reason: e.target.value,
              })
            }
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Submit Request
          </button>
        </form>
      </div>
    </TeacherLayout>
  );
};

export default TeacherLeaveRequest;