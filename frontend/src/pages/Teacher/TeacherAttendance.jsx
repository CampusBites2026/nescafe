import { useState } from "react";
import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherAttendance = () => {
  const [attendance, setAttendance] =
    useState([
      {
        id: 1,
        student: "Rahul Kumar",
        class: "10A",
        status: "Present",
      },
      {
        id: 2,
        student: "Priya Sharma",
        class: "10A",
        status: "Absent",
      },
      {
        id: 3,
        student: "Aman Verma",
        class: "10A",
        status: "Present",
      },
    ]);

  const updateStatus = (
    id,
    status
  ) => {
    setAttendance(
      attendance.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
            }
          : item
      )
    );
  };

  const saveAttendance = () => {
    alert(
      "Attendance Saved Successfully"
    );

    // Later connect API
  };

  return (
    <TeacherLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Attendance Management
        </h1>

        <button
          onClick={saveAttendance}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Save Attendance
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Student Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Attendance
              </th>
            </tr>
          </thead>

          <tbody>
            {attendance.map(
              (student) => (
                <tr
                  key={student.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {
                      student.student
                    }
                  </td>

                  <td className="p-4">
                    {student.class}
                  </td>

                  <td className="p-4">
                    <select
                      value={
                        student.status
                      }
                      onChange={(e) =>
                        updateStatus(
                          student.id,
                          e.target.value
                        )
                      }
                      className="border rounded-lg p-2"
                    >
                      <option value="Present">
                        Present
                      </option>

                      <option value="Absent">
                        Absent
                      </option>

                      <option value="Leave">
                        Leave
                      </option>
                    </select>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Present
          </h3>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {
              attendance.filter(
                (a) =>
                  a.status ===
                  "Present"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Absent
          </h3>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {
              attendance.filter(
                (a) =>
                  a.status ===
                  "Absent"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Leave
          </h3>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {
              attendance.filter(
                (a) =>
                  a.status ===
                  "Leave"
              ).length
            }
          </h2>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherAttendance;