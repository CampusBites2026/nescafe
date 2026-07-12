import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherResults = () => {
  const results = [
    {
      student: "Rahul Kumar",
      class: "10-A",
      subject: "Mathematics",
      marks: 92,
      grade: "A+",
    },
    {
      student: "Anjali Singh",
      class: "10-A",
      subject: "Mathematics",
      marks: 85,
      grade: "A",
    },
  ];

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        Student Results
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Student</th>
              <th className="p-4">Class</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Marks</th>
              <th className="p-4">Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{item.student}</td>
                <td className="p-4">{item.class}</td>
                <td className="p-4">{item.subject}</td>
                <td className="p-4">{item.marks}</td>
                <td className="p-4">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TeacherLayout>
  );
};

export default TeacherResults;