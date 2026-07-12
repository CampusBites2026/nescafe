import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      student: "Rahul Kumar",
      type: "Bonafide",
      date: "10 June 2026",
    },
    {
      id: 2,
      student: "Anjali Singh",
      type: "Transfer Certificate",
      date: "12 June 2026",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Certificate Management
        </h1>

        <Link
          to="/admin/certificates/generate"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Generate Certificate
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Certificate Type
              </th>

              <th className="p-4 text-left">
                Generated Date
              </th>
            </tr>
          </thead>

          <tbody>
            {certificates.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.student}
                </td>

                <td className="p-4">
                  {item.type}
                </td>

                <td className="p-4">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Certificates;