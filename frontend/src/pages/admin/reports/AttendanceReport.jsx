import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const AttendanceReport = () => {
  const [attendance, setAttendance] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await API.get(
        "/attendance"
      );

      setAttendance(
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

  const filteredAttendance =
    attendance.filter((item) =>
      item.student?.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const totalRecords =
    attendance.length;

  const presentCount =
    attendance.filter(
      (item) =>
        item.status ===
        "Present"
    ).length;

  const absentCount =
    attendance.filter(
      (item) =>
        item.status ===
        "Absent"
    ).length;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Report...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Attendance Report
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Records
          </h3>

          <h2 className="text-3xl font-bold mt-2">
            {totalRecords}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Present
          </h3>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {presentCount}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Absent
          </h3>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {absentCount}
          </h2>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col md:flex-row md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-lg md:w-80"
        />

        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg">
          Export PDF
        </button>
      </div>

      {/* Report Table */}
      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendance.length ===
            0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500"
                >
                  No Records Found
                </td>
              </tr>
            ) : (
              filteredAttendance.map(
                (record) => (
                  <tr
                    key={
                      record._id
                    }
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4">
                      {record
                        .student
                        ?.name ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      {
                        record.className
                      }
                    </td>

                    <td className="p-4">
                      {record.date
                        ? new Date(
                            record.date
                          ).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          record.status ===
                          "Present"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {
                          record.status
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

export default AttendanceReport;