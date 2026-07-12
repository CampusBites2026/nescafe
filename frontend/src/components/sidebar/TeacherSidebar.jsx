import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  FileText,
  Calendar,
  BookOpen,
  Bell,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/teacher",
    },
    {
      title: "My Students",
      icon: <Users size={20} />,
      path: "/teacher/students",
    },
    {
      title: "Attendance",
      icon: <ClipboardCheck size={20} />,
      path: "/teacher/attendance",
    },
    {
      title: "Assignments",
      icon: <FileText size={20} />,
      path: "/teacher/assignments",
    },
    {
      title: "Timetable",
      icon: <Calendar size={20} />,
      path: "/teacher/timetable",
    },
    {
      title: "Exams",
      icon: <BookOpen size={20} />,
      path: "/teacher/exams",
    },
    {
      title: "Results",
      icon: <BookOpen size={20} />,
      path: "/teacher/results",
    },
    {
      title: "Study Material",
      icon: <BookOpen size={20} />,
      path: "/teacher/materials",
    },
    {
      title: "Notices",
      icon: <Bell size={20} />,
      path: "/teacher/notices",
    },
    {
      title: "Leave Request",
      icon: <Calendar size={20} />,
      path: "/teacher/leave",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/teacher/profile",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">
          Teacher Panel
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

export default TeacherSidebar;