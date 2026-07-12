import DashboardLayout from "../../components/layout/DashboardLayout";

const SuperAdminDashboard = () => {
  const stats = [
    {
      title: "Schools",
      value: "24",
    },
    {
      title: "Students",
      value: "48,200",
    },
    {
      title: "Teachers",
      value: "2,450",
    },
    {
      title: "Revenue",
      value: "₹48 Lakh",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Super Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-500">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;