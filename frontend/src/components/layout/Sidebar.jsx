import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Receipt,
  Calendar,
  Bell,
  MessageSquare,
  IndianRupee,
  BarChart3,
  LogOut,
  Settings,
  BedDouble,
  Package,
  Bus,
  Award,
  UserCheck,
  MessageSquareMore,
  UserPlus,
  CalendarDays,
  Briefcase,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin",
    },
    {
      title: "Students",
      icon: <GraduationCap size={20} />,
      path: "/admin/students",
    },
    {
      title: "Teachers",
      icon: <Users size={20} />,
      path: "/admin/teachers",
    },
    {
      title: "Attendance",
      icon: <Calendar size={20} />,
      path: "/admin/attendance",
    },
    {
      title: "Fees",
      icon: <Receipt size={20} />,
      path: "/admin/fees",
    },
    {
      title: "Examinations",
      icon: <BookOpen size={20} />,
      path: "/admin/exams",
    },
    {
      title: "Library",
      icon: <BookOpen size={20} />,
      path: "/admin/library",
    },
    {
      title: "Results",
      icon: <BookOpen size={20} />,
      path: "/admin/results",
    },
    {
      title: "Timetable",
      icon: <Calendar size={20} />,
      path: "/admin/timetable",
    },
    {
      title: "Events",
      icon: <Bell size={20} />,
      path: "/admin/events",
    },
    {
      title: "Notices",
      icon: <Bell size={20} />,
      path: "/admin/notices",
    },
    {
      title: "Complaints",
      icon: <MessageSquare size={20} />,
      path: "/admin/complaints",
    },
    {
      title: "Payroll",
      icon: <IndianRupee size={20} />,
      path: "/admin/payroll",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/admin/reports",
    },
    {
      title: "Hostel",
      icon: <BedDouble size={20} />,
      path: "/admin/hostel",
    },
    {
      title: "Inventory",
      icon: <Package size={20} />,
      path: "/admin/inventory",
    },
    {
      title: "Transport",
      icon: <Bus size={20} />,
      path: "/admin/transport",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
    {
      title: "Certificates",
      icon: <Award size={20} />,
      path: "/admin/certificates",
    },
    {
      title: "Visitors",
      icon: <UserCheck size={20} />,
      path: "/admin/visitors",
    },
    {
      title: "Communications",
      icon: <MessageSquareMore size={20} />,
      path: "/admin/communications",
    }, 
    {
      title: "Admissions",
      icon: <UserPlus size={20} />,
      path: "/admin/admissions",
    },
    {
      title: "Academic Calendar",
      icon: <CalendarDays size={20} />,
      path: "/admin/calendar",
    },
    {
      title: "HRMS",
      icon: <Briefcase size={20} />,
      path: "/admin/hr",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          School ERP
        </h1>

        <p className="text-sm text-slate-400">
          Administration Panel
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;