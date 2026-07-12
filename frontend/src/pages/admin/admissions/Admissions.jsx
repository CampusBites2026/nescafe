import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Admissions = () => {
  const applications = [
    {
      id: 1,
      name: "Rahul Sharma",
      class: "Class 6",
      status: "Pending",
    },
    {
      id: 2,
      name: "Anjali Verma",
      class: "Class 8",
      status: "Approved",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Admission Applications
        </h1>

        <Link
          to="/admin/admissions/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          New Admission
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Student Name
              </th>

              <th className="p-4 text-left">
                Applied Class
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((student) => (
              <tr
                key={student.id}
                className="border-t"
              >
                <td className="p-4">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.class}
                </td>

                <td className="p-4">
                  <span
                    className={
                      student.status ===
                      "Approved"
                        ? "text-green-600 font-semibold"
                        : "text-orange-600 font-semibold"
                    }
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Admissions;