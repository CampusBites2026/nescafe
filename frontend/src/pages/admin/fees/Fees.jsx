import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";
import { Link } from "react-router-dom";

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchFees = async () => {
    try {
      const res = await API.get("/fees");
      setFees(res.data.data || res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch fee records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  const filteredFees = fees.filter((fee) =>
    fee.student?.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Fee Records...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Fee Management
        </h1>

        <Link
          to="/admin/fees/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          Create Fee
        </Link>
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full md:w-80"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Paid
              </th>

              <th className="p-4 text-left">
                Due
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredFees.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="p-6 text-center text-gray-500"
                >
                  No Fee Records Found
                </td>
              </tr>
            ) : (
              filteredFees.map((fee) => (
                <tr
                  key={fee._id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">
                    {fee.student?.name}
                  </td>

                  <td className="p-4">
                    ₹{fee.amount}
                  </td>

                  <td className="p-4">
                    ₹{fee.paidAmount}
                  </td>

                  <td className="p-4">
                    ₹
                    {(
                      Number(fee.amount || 0) -
                      Number(fee.paidAmount || 0)
                    ).toLocaleString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        fee.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <Link
                      to={`/admin/fees/collect/${fee._id}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                    >
                      Collect
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Fees;