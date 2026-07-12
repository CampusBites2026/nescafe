import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const SendSMS = () => {
  const [formData, setFormData] = useState({
    audience: "ALL",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("SMS Sent Successfully");

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Send SMS
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <select
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                audience: e.target.value,
              })
            }
          >
            <option value="ALL">
              All Users
            </option>

            <option value="STUDENTS">
              Students
            </option>

            <option value="TEACHERS">
              Teachers
            </option>

            <option value="PARENTS">
              Parents
            </option>
          </select>

          <textarea
            rows="6"
            placeholder="Enter SMS Message"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Send SMS
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default SendSMS;