import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const FeeDashboard = () => {

  const [data, setData] =
    useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {

      const res = await API.get(
        "/fees/dashboard"
      );

      setData(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (!data) return null;

  return (
    <DashboardLayout>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">

          <h2>Total Collection</h2>

          <h1 className="text-3xl font-bold">
            ₹{data.totalCollected}
          </h1>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2>Pending Fees</h2>

          <h1 className="text-3xl font-bold">
            ₹{data.pendingAmount}
          </h1>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2>Overdue Fees</h2>

          <h1 className="text-3xl font-bold">
            ₹{data.overdueAmount}
          </h1>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default FeeDashboard;