import DashboardLayout from "../../../components/layout/DashboardLayout";

const TeacherAttendance = () => {

  const teachers = [
    {
      name: "Rahul Sharma",
      status: "Present"
    },
    {
      name: "Priya Singh",
      status: "Absent"
    }
  ];

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Teacher Attendance
      </h1>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr>

              <th className="p-4">
                Teacher
              </th>

              <th className="p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {teachers.map((teacher, i) => (

              <tr
                key={i}
                className="border-b"
              >

                <td className="p-4">
                  {teacher.name}
                </td>

                <td className="p-4">

                  <span
                    className={
                      teacher.status ===
                      "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {teacher.status}
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

export default TeacherAttendance;