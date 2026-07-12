import StudentLayout from "../../components/layout/StudentLayout";
import StatsCard from "../../components/dashboard/StatsCard";

import {
  BookOpen,
  Calendar,
  IndianRupee,
  Trophy,
} from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    {
      title: "Subjects",
      value: "8",
      icon: <BookOpen size={35} />,
    },
    {
      title: "Attendance",
      value: "92%",
      icon: <Calendar size={35} />,
    },
    {
      title: "Pending Fees",
      value: "₹12,000",
      icon: <IndianRupee size={35} />,
    },
    {
      title: "Results",
      value: "A Grade",
      icon: <Trophy size={35} />,
    },
  ];

  return (
    <StudentLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Student Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to your student portal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Exams
          </h2>

          <ul className="space-y-3">
            <li>Mathematics - 15 June</li>
            <li>Science - 18 June</li>
            <li>English - 20 June</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Recent Notices
          </h2>

          <ul className="space-y-3">
            <li>Summer Vacation Notice</li>
            <li>Fee Submission Reminder</li>
            <li>Sports Day Registration</li>
          </ul>
        </div>

      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;