import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherExams = () => {
  const exams = [
    {
      exam: "Mid Term",
      class: "10-A",
      subject: "Mathematics",
      date: "15 Sept 2026",
    },
    {
      exam: "Final Exam",
      class: "9-B",
      subject: "Mathematics",
      date: "10 Dec 2026",
    },
  ];

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Exams
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Exam</th>
              <th className="p-4">Class</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {exams.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{item.exam}</td>
                <td className="p-4">{item.class}</td>
                <td className="p-4">{item.subject}</td>
                <td className="p-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TeacherLayout>
  );
};

export default TeacherExams;