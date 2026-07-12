import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

const Navbar = () => {
  const [currentTime, setCurrentTime] =
    useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-20 bg-white border-b px-6 flex items-center justify-between shadow-sm">
      
      {/* Left Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          School ERP Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          {currentTime.toLocaleDateString()} •{" "}
          {currentTime.toLocaleTimeString()}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center border border-slate-300 rounded-xl px-3 py-2 w-72">
          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none ml-2 w-full"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell
            size={22}
            className="text-slate-700"
          />

          <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 border-l pl-5">
          <UserCircle
            size={38}
            className="text-blue-600"
          />

          <div>
            <p className="font-semibold text-slate-800">
              Admin User
            </p>

            <p className="text-xs text-slate-500">
              Super Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;