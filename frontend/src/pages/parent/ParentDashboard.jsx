import ParentLayout from "../../components/layout/ParentLayout";

const ParentDashboard = () => {
  const stats = [
    {
      title: "Children",
      value: "2",
    },
    {
      title: "Attendance",
      value: "94%",
    },
    {
      title: "Pending Fees",
      value: "₹5,000",
    },
    {
      title: "Notices",
      value: "8",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Parent Dashboard
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
    </ParentLayout>
  );
};

export default ParentDashboard;