import { useState } from "react";

const CreateResult = () => {
  const [result, setResult] = useState({
    studentName: "",
    rollNumber: "",
    className: "",
    subject: "",
    marks: "",
    totalMarks: "100",
  });

  const handleChange = (e) => {
    setResult({
      ...result,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Result Data:", result);

    alert("Result Created Successfully!");
  };

  const percentage =
    result.marks && result.totalMarks
      ? ((Number(result.marks) / Number(result.totalMarks)) * 100).toFixed(2)
      : 0;

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Student Result
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={result.studentName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={result.rollNumber}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="className"
            placeholder="Class"
            value={result.className}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={result.subject}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="marks"
            placeholder="Obtained Marks"
            value={result.marks}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="totalMarks"
            placeholder="Total Marks"
            value={result.totalMarks}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>Percentage:</strong> {percentage}%
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {percentage >= 33 ? "Pass" : "Fail"}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Save Result
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateResult;