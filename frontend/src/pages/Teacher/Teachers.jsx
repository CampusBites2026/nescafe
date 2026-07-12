import { useState } from "react";
import TeacherLayout from "../../components/layout/TeacherLayout";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Search } from "lucide-react";

const Teachers = () => {
  const [search, setSearch] = useState("");

  const [teachers] = useState([
    {
      id: 1,
      name: "Rajesh Sharma",
      subject: "Mathematics",
      email: "rajesh@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Priya Gupta",
      subject: "Science",
      email: "priya@gmail.com",
      phone: "9876543211",
    },
  ]);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      teacher.subject
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <TeacherLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Teachers Management
        </h1>

        <Link
          to="/admin/teachers/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Teacher
        </Link>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-5">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search Teacher..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="outline-none ml-2 w-full"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Subject
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.map(
              (teacher) => (
                <tr
                  key={teacher.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {teacher.name}
                  </td>

                  <td className="p-4">
                    {teacher.subject}
                  </td>

                  <td className="p-4">
                    {teacher.email}
                  </td>

                  <td className="p-4">
                    {teacher.phone}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <Link
                        to={`/admin/teachers/edit/${teacher.id}`}
                        className="text-blue-600"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button className="text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </TeacherLayout>
  );
};

export default Teachers;