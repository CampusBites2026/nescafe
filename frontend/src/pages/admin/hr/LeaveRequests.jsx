import DashboardLayout from "../../../components/layout/DashboardLayout";

const LeaveRequests = () => {
  const requests = [
    {
      id: 1,
      employee: "Rajesh Sharma",
      from: "10 Jun 2026",
      to: "12 Jun 2026",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Anita Verma",
      from: "15 Jun 2026",
      to: "16 Jun 2026",
      status: "Approved",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Leave Requests
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Employee</th>
              <th className="p-4">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.employee}
                </td>

                <td className="p-4">
                  {item.from}
                </td>

                <td className="p-4">
                  {item.to}
                </td>

                <td className="p-4">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default LeaveRequests;