import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const FeeReport = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const res = await API.get("/fees");

      setFees(
        res.data?.data ||
          res.data ||
          []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFees =
    fees.filter((fee) =>
      fee.student?.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const totalFees = fees.reduce(
    (sum, fee) =>
      sum +
      Number(fee.amount || 0),
    0
  );

  const collectedFees =
    fees.reduce(
      (sum, fee) =>
        sum +
        Number(
          fee.paidAmount || 0
        ),
      0
    );

  const pendingFees =
    totalFees - collectedFees;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Fee Report...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Fee Collection Report
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Fees
          </h3>

          <h2 className="text-3xl font-bold mt-2">
            ₹
            {totalFees.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Collected
          </h3>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            ₹
            {collectedFees.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Pending
          </h3>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            ₹
            {pendingFees.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col md:flex-row md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-lg md:w-80"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          Export Excel
        </button>
      </div>

      {/* Fee Table */}
      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Total Fee
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
            {filteredFees.length ===
            0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500"
                >
                  No Records Found
                </td>
              </tr>
            ) : (
              filteredFees.map(
                (fee) => (
                  <tr
                    key={fee._id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4">
                      {fee.student
                        ?.name ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      ₹
                      {Number(
                        fee.amount || 0
                      ).toLocaleString()}
                    </td>

                    <td className="p-4">
                      ₹
                      {Number(
                        fee.paidAmount ||
                          0
                      ).toLocaleString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          fee.status ===
                          "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default FeeReport;