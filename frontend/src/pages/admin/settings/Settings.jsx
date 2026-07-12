import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const Settings = () => {
  const [settings, setSettings] = useState({
    schoolName: "My School",
    schoolCode: "SCH001",
    principalName: "",
    email: "",
    phone: "",
    address: "",
    academicYear: "2026-2027",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later connect API
    alert("Settings Saved Successfully");
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">
          School Settings
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={settings.schoolName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="schoolCode"
            placeholder="School Code"
            value={settings.schoolCode}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="principalName"
            placeholder="Principal Name"
            value={settings.principalName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="School Email"
            value={settings.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="School Phone"
            value={settings.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="academicYear"
            placeholder="Academic Session"
            value={settings.academicYear}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            name="address"
            placeholder="School Address"
            value={settings.address}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Save Settings
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Settings;