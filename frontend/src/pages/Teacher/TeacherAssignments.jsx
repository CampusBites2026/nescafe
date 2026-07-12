import { useState } from "react";
import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherAssignments = () => {
  const [assignments, setAssignments] =
    useState([
      {
        id: 1,
        title: "Mathematics Homework",
        className: "10A",
        dueDate: "2026-06-15",
      },
    ]);

  const [formData, setFormData] =
    useState({
      title: "",
      className: "",
      dueDate: "",
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

    const newAssignment = {
      id: Date.now(),
      ...formData,
    };

    setAssignments([
      ...assignments,
      newAssignment,
    ]);

    setFormData({
      title: "",
      className: "",
      dueDate: "",
    });

    alert(
      "Assignment Created Successfully"
    );
  };

  const deleteAssignment = (
    id
  ) => {
    if (
      !window.confirm(
        "Delete Assignment?"
      )
    )
      return;

    setAssignments(
      assignments.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        Assignment Management
      </h1>

      {/* Create Assignment */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Create Assignment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Assignment Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Create Assignment
          </button>
        </form>
      </div>

      {/* Assignment List */}
      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Due Date
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {assignments.length ===
            0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center"
                >
                  No Assignments
                  Found
                </td>
              </tr>
            ) : (
              assignments.map(
                (
                  assignment
                ) => (
                  <tr
                    key={
                      assignment.id
                    }
                    className="border-b"
                  >
                    <td className="p-4">
                      {
                        assignment.title
                      }
                    </td>

                    <td className="p-4">
                      {
                        assignment.className
                      }
                    </td>

                    <td className="p-4">
                      {
                        assignment.dueDate
                      }
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          deleteAssignment(
                            assignment.id
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </TeacherLayout>
  );
};

export default TeacherAssignments;