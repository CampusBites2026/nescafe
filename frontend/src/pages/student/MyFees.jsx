import StudentLayout from "../../components/layout/StudentLayout";

const MyFees = () => {
  const fees = [
    {
      id: 1,
      term: "Quarter 1",
      amount: 15000,
      paid: 10000,
      status: "Partial",
    },
    {
      id: 2,
      term: "Quarter 2",
      amount: 15000,
      paid: 15000,
      status: "Paid",
    },
    {
      id: 3,
      term: "Quarter 3",
      amount: 15000,
      paid: 0,
      status: "Pending",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Fee Details
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left">
                Term
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Paid
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {fees.map((fee) => (
              <tr
                key={fee.id}
                className="border-t"
              >
                <td className="p-4">
                  {fee.term}
                </td>

                <td className="p-4">
                  ₹{fee.amount}
                </td>

                <td className="p-4">
                  ₹{fee.paid}
                </td>

                <td className="p-4">
                  <span
                    className={
                      fee.status === "Paid"
                        ? "text-green-600 font-semibold"
                        : fee.status === "Partial"
                        ? "text-yellow-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
};

export default MyFees;