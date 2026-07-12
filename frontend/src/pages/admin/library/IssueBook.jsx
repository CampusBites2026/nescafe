import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const IssueBook = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    bookName: "",
    issueDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Book Issued Successfully");

    setFormData({
      studentName: "",
      bookName: "",
      issueDate: "",
      returnDate: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Issue Book
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            value={formData.bookName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            Issue Book
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default IssueBook;