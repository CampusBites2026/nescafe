import ParentLayout from "../../components/layout/ParentLayout";
import { Download } from "lucide-react";

const FeeReceipts = () => {
  const receipts = [
    {
      id: "RCP001",
      amount: "₹10,000",
      date: "10 June 2026",
    },
    {
      id: "RCP002",
      amount: "₹8,000",
      date: "10 March 2026",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Fee Receipts
      </h1>

      <div className="space-y-4">
        {receipts.map((receipt) => (
          <div
            key={receipt.id}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {receipt.id}
              </h3>

              <p>{receipt.amount}</p>

              <p className="text-gray-500">
                {receipt.date}
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>
        ))}
      </div>
    </ParentLayout>
  );
};

export default FeeReceipts;