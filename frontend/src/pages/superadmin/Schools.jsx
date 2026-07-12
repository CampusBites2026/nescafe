import DashboardLayout from "../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const Schools = () => {
  const schools = [
    {
      id: 1,
      name: "Delhi Public School",
      city: "Lucknow",
      students: 2200,
    },
    {
      id: 2,
      name: "Modern School",
      city: "Delhi",
      students: 1800,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Schools Management
        </h1>

        <Link
          to="/superadmin/schools/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add School
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">School</th>
              <th className="p-4">City</th>
              <th className="p-4">Students</th>
            </tr>
          </thead>

          <tbody>
            {schools.map((school) => (
              <tr
                key={school.id}
                className="border-t"
              >
                <td className="p-4">
                  {school.name}
                </td>

                <td className="p-4">
                  {school.city}
                </td>

                <td className="p-4">
                  {school.students}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Schools;