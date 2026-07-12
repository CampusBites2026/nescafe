import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const GenerateCertificate = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    certificateType: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Certificate Generated Successfully"
    );

    console.log(formData);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Generate Certificate
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <select
            name="certificateType"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">
              Select Certificate
            </option>

            <option>
              Bonafide
            </option>

            <option>
              Transfer Certificate
            </option>

            <option>
              Character Certificate
            </option>
          </select>

          <textarea
            rows="5"
            name="reason"
            placeholder="Reason"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Generate
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default GenerateCertificate;