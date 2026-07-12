import TeacherLayout from "../../components/layout/TeacherLayout";
import StatsCard from "../../components/dashboard/StatsCard";

import {
  Users,
  BookOpen,
  ClipboardCheck,
  Bell,
} from "lucide-react";

const TeacherDashboard = () => {
  const stats = [
    {
      title: "Students",
      value: "245",
      icon: <Users size={35} />,
    },
    {
      title: "Classes",
      value: "8",
      icon: <BookOpen size={35} />,
    },
    {
      title: "Attendance Pending",
      value: "3",
      icon: <ClipboardCheck size={35} />,
    },
    {
      title: "Notifications",
      value: "12",
      icon: <Bell size={35} />,
    },
  ];

  return (
        <TeacherLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Teacher Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back! Here's your classroom overview.
        </p>
      </div>

      {/* Stats */}
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

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Today's Tasks
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✓ Take Class 10 Attendance</li>
            <li>✓ Check Assignment Submissions</li>
            <li>✓ Update Student Results</li>
            <li>✓ Review Notices</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Upcoming Classes
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>Mathematics - 09:00 AM</li>
            <li>Science - 11:00 AM</li>
            <li>Computer - 01:00 PM</li>
            <li>English - 03:00 PM</li>
          </ul>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Attendance submitted for Class 10A
          </div>

          <div className="border-b pb-3">
            Results uploaded for Mathematics Test
          </div>

          <div className="border-b pb-3">
            Assignment created for Science Class
          </div>

          <div>
            New notice received from Administration
          </div>

        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherDashboard;