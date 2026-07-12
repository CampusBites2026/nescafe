import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const PayrollDashboard = () => {
  const [stats, setStats] = useState({
    totalSalary: 0,
    paidSalary: 0,
    pendingSalary: 0,
    employees: 0,
  });

  const [loading, setLoading] =
    useState(true);

  const fetchPayrollData =
    async () => {
      try {
        const res = await API.get(
          "/payroll"
        );

        const salaries =
          res.data?.data ||
          res.data ||
          [];

        const totalSalary =
          salaries.reduce(
            (sum, item) =>
              sum +
              Number(
                item.amount || 0
              ),
            0
          );

        const paidSalary =
          salaries
            .filter(
              (item) =>
                item.status ===
                "Paid"
            )
            .reduce(
              (sum, item) =>
                sum +
                Number(
                  item.amount ||
                    0
                ),
              0
            );

        const pendingSalary =
          totalSalary -
          paidSalary;

        setStats({
          totalSalary,
          paidSalary,
          pendingSalary,
          employees:
            salaries.length,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchPayrollData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Payroll...
        </div>
      </DashboardLayout>
    );
  }

  const cards = [
    {
      title:
        "Total Salary",
      value: `₹${stats.totalSalary.toLocaleString()}`,
    },
    {
      title:
        "Paid Salary",
      value: `₹${stats.paidSalary.toLocaleString()}`,
    },
    {
      title:
        "Pending Salary",
      value: `₹${stats.pendingSalary.toLocaleString()}`,
    },
    {
      title:
        "Employees",
      value: stats.employees,
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Payroll Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(
          (
            card,
            index
          ) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-gray-500 text-sm">
                {card.title}
              </h2>

              <h1 className="text-3xl font-bold mt-3 text-slate-800">
                {card.value}
              </h1>
            </div>
          )
        )}
      </div>

      <div className="bg-white rounded-xl shadow mt-8 p-6">
        <h2 className="text-xl font-semibold mb-3">
          Payroll Summary
        </h2>

        <p className="text-gray-600">
          Monitor salary
          payments, pending
          payouts, and staff
          payroll records
          from this dashboard.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default PayrollDashboard;