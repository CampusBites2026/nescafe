import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const Salaries = () => {
  const [salaries, setSalaries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const res = await API.get(
        "/payroll"
      );

      setSalaries(
        res.data?.data ||
          res.data ||
          []
      );
    } catch (error) {
      console.log(error);
      alert(
        "Failed to load salary records"
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredSalaries =
    salaries.filter((salary) =>
      salary.teacher?.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Salaries...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Salary Records
        </h1>

        <Link
          to="/admin/payroll/salaries/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Create Salary
        </Link>
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Teacher..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-lg w-full md:w-80"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Teacher
              </th>

              <th className="p-4 text-left">
                Salary
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredSalaries.length ===
            0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="p-6 text-center text-gray-500"
                >
                  No Salary Records Found
                </td>
              </tr>
            ) : (
              filteredSalaries.map(
                (salary) => (
                  <tr
                    key={
                      salary._id
                    }
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4">
                      {salary
                        .teacher
                        ?.name ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      ₹
                      {Number(
                        salary.amount ||
                          0
                      ).toLocaleString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          salary.status ===
                          "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {
                          salary.status
                        }
                      </span>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Salaries;