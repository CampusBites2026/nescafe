import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCard from "../../components/dashboard/StatsCard";
import AttendanceChart from "../../components/charts/AttendanceChart";
import API from "../../api/axios";

import {
  Users,
  GraduationCap,
  IndianRupee,
  BookOpen,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] =
    useState({
      students: 0,
      teachers: 0,
      books: 0,
      totalCollection: 0,
      pendingFees: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData =
    async () => {
      try {
        const res =
          await API.get(
            "/dashboard/stats"
          );

        setStats(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const dashboardCards = [
    {
      title: "Students",
      value: stats.students,
      icon: (
        <GraduationCap size={35} />
      ),
    },
    {
      title: "Teachers",
      value: stats.teachers,
      icon: (
        <Users size={35} />
      ),
    },
    {
      title: "Revenue",
      value: `₹${Number(
        stats.totalCollection || 0
      ).toLocaleString()}`,
      icon: (
        <IndianRupee size={35} />
      ),
    },
    {
      title: "Library Books",
      value: stats.books,
      icon: (
        <BookOpen size={35} />
      ),
    },
  ];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to School ERP
          Management System
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {dashboardCards.map(
          (item, index) => (
            <StatsCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          )
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <AttendanceChart />

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Fee Collection
          </h2>

          <div className="space-y-4">
            <div>
              <p>Total Collection</p>

              <h3 className="text-3xl font-bold text-green-600">
                ₹
                {Number(
                  stats.totalCollection ||
                    0
                ).toLocaleString()}
              </h3>
            </div>

            <div>
              <p>Pending Fees</p>

              <h3 className="text-3xl font-bold text-red-600">
                ₹
                {Number(
                  stats.pendingFees ||
                    0
                ).toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            Student records updated
          </div>

          <div className="border-b pb-3">
            Attendance records generated
          </div>

          <div className="border-b pb-3">
            Fee collection updated
          </div>

          <div className="border-b pb-3">
            Library inventory synced
          </div>

          <div>
            Dashboard statistics loaded
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;