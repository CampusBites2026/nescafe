import {
  LayoutDashboard,
  CalendarCheck,
  IndianRupee,
  FileText,
  ClipboardList,
  Bell,
  BookOpen,
  Award,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/student",
    },
    {
      title: "Attendance",
      icon: <CalendarCheck size={20} />,
      path: "/student/attendance",
    },
    {
      title: "Fees",
      icon: <IndianRupee size={20} />,
      path: "/student/fees",
    },
    {
      title: "Results",
      icon: <FileText size={20} />,
      path: "/student/results",
    },
    {
      title: "Assignments",
      icon: <ClipboardList size={20} />,
      path: "/student/assignments",
    },
    {
      title: "Timetable",
      icon: <CalendarCheck size={20} />,
      path: "/student/timetable",
    },
    {
      title: "Notices",
      icon: <Bell size={20} />,
      path: "/student/notices",
    },
    {
      title: "Library",
      icon: <BookOpen size={20} />,
      path: "/student/library",
    },
    {
      title: "Certificates",
      icon: <Award size={20} />,
      path: "/student/certificates",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/student/profile",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">
          Student Panel
        </h2>
      </div>

      <div className="p-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg mb-2 ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default StudentSidebar;