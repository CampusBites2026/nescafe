import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import API from "../../api/axios";

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const res = await API.get("/results");

      setResults(
        res.data?.data ||
        res.data ||
        []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading Results...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Results Management
        </h1>

        <Link
          to="/admin/results/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Result
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Exam
              </th>

              <th className="p-4 text-left">
                Subject
              </th>

              <th className="p-4 text-left">
                Marks
              </th>

              <th className="p-4 text-left">
                Grade
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr
                key={result._id}
                className="border-b"
              >
                <td className="p-4">
                  {result.student?.name}
                </td>

                <td className="p-4">
                  {result.exam}
                </td>

                <td className="p-4">
                  {result.subject}
                </td>

                <td className="p-4">
                  {result.marks}
                </td>

                <td className="p-4">
                  {result.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Results;