import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAttendance = async () => {
    try {
      const res = await API.get("/attendance");

      setAttendance(res.data.data || res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch attendance records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const filteredAttendance = attendance.filter(
    (record) =>
      record.student?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Attendance...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Attendance Records
        </h1>

        <input
          type="text"
          placeholder="Search Student..."
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
            {filteredAttendance.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500"
                >
                  No Attendance Records Found
                </td>
              </tr>
            ) : (
              filteredAttendance.map((record) => (
                <tr
                  key={record._id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">
                    {record.student?.name}
                  </td>

                  <td className="p-4">
                    {record.className}
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
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {record.status}
                    </span>
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

export default Attendance;