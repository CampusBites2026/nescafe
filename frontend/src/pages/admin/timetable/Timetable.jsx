import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Timetable = () => {
  const [timetable] = useState([
    {
      id: 1,
      className: "Class 10-A",
      day: "Monday",
      subject: "Mathematics",
      teacher: "Mr. Sharma",
      time: "09:00 AM - 10:00 AM",
    },
    {
      id: 2,
      className: "Class 9-B",
      day: "Tuesday",
      subject: "Science",
      teacher: "Mrs. Gupta",
      time: "10:00 AM - 11:00 AM",
    },
  ]);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Timetable Management
        </h1>

        <Link
          to="/admin/timetable/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Create Timetable
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Day</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Teacher</th>
              <th className="p-4 text-left">Time</th>
            </tr>
          </thead>

          <tbody>
            {timetable.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.className}
                </td>

                <td className="p-4">
                  {item.day}
                </td>

                <td className="p-4">
                  {item.subject}
                </td>

                <td className="p-4">
                  {item.teacher}
                </td>

                <td className="p-4">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Timetable;