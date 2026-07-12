import { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const CollectFee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const collectFee = async (e) => {
    e.preventDefault();

    const feeAmount =
      Number(amount);

    if (
      !feeAmount ||
      feeAmount <= 0
    ) {
      alert(
        "Please enter a valid amount"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await API.put(
        `/fees/collect/${id}`,
        {
          amount: feeAmount,
        }
      );

      alert(
        res.data?.message ||
          "Fee Collected Successfully"
      );

      navigate("/admin/fees");
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Failed to collect fee"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-xl">
        <h2 className="text-2xl font-bold mb-5">
          Collect Fee
        </h2>

        <form
          onSubmit={collectFee}
          className="space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium">
              Amount
            </label>

            <input
              type="number"
              min="1"
              required
              autoFocus
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }
              className="border p-3 rounded w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-5 py-3 rounded-lg transition w-full"
          >
            {loading
              ? "Collecting..."
              : "Collect Fee"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CollectFee;