import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";
import { Link } from "react-router-dom";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchExams = async () => {
    try {
      const res = await API.get("/exams");
      setExams(res.data.data || res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch exams");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const filteredExams = exams.filter(
    (exam) =>
      exam.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      exam.subject
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      exam.className
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Exams...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Examination Management
        </h1>

        <Link
          to="/admin/exams/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          Create Exam
        </Link>
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Exam..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-lg w-full md:w-80"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Exam Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Subject
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredExams.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500"
                >
                  No Exams Found
                </td>
              </tr>
            ) : (
              filteredExams.map((exam) => (
                <tr
                  key={exam._id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">
                    {exam.name}
                  </td>

                  <td className="p-4">
                    {exam.className}
                  </td>

                  <td className="p-4">
                    {exam.subject}
                  </td>

                  <td className="p-4">
                    {exam.date
                      ? new Date(
                          exam.date
                        ).toLocaleDateString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Exams;