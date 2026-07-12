import StudentLayout from "../../components/layout/StudentLayout";

const StudentNotices = () => {
  const notices = [
    {
      title: "Summer Vacation",
      date: "15 June 2026",
    },
    {
      title: "Exam Schedule Released",
      date: "20 June 2026",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Notices
      </h1>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg">
              {notice.title}
            </h2>

            <p className="text-gray-500">
              {notice.date}
            </p>
          </div>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentNotices;