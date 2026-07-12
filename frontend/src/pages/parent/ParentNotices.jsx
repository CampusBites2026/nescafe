import ParentLayout from "../../components/layout/ParentLayout";

const ParentNotices = () => {
  const notices = [
    {
      title: "PTM Scheduled",
      date: "15 June 2026",
    },
    {
      title: "Summer Vacation Notice",
      date: "20 June 2026",
    },
    {
      title: "Fee Submission Reminder",
      date: "25 June 2026",
    },
  ];

  return (
    <ParentLayout>
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
    </ParentLayout>
  );
};

export default ParentNotices;