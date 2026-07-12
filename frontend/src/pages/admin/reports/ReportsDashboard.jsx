import DashboardLayout from "../../../components/layout/DashboardLayout";
import AttendanceChart from "../../../components/charts/AttendanceChart";

const ReportsDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
    },
    {
      title: "Attendance Rate",
      value: "94%",
    },
    {
      title: "Fee Collection",
      value: "₹18,50,000",
    },
    {
      title: "Exam Pass Rate",
      value: "91%",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Reports & Analytics
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-sm text-gray-500">
              {item.title}
            </h3>

            <h2 className="text-3xl font-bold mt-2 text-slate-800">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Analytics Cards */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Student Performance
          </h2>

          <p className="text-gray-600">
            Monitor student academic growth,
            examination performance, and
            class-wise results.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Fee Collection
          </h2>

          <p className="text-gray-600">
            Analyze fee collection trends,
            pending payments, and revenue
            performance.
          </p>
        </div>
      </div>

      {/* Attendance Analytics */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-5">
          Attendance Analytics
        </h2>

        <AttendanceChart />
      </div>
    </DashboardLayout>
  );
};

export default ReportsDashboard;