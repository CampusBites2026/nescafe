import StudentLayout from "../../components/layout/StudentLayout";

const StudentAssignments = () => {
  const assignments = [
    {
      title: "Math Assignment",
      subject: "Mathematics",
      dueDate: "20 June 2026",
    },
    {
      title: "Science Project",
      subject: "Science",
      dueDate: "25 June 2026",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Assignments
      </h1>

      <div className="grid gap-4">
        {assignments.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">
              {item.title}
            </h3>

            <p>{item.subject}</p>

            <p className="text-red-500">
              Due: {item.dueDate}
            </p>
          </div>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentAssignments;