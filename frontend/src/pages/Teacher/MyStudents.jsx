import { useEffect, useState } from "react";
import TeacherLayout from "../../components/layout/TeacherLayout";
import API from "../../api/axios";

const MyStudents = () => {
  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get(
        "/students"
      );

      setStudents(
        res.data.data || res.data
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TeacherLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Students
      </h1>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr>

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Class
              </th>

              <th className="p-4">
                Roll No
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map(
              (student) => (
                <tr
                  key={student._id}
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
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </TeacherLayout>
  );
};

export default MyStudents;