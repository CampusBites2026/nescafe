import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Rajesh Sharma",
      department: "Teaching",
      designation: "Math Teacher",
      status: "Active",
    },
    {
      id: 2,
      name: "Anita Verma",
      department: "Administration",
      designation: "Office Manager",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Employee Management
        </h1>

        <Link
          to="/admin/hr/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Employee
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Designation</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-t"
              >
                <td className="p-4">
                  {employee.name}
                </td>

                <td className="p-4">
                  {employee.department}
                </td>

                <td className="p-4">
                  {employee.designation}
                </td>

                <td className="p-4">
                  <span className="text-green-600 font-semibold">
                    {employee.status}
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

export default Employees;