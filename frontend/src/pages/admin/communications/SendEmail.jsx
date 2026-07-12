import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const SendEmail = () => {
  const [formData, setFormData] = useState({
    audience: "ALL",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Email Sent Successfully");

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">
          Send Email
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

          <input
            type="text"
            placeholder="Email Subject"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                subject: e.target.value,
              })
            }
          />

          <textarea
            rows="8"
            placeholder="Email Content"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Send Email
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default SendEmail;