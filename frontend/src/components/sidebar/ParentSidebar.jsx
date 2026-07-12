import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  IndianRupee,
  FileText,
  Bell,
  User,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const ParentSidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/parent",
    },
    {
      title: "My Children",
      icon: <Users size={20} />,
      path: "/parent/children",
    },
    {
      title: "Attendance",
      icon: <CalendarCheck size={20} />,
      path: "/parent/attendance",
    },
    {
      title: "Fees",
      icon: <IndianRupee size={20} />,
      path: "/parent/fees",
    },
    {
      title: "Results",
      icon: <FileText size={20} />,
      path: "/parent/results",
    },
    {
      title: "Notices",
      icon: <Bell size={20} />,
      path: "/parent/notices",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/parent/profile",
    },
    {
      title: "Receipts",
      icon: <FileText size={20} />,
      path: "/parent/receipts",
   },
   {
      title: "Meetings",
      icon: <Users size={20} />,
      path: "/parent/meetings",
   },
   {
      title: "Messages",
      icon: <Bell size={20} />,
      path: "/parent/messages",
   },
   {
      title: "Leave Request",
      icon: <CalendarCheck size={20} />,
      path: "/parent/leave-request",
  },

  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">
          Parent Panel
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Parent Portal
        </p>
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

        <button className="flex items-center gap-3 p-3 rounded-lg mt-8 bg-red-600 w-full">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default ParentSidebar;