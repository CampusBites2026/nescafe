import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const CreateNotification = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      title: "",
      message: "",
      audience: "ALL",
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
      !formData.title.trim() ||
      !formData.message.trim()
    ) {
      alert(
        "Please fill all required fields"
      );
      return;
    }

    try {
      setLoading(true);

      await API.post(
        "/notifications",
        formData
      );

      alert(
        "Notification Sent Successfully"
      );

      navigate(
        "/admin/notifications"
      );
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data
          ?.message ||
          "Failed to send notification"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Send Notification
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Notification Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Notification Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full resize-none"
          />

          <select
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
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

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            {loading
              ? "Sending..."
              : "Send Notification"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateNotification;