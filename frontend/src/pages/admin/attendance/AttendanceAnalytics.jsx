import DashboardLayout from "../../../components/layout/DashboardLayout";
import AttendanceChart from "../../../components/charts/AttendanceChart";

const AttendanceAnalytics = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Attendance Analytics
      </h1>

      <AttendanceChart />

    </DashboardLayout>
  );
};

export default AttendanceAnalytics;