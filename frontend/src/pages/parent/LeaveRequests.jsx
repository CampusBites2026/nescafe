import ParentLayout from "../../components/layout/ParentLayout";
import { useState } from "react";

const LeaveRequests = () => {
  const [reason, setReason] = useState("");

  return (
    <ParentLayout>
      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <h1 className="text-3xl font-bold mb-6">
          Leave Request
        </h1>

        <textarea
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
          placeholder="Enter leave reason..."
          className="w-full border p-3 rounded-lg"
          rows={5}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">
          Submit Request
        </button>
      </div>
    </ParentLayout>
  );
};

export default LeaveRequests;