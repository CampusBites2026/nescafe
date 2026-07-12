import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const DueFees = () => {

  const [fees, setFees] =
    useState([]);

  useEffect(() => {
    fetchDueFees();
  }, []);

  const fetchDueFees = async () => {

    const res =
      await API.get("/fees/due");

    setFees(
      res.data.data || []
    );
  };

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">

        Due Fees

      </h1>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr>

              <th className="p-4">
                Student
              </th>

              <th className="p-4">
                Amount
              </th>

              <th className="p-4">
                Due Date
              </th>

            </tr>

          </thead>

          <tbody>

            {fees.map((fee) => (

              <tr key={fee._id}>

                <td className="p-4">
                  {fee.student?.name}
                </td>

                <td className="p-4">
                  ₹{fee.amount}
                </td>

                <td className="p-4">
                  {fee.dueDate}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default DueFees;