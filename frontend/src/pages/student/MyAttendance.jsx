import StudentLayout from "../../components/layout/StudentLayout";

const MyAttendance = () => {
  const attendanceData = [
    {
      month: "January",
      percentage: "92%",
    },
    {
      month: "February",
      percentage: "95%",
    },
    {
      month: "March",
      percentage: "89%",
    },
    {
      month: "April",
      percentage: "94%",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Attendance
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left">
                Month
              </th>

              <th className="p-4 text-left">
                Attendance %
              </th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map(
              (item, index) => (
                <tr
                  key={index}
                  className="border-t"
                >
                  <td className="p-4">
                    {item.month}
                  </td>

                  <td className="p-4">
                    {item.percentage}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
};

export default MyAttendance;