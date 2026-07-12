import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const AcademicCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Academic Session Start",
      date: "01 April 2026",
      type: "Session",
    },
    {
      id: 2,
      title: "Summer Vacation",
      date: "15 May 2026",
      type: "Holiday",
    },
    {
      id: 3,
      title: "Mid-Term Examination",
      date: "20 September 2026",
      type: "Exam",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Academic Calendar
        </h1>

        <Link
          to="/admin/calendar/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Event
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Event
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Type
              </th>
            </tr>
          </thead>

          <tbody>
            {events.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.title}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4">
                  {item.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AcademicCalendar;