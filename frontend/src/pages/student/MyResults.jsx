import StudentLayout from "../../components/layout/StudentLayout";

const MyResults = () => {
  const results = [
    {
      subject: "Mathematics",
      marks: 92,
      grade: "A+",
    },
    {
      subject: "Science",
      marks: 88,
      grade: "A",
    },
    {
      subject: "English",
      marks: 81,
      grade: "A",
    },
    {
      subject: "Computer",
      marks: 95,
      grade: "A+",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Results
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
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
            {results.map(
              (result, index) => (
                <tr
                  key={index}
                  className="border-t"
                >
                  <td className="p-4">
                    {result.subject}
                  </td>

                  <td className="p-4">
                    {result.marks}
                  </td>

                  <td className="p-4 font-semibold text-green-600">
                    {result.grade}
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

export default MyResults;