import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Visitors = () => {
  const visitors = [
    {
      id: 1,
      name: "Ramesh Gupta",
      purpose: "Parent Meeting",
      date: "11 June 2026",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Sunita Verma",
      purpose: "Admission Inquiry",
      date: "12 June 2026",
      phone: "9876543211",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Visitor Management
        </h1>

        <Link
          to="/admin/visitors/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Visitor
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Visitor Name
              </th>

              <th className="p-4 text-left">
                Purpose
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((visitor) => (
              <tr
                key={visitor.id}
                className="border-t"
              >
                <td className="p-4">
                  {visitor.name}
                </td>

                <td className="p-4">
                  {visitor.purpose}
                </td>

                <td className="p-4">
                  {visitor.phone}
                </td>

                <td className="p-4">
                  {visitor.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Visitors;