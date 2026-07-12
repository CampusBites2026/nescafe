import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherNotices = () => {
  const notices = [
    {
      title: "Staff Meeting",
      date: "15 June 2026",
      message: "All teachers must attend the staff meeting.",
    },
    {
      title: "Exam Duty",
      date: "20 June 2026",
      message: "Exam duty schedule has been published.",
    },
  ];

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        Notices
      </h1>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              {notice.title}
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              {notice.date}
            </p>

            <p>{notice.message}</p>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
};

export default TeacherNotices;