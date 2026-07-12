import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const getStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Students Management
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          Add Student
        </button>

      </div>

      <input
        type="text"
        placeholder="Search Student..."
        className="border p-3 rounded-lg mb-5 w-80"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Roll No
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.map(
              (student) => (
                <tr
                  key={student._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {student.name}
                  </td>

                  <td className="p-4">
                    {student.className}
                  </td>

                  <td className="p-4">
                    {student.rollNo}
                  </td>

                  <td className="p-4">
                    {student.email}
                  </td>

                  <td className="p-4 flex gap-3">

                    <button className="bg-green-600 text-white px-3 py-1 rounded">

                      Edit

                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">

                      Delete

                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default Students;